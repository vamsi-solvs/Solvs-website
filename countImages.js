const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "public");

// image extensions to count
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];

let count = 0;

function countImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            countImages(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                count++;
            }
        }
    }
}

countImages(PUBLIC_DIR);

console.log(`📸 Total images in /public: ${count}`);