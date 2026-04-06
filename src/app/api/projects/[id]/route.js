import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import os from "os";

const execAsync = promisify(exec);

const PROJECTS_JS_PATH = path.join(process.cwd(), "src", "utils", "projects.js");

// ---------- helpers (same as in route.js) ----------

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Find one project by id using regex parsing */
function findProjectById(id) {
  const content = fs.readFileSync(PROJECTS_JS_PATH, "utf-8");
  const anchorRx = new RegExp(`id:\\s*"${id}"`);
  const anchorMatch = anchorRx.exec(content);
  if (!anchorMatch) return null;

  let openBrace = anchorMatch.index;
  while (openBrace >= 0 && content[openBrace] !== "{") openBrace--;

  let depth = 0;
  let closeBrace = openBrace;
  for (; closeBrace < content.length; closeBrace++) {
    if (content[closeBrace] === "{") depth++;
    else if (content[closeBrace] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }

  const block = content.slice(openBrace, closeBrace + 1);

  const get = (key) => {
    const r = block.match(new RegExp(`${key}:\\s*"([^"]*)"`, "s"));
    return r ? r[1] : "";
  };
  const getImages = () => {
    const r = block.match(/images:\s*\[([\s\S]*?)\]/);
    if (!r) return [];
    return [...r[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
  };

  return {
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
  };
}

/** Replace a project block in projects.js by id */
function replaceProjectInFile(updatedProject) {
  let content = fs.readFileSync(PROJECTS_JS_PATH, "utf-8");
  const idAnchor = `id: "${updatedProject.id}"`;
  const anchorIdx = content.indexOf(idAnchor);
  if (anchorIdx === -1) return false;

  let openBrace = anchorIdx;
  while (openBrace >= 0 && content[openBrace] !== "{") openBrace--;

  let depth = 0;
  let closeBrace = openBrace;
  for (; closeBrace < content.length; closeBrace++) {
    if (content[closeBrace] === "{") depth++;
    else if (content[closeBrace] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }

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

/** Delete a project block from projects.js by id */
function deleteProjectFromFile(id) {
  let content = fs.readFileSync(PROJECTS_JS_PATH, "utf-8");
  const idAnchor = `id: "${id}"`;
  const anchorIdx = content.indexOf(idAnchor);
  if (anchorIdx === -1) return false;

  let openBrace = anchorIdx;
  while (openBrace >= 0 && content[openBrace] !== "{") openBrace--;

  // Walk back to include any leading whitespace/newline
  let blockStart = openBrace;
  while (blockStart > 0 && (content[blockStart - 1] === " " || content[blockStart - 1] === "\n")) {
    blockStart--;
  }

  let depth = 0;
  let closeBrace = openBrace;
  for (; closeBrace < content.length; closeBrace++) {
    if (content[closeBrace] === "{") depth++;
    else if (content[closeBrace] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }

  // Consume trailing comma and newline
  let endIdx = closeBrace + 1;
  while (endIdx < content.length && (content[endIdx] === "," || content[endIdx] === "\n")) endIdx++;

  content = content.slice(0, blockStart) + "\n" + content.slice(endIdx);
  fs.writeFileSync(PROJECTS_JS_PATH, content, "utf-8");
  return true;
}

/** Compress an image buffer with cwebp and save to public/<folder>/<name>.webp */
async function compressAndSaveImage(buffer, originalName, folderName) {
  const publicFolder = path.join(process.cwd(), "public", folderName);
  fs.mkdirSync(publicFolder, { recursive: true });

  const baseName = path.parse(originalName).name.replace(/^\.+/, "");
  const outputName = `${baseName}.webp`;
  const outputPath = path.join(publicFolder, outputName);

  const tmpInput = path.join(os.tmpdir(), `upload_${Date.now()}_${originalName}`);
  fs.writeFileSync(tmpInput, buffer);

  try {
    await execAsync(`cwebp "${tmpInput}" -q 85 -resize 2400 0 -o "${outputPath}"`);
  } finally {
    fs.rmSync(tmpInput, { force: true });
  }

  return `/${folderName}/${outputName}`;
}

// ---------- route handlers ----------

/** GET /api/projects/[id] — get a single project */
export async function GET(request, { params }) {
  const { id } = await params;
  const project = findProjectById(id);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
  return NextResponse.json({ project });
}

/**
 * PUT /api/projects/[id] — update an existing project
 *
 * Accepts multipart/form-data (same fields as POST, images optional)
 * OR application/json.
 *
 * Any field not provided keeps its existing value.
 */
export async function PUT(request, { params }) {
  const { id } = await params;

  const existing = findProjectById(id);
  if (!existing) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  try {
    const contentType = request.headers.get("content-type") ?? "";
    let fields = {};
    let newImagePaths = null; // null = don't replace images

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();

      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") fields[key] = value;
      }

      const imageFiles = formData.getAll("images").filter((f) => typeof f !== "string");
      if (imageFiles.length > 0) {
        const folderName = fields.folderName ?? id;
        newImagePaths = [];
        for (const file of imageFiles) {
          const buffer = Buffer.from(await file.arrayBuffer());
          const p = await compressAndSaveImage(buffer, file.name, folderName);
          newImagePaths.push(p);
        }
      }
    } else {
      fields = await request.json();
      if (Array.isArray(fields.images)) {
        newImagePaths = fields.images;
      }
    }

    const updatedProject = {
      id,
      imageUrl: fields.imageUrl ?? (newImagePaths ? newImagePaths[0] : existing.imageUrl),
      title: fields.title ?? existing.title,
      location: fields.location ?? existing.location,
      category: fields.category ?? existing.category,
      slug: generateSlug(fields.title ?? existing.title),
      description: fields.description ?? existing.description,
      details: fields.details ?? existing.details,
      images: newImagePaths ?? existing.images,
      area: fields.area ?? existing.area,
      status: fields.status ?? existing.status,
      architects: fields.architects ?? existing.architects,
    };

    const ok = replaceProjectInFile(updatedProject);
    if (!ok) {
      return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
    }

    return NextResponse.json({ project: updatedProject });
  } catch (err) {
    console.error(`[PUT /api/projects/${id}]`, err);
    return NextResponse.json({ error: err.message ?? "Failed to update project" }, { status: 500 });
  }
}

/** DELETE /api/projects/[id] — remove a project */
export async function DELETE(request, { params }) {
  const { id } = await params;

  const existing = findProjectById(id);
  if (!existing) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  try {
    const ok = deleteProjectFromFile(id);
    if (!ok) {
      return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
    }
    return NextResponse.json({ message: `Project ${id} deleted successfully` });
  } catch (err) {
    console.error(`[DELETE /api/projects/${id}]`, err);
    return NextResponse.json({ error: err.message ?? "Failed to delete project" }, { status: 500 });
  }
}
