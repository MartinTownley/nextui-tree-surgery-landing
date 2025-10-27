import fs from "fs";
import path from "path";

const galleryDir = "./public/gallery-imgs";
const outputFile = "./public/data/gallery-data.ts";

const files = fs
  .readdirSync(galleryDir)
  .filter((file) => /\.(jpe?g|png|webp)$/i.test(file));

const galleryData = files.map((file, i) => ({
  id: i + 1,
  src: `/gallery-imgs/${file}`,
  alt: path.parse(file).name.replace(/[-_]/g, " "),
}));

const content = `export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = ${JSON.stringify(galleryData, null, 2)};

export default galleryImages;
`;

fs.writeFileSync(outputFile, content);
console.log(`✅ Generated ${outputFile} with ${files.length} images`);
