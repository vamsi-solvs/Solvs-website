import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import os from "os";

const execAsync = promisify(exec);

// Path to projects.js data file
const PROJECTS_JS_PATH = path.join(process.cwd(), "src", "utils", "projects.js");

// ---------- helpers ----------

/**
 * Parse projects array out of the raw JS file content.
 * Returns plain JS objects (safe values only – no function calls kept).
 */
function readProjectsFile() {
  const content = fs.readFileSync(PROJECTS_JS_PATH, "utf-8");
  return content;
}

/**
 * Pull the raw projects array from the JS module using a quick regex parse.
 * We re-export the file at runtime via dynamic require with a cache-bust.
 */
async function getProjects() {
  // Use dynamic import with a cache-busting query (works in Node.js runtime)
  const fileUrl = `file://${PROJECTS_JS_PATH}?t=${Date.now()}`;
  try {
    const mod = await import(fileUrl);
    return mod.projects ?? [];
  } catch {
    // Fallback: regex-parse the raw file
    return parseProjectsFromFile(readProjectsFile());
  }
}

/**
 * Simple regex-based parser to extract projects when dynamic import fails.
 */
function parseProjectsFromFile(content) {
  // Extract JSON-like objects (best-effort; not for deeply nested JS)
  const projects = [];
  const idMatches = [...content.matchAll(/id:\s*"(\d+)"/g)];
  idMatches.forEach((m) => {
    const id = m[1];
    const start = m.index;
    // grab the surrounding object block
    let depth = 0;
    let i = start;
    while (i < content.length && content[i] !== "{") i--;
    const objStart = i;
    for (; i < content.length; i++) {
      if (content[i] === "{") depth++;
      else if (content[i] === "}") {
        depth--;
        if (depth === 0) break;
      }
    }
    const block = content.slice(objStart, i + 1);
    // Parse individual fields
    const get = (key) => {
      const r = block.match(new RegExp(`${key}:\\s*"([^"]*)"`, "s"));
      return r ? r[1] : "";
    };
    const getImages = () => {
      const r = block.match(/images:\s*\[([\s\S]*?)\]/);
      if (!r) return [];
      return [...r[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
    };

    projects.push({
      id,
      imageUrl: get("imageUrl"),
      title: get("title"),
      location: get("location"),
      category: get("category"),
      slug: get("slug"),
      description: get("description"),
      details: get("details"),
      images: getImages(),
      area: get("area"),
      status: get("status"),
      architects: get("architects"),
    });
  });
  return projects;
}

/** Generate a slug from a title */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Write a project block into projects.js.
 * Inserts before the closing `];`.
 */
function appendProjectToFile(project) {
  const content = fs.readFileSync(PROJECTS_JS_PATH, "utf-8");

  const imagesJs =
    "[\n      " +
    project.images.map((p) => `"${p}"`).join(",\n      ") +
    "\n    ]";

  const block = `  {
    id: "${project.id}",
    imageUrl: "${project.imageUrl}",
    title: "${project.title}",
    location: "${project.location}",
    category: "${project.category}",
    slug: generateSlug("${project.title}"),
    description: "${project.description}",
    details: "${project.details}",
    images: ${imagesJs},
    area: "${project.area}",
    status: "${project.status}",
    architects: "${project.architects}",
  },\n`;

  if (!content.includes("];")) {
    throw new Error("Could not find closing '];\' in projects.js");
  }

  const parts = content.rsplit
    ? content.rsplit("];", 1)
    : (() => {
        const idx = content.lastIndexOf("];");
        return [content.slice(0, idx), content.slice(idx + 2)];
      })();

  const newContent = parts[0] + block + "];" + (parts[1] ?? "");
  fs.writeFileSync(PROJECTS_JS_PATH, newContent, "utf-8");
}

/**
 * Replace an existing project block in projects.js by id.
 */
function replaceProjectInFile(updatedProject) {
  let content = fs.readFileSync(PROJECTS_JS_PATH, "utf-8");

  // Find the id anchor, then locate the enclosing { ... } block
  const idAnchor = `id: "${updatedProject.id}"`;
  const anchorIdx = content.indexOf(idAnchor);
  if (anchorIdx === -1) return false;

  // Walk back to opening brace
  let openBrace = anchorIdx;
  while (openBrace >= 0 && content[openBrace] !== "{") openBrace--;

  // Walk forward to matching closing brace
  let depth = 0;
  let closeBrace = openBrace;
  for (; closeBrace < content.length; closeBrace++) {
    if (content[closeBrace] === "{") depth++;
    else if (content[closeBrace] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }

  // Consume optional trailing comma
  let endIdx = closeBrace + 1;
  while (endIdx < content.length && content[endIdx] === ",") endIdx++;

  const imagesJs =
    "[\n      " +
    updatedProject.images.map((p) => `"${p}"`).join(",\n      ") +
    "\n    ]";

  const newBlock = `  {
    id: "${updatedProject.id}",
    imageUrl: "${updatedProject.imageUrl}",
    title: "${updatedProject.title}",
    location: "${updatedProject.location}",
    category: "${updatedProject.category}",
    slug: generateSlug("${updatedProject.title}"),
    description: "${updatedProject.description}",
    details: "${updatedProject.details}",
    images: ${imagesJs},
    area: "${updatedProject.area}",
    status: "${updatedProject.status}",
    architects: "${updatedProject.architects}",
  },`;

  content = content.slice(0, openBrace) + newBlock + content.slice(endIdx);
  fs.writeFileSync(PROJECTS_JS_PATH, content, "utf-8");
  return true;
}

/**
 * Compress an image buffer with cwebp and save to public/<folder>/<name>.webp
 * Returns the public path string.
 */
async function compressAndSaveImage(buffer, originalName, folderName) {
  const publicFolder = path.join(process.cwd(), "public", folderName);
  fs.mkdirSync(publicFolder, { recursive: true });

  const baseName = path.parse(originalName).name.replace(/^\.+/, "");
  const outputName = `${baseName}.webp`;
  const outputPath = path.join(publicFolder, outputName);

  // Write buffer to a temp file
  const tmpInput = path.join(os.tmpdir(), `upload_${Date.now()}_${originalName}`);
  fs.writeFileSync(tmpInput, buffer);

  try {
    await execAsync(
      `cwebp "${tmpInput}" -q 85 -resize 2400 0 -o "${outputPath}"`
    );
  } finally {
    fs.rmSync(tmpInput, { force: true });
  }

  return `/${folderName}/${outputName}`;
}

// ---------- route handlers ----------

/** GET /api/projects — return all projects */
export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({ projects });
  } catch (err) {
    console.error("[GET /api/projects]", err);
    return NextResponse.json({ error: "Failed to load projects" }, { status: 500 });
  }
}

/**
 * POST /api/projects — create a new project
 *
 * Accepts multipart/form-data with:
 *   - images: File[] (image files)
 *   - folderName: string  (sub-folder under public/)
 *   - title, location, category, description, details,
 *     area, status, architects  (all strings)
 *
 * OR application/json with:
 *   - images: string[]  (already-public paths, e.g. "/folder/img.webp")
 *   - folderName, title, location, category, …
 */
export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let fields = {};
    let imagePaths = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();

      // Extract text fields
      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") fields[key] = value;
      }

      const folderName = fields.folderName;
      if (!folderName) {
        return NextResponse.json({ error: "folderName is required" }, { status: 400 });
      }

      // Process image files
      const imageFiles = formData.getAll("images");
      for (const file of imageFiles) {
        if (typeof file === "string") continue; // skip non-file entries
        const buffer = Buffer.from(await file.arrayBuffer());
        const publicPath = await compressAndSaveImage(buffer, file.name, folderName);
        imagePaths.push(publicPath);
      }
    } else {
      // JSON body
      fields = await request.json();
      imagePaths = Array.isArray(fields.images) ? fields.images : [];
    }

    const { title, location, category, description, details, area, status, architects } = fields;
    if (!title) {
      return NextResponse.json({ error: "title is required" }, { status: 400 });
    }

    // Determine next id
    const content = readProjectsFile();
    const ids = [...content.matchAll(/id:\s*"(\d+)"/g)].map((m) => parseInt(m[1], 10));
    const nextId = String((ids.length ? Math.max(...ids) : 0) + 1);

    const newProject = {
      id: nextId,
      imageUrl: imagePaths[0] ?? "",
      title: title ?? "",
      location: location ?? "",
      category: category ?? "",
      slug: generateSlug(title ?? ""),
      description: description ?? "",
      details: details ?? "",
      images: imagePaths,
      area: area ?? "",
      status: status ?? "",
      architects: architects ?? "",
    };

    appendProjectToFile(newProject);

    return NextResponse.json({ project: newProject }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/projects]", err);
    return NextResponse.json({ error: err.message ?? "Failed to create project" }, { status: 500 });
  }
}
