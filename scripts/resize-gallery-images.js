const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const GALLERY_DIR = path.join(__dirname, "../public/gallery-imgs");
const MAX_SIZE = 1500;

async function resizeImages() {
  const files = fs.readdirSync(GALLERY_DIR).filter((f) => f.endsWith(".webp"));

  console.log(`Found ${files.length} images`);

  for (const file of files) {
    const filePath = path.join(GALLERY_DIR, file);
    const image = sharp(filePath);
    const metadata = await image.metadata();

    const { width, height } = metadata;

    if (width > MAX_SIZE || height > MAX_SIZE) {
      console.log(`Resizing ${file} (${width}x${height})`);
      const resized = await image
        .resize(MAX_SIZE, MAX_SIZE, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: 85 })
        .toBuffer();

      fs.writeFileSync(filePath, resized);
      console.log(`  ✓ Done`);
    } else {
      console.log(`Skipping ${file} (${width}x${height}) — already small enough`);
    }
  }

  console.log("All done.");
}

resizeImages().catch(console.error);
