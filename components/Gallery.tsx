import React from "react";
import { galleryImages } from "./imagePaths";

const Gallery = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {galleryImages.map((image, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={image} alt="Gallery" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
