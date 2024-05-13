import React, { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import fetchImages from "@/app/actions/fetchImages";
import addBlurredDataUrls from "@/app/lib/getBase64";

import NextJsImage from "./NextJsImage";
// import { photos } from "@/app/lightbox/data";

export default async function Gallery() {
  const photos: { src: string; width: number; height: number }[] | undefined =
    await fetchImages();

  if (!photos)
    return <h2 className="m-4 text-2xl font-bold"> No Images Found</h2>;

  // const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <PhotoAlbum
      layout="rows"
      photos={photos}
      renderPhoto={NextJsImage}
      defaultContainerWidth={1200}
      sizes={{ size: "calc(100w - 240px)" }}
    />
  );
}
