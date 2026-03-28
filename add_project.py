import os
import subprocess
import re
import zipfile
import tempfile
import shutil

def process_images_and_add_project():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    projects_js_path = os.path.join(base_dir, "src", "utils", "projects.js")
    
    if not os.path.exists(projects_js_path):
        print(f"❌ projects.js not found at {projects_js_path}")
        return

    print("--- Image Compression & Path Generation ---")
    src = input("Enter path to your image folder: ").strip()
    if not src:
        print("❌ Source folder is required to process images.")
        return

    name_folder = input("Enter folder name (this will be used for 'public/{name_folder}'): ").strip()
    if not name_folder:
        print("❌ Folder name is required.")
        return

    output_folder = os.path.join(base_dir, "public", name_folder)
    os.makedirs(output_folder, exist_ok=True)

    image_paths = []
    is_zip = False
    temp_dir = None

    if src.lower().endswith('.zip') and os.path.isfile(src):
        print("\n📦 ZIP file detected. Extracting...")
        is_zip = True
        temp_dir = tempfile.mkdtemp()
        with zipfile.ZipFile(src, 'r') as zip_ref:
            zip_ref.extractall(temp_dir)
        process_src = temp_dir
    elif src.lower().endswith('.rar') and os.path.isfile(src):
        print("\n📦 RAR file detected. Extracting...")
        is_zip = True  # reuse auto-cleanup logic
        temp_dir = tempfile.mkdtemp()
        if shutil.which("unar"):
            subprocess.run(["unar", "-f", "-o", temp_dir, src], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            process_src = temp_dir
        elif shutil.which("unrar"):
            subprocess.run(["unrar", "x", "-y", src, temp_dir], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            process_src = temp_dir
        elif shutil.which("7z"):
            subprocess.run(["7z", "x", "-y", f"-o{temp_dir}", src], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            process_src = temp_dir
        else:
            print("❌ Error: A RAR extractor ('unar', 'unrar', or '7z') is required.")
            print("Please install one by running: brew install unar")
            shutil.rmtree(temp_dir)
            return
    else:
        process_src = src

    print("\nCompressing images...")
    if os.path.exists(process_src):
        for root, dirs, files in os.walk(process_src):
            if '__MACOSX' in root:
                continue
            for filename in files:
                if filename.startswith('.'):
                    continue
                if not filename.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                    continue

                cleaned_name = filename.lstrip("_") or filename
                input_path = os.path.join(root, filename)
                
                if not filename.lower().endswith(".webp"):
                    output_name = os.path.splitext(cleaned_name)[0] + ".webp"
                    output_path = os.path.join(output_folder, output_name)
                    
                    # Use cwebp instead of ffmpeg
                    result = subprocess.run([
                        "cwebp",
                        input_path,
                        "-q", "85",          # quality (80–90 ideal)
                        "-resize", "2400", "0",  # max width 2400, keep aspect ratio
                        "-o", output_path
                    ], capture_output=True)

                    if result.returncode == 0:
                        print(f"✅ {filename} → public/{name_folder}/{output_name}")
                    else:
                        print(f"❌ Failed: {filename}")
                        if result.stderr:
                            print(result.stderr.decode())
                else:
                    output_name = cleaned_name
                    output_path = os.path.join(output_folder, output_name)
                    if input_path != output_path:
                        subprocess.run(["cp", input_path, output_path])
                    print(f"✅ {filename} copied to public/{name_folder}/{output_name}")

                image_paths.append(f"/{name_folder}/{output_name}")
        
        if is_zip and temp_dir:
            shutil.rmtree(temp_dir)
            
    else:
        print(f"❌ Source folder or ZIP not found: {src}")
        return

    if not image_paths:
        print("⚠️ No images found or processed from the source folder.")
        
    print("\n🎉 All done! Compressed images saved in:", output_folder)
    print("\nPaths generated:")
    for p in image_paths:
        print(f"  {p}")

    # 2. Ask for the relevant information
    print("\n--- Enter Project Details for projects.js ---")
    print("(Press Enter to leave a field blank)")
    
    title = input("Title: ").strip()
    location = input("Location: ").strip()

    print("\n--- Project Category ---")
    categories = [
        "Master Planning",
        "Public",
        "Commercial",
        "Residential",
        "Renovation"
    ]
    for i, cat in enumerate(categories, 1):
        print(f"{i}. {cat}")
    
    cat_input = input(f"Select a category (1-{len(categories)}) or type a new one (leave blank for none): ").strip()
    if cat_input.isdigit() and 1 <= int(cat_input) <= len(categories):
        category = categories[int(cat_input) - 1]
    else:
        category = cat_input

    print("") # Empty line for cleaner formatting
    description = input("Description: ").strip()
    details = input("Details: ").strip()
    area = input("Area (e.g., 12000 Sq.Ft): ").strip()
    status = input("Status (e.g., Completed): ").strip()
    architects = input("Architects: ").strip()

    image_url = image_paths[0] if image_paths else ""

    # Generate JS object array string for images
    if image_paths:
        images_js = "[\n      " + ",\n      ".join(f'"{path}"' for path in image_paths) + "\n    ]"
    else:
        images_js = "[]"

    with open(projects_js_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find highest id
    ids = re.findall(r'id:\s*"(\d+)",', content)
    next_id = str(max([int(i) for i in ids] + [0]) + 1) if ids else "1"

    new_project = f"""  {{
    id: "{next_id}",
    imageUrl: "{image_url}",
    title: "{title}",
    location: "{location}",
    category: "{category}",
    slug: generateSlug("{title}"),
    description: "{description}",
    details: "{details}",
    images: {images_js},
    area: "{area}",
    status: "{status}",
    architects: "{architects}",
  }},
"""
    # Insert before the last ];
    if "];" in content:
        parts = content.rsplit("];", 1)
        new_content = parts[0] + new_project + "];" + parts[1]
        with open(projects_js_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"\n✅ Successfully added '{title}' to projects.js!")
    else:
        print("\n❌ Could not find closing '];' in projects.js to add the new project.")

if __name__ == "__main__":
    try:
        process_images_and_add_project()
    except KeyboardInterrupt:
        print("\nProcess interrupted by user.")
