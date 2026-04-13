"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryImage } from "@/public/data/gallery-data";

type Props = {
  image: GalleryImage;
  onImageClick: (image: GalleryImage) => void;
  index: number;
};

export default function GalleryImageContainer({ image, onImageClick, index }: Props) {
  if (!image) {
    return <div>No image data</div>;
  }

  const width = image.width || 250;
  const height = image.height || 250;

  const widthHeightRatio = height / width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const imageSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <motion.div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${imageSpans}` }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: (index % 6) * 0.08 }}
    >
      <div onClick={() => onImageClick(image)}>
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={image.src}
            alt={image.alt || "Gallery image"}
            width={250}
            height={galleryHeight}
            sizes="250px"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
}
