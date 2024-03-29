import React from "react";
import { galleryImages } from "./imagePaths";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="h-64 bg-gray-200 rounded-xl relative overflow-hidden"
        >
          <Image
            src={image}
            alt="Gallery"
            fill={true}
            sizes="(min-width: 1380px) 298px, (min-width: 1100px) calc(17.31vw + 63px), (min-width: 840px) calc(33.33vw - 27px), (min-width: 580px) calc(50vw - 36px), (min-width: 540px) calc(100vw - 64px), calc(93.64vw - 31px)"
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
