import os
import subprocess

def compress_images(source_folder, name_folder):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    output_folder = os.path.join(base_dir, "public", name_folder)
    os.makedirs(output_folder, exist_ok=True)

    for filename in os.listdir(source_folder):
        if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
            continue

        cleaned_name = filename.lstrip("_") or filename
        input_path = os.path.join(source_folder, filename)
        output_name = os.path.splitext(cleaned_name)[0] + ".webp"
        output_path = os.path.join(output_folder, output_name)

        # FFmpeg: high-quality WebP with tuned balance
        subprocess.run([
            "ffmpeg", "-i", input_path,
            "-vf", "scale=2400:-1:force_original_aspect_ratio=decrease",  # higher resolution
            "-quality", "90",                # high visual quality
            "-compression_level", "4",       # moderate compression
            "-preset", "photo",              # tuned for photos
            "-y",
            output_path
        ])

        print(f"✅ {filename} → public/{name_folder}/{output_name}")

    print("\n🎉 All done! Compressed images saved in:", output_folder)

if __name__ == "__main__":
    src = input("Enter path to your image folder: ").strip()
    name = input("Enter folder name for 'public/{name_folder}': ").strip()
    compress_images(src, name)