import os

def get_image_paths(folder_name):
    """Return and print image paths inside public/{folder_name} as a JS-style list."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    folder_path = os.path.join(base_dir, "public", folder_name)
    image_extensions = (".jpg", ".jpeg", ".png", ".webp")

    if not os.path.exists(folder_path):
        print(f"❌ Folder not found: {folder_path}")
        return

    image_paths = []
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(image_extensions):
            image_paths.append(f"/{folder_name}/{filename}")

    # Print in JS list format
    print("\n[\n  " + ",\n  ".join(f'"{path}"' for path in image_paths) + ",\n]")
    

if __name__ == "__main__":
    folder = input("Enter folder name (inside public): ").strip()
    get_image_paths(folder)