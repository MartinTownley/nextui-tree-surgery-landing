import React from "react";
import Image from "next/image";

import GalleryImageContainer from "./ImageContainer/GalleryImageContainer";
import galleryData from "../public/data/gallery-data";

export default function Gallery() {
  return (
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
      {galleryData.map((image) => (
        <GalleryImageContainer key={image.id} image={image} />
      ))}
    </section>
  );
}
