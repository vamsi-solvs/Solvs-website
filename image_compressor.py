import os
import subprocess

def compress_images(source_folder, name_folder):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    output_folder = os.path.join(base_dir, "public", name_folder)
    os.makedirs(output_folder, exist_ok=True)

    for filename in os.listdir(source_folder):
        # Only handle images
        if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
            continue

        # Remove leading underscores from the filename for the output
        cleaned_name = filename.lstrip("_")
        # Fallback if name becomes empty (very unlikely)
        if not cleaned_name:
            cleaned_name = filename.lstrip("_") or filename

        input_path = os.path.join(source_folder, filename)
        output_name = os.path.splitext(cleaned_name)[0] + ".webp"
        output_path = os.path.join(output_folder, output_name)

        # FFmpeg: resize to 1600px width, compress to quality 40
        subprocess.run([
            "ffmpeg", "-i", input_path,
            "-vf", "scale=1600:-1",
            "-q:v", "40",
            "-y",  # overwrite existing
            output_path
        ])

        print(f"✅ {filename} → public/{name_folder}/{output_name}")

    print("\n🎉 All done! Compressed images saved in:", output_folder)

if __name__ == "__main__":
    src = input("Enter path to your image folder: ").strip()
    name = input("Enter folder name for 'public/{name_folder}': ").strip()
    compress_images(src, name)