import React, { useEffect, useState } from "react";
import ImgContainer from "@/components/ImgContainer";
import fetchImages from "@/app/actions/fetchImages";
import addBlurredDataUrls from "@/app/lib/getBase64";

export default async function ReGallery() {
  const images: { url: string; width: number; height: number }[] | undefined =
    await fetchImages();

  if (!images)
    return <h2 className="m-4 text-2xl font-bold"> No Images Found</h2>;

  return (
    <section className="px-1 my-3 grid  grid-cols-gallery auto-rows-[10px]">
      {images.map((photo) => (
        <ImgContainer
          key={photo.url}
          photo={{
            imageUrl: photo.url,
            blurredDataUrl: "",
            width: photo.width,
            height: photo.height,
          }}
        />
      ))}
    </section>
  );
}
