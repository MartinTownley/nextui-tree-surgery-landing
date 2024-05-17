import { fetchImages } from "@/app/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";

import React from "react";

export default async function PexelsGallery() {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImagesResults | undefined = await fetchImages(url);

  console.log("images:", images);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  return (
    <section>
      <ul>
        {images.photos.map((photo) => (
          <li key={photo.id}>{photo.src.large}</li>
        ))}
      </ul>
    </section>
  );
}
