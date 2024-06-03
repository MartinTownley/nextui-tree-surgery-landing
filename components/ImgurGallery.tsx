import React from "react";
import { fetchImgurImages } from "@/app/lib/fetchImgurImages";
import type { ImgurAlbum } from "@/models/Imgur";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";

export default async function ImgurGallery() {
  const albumHash = "N24f6Zb";
  const url = `https://api.imgur.com/3/album/${albumHash}/images`;

  const photos: ImgurAlbum | undefined = await fetchImgurImages(url);

  console.log("PHOTOS:", photos);

  if (!photos)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  return (
    <PhotoAlbum
      layout="rows"
      photos={photos}
      renderPhoto={NextJsImage}
      defaultContainerWidth={1200}
      sizes={{ size: "calc(100vw - 240px)" }}
    />

    // <section>
    //   <ul>
    //     {photos.data.map((image) => (
    //       <li key={image.id}>{image.link}</li>
    //     ))}
    //   </ul>
    // </section>
  );
}
