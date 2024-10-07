import React from "react";
import Image from "next/image";
import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import type { ImgurAlbum } from "@/models/imgur-schemas";
import ImageContainer from "./ImageContainer/ImageContainer";
import Link from "next/link";
import GalleryImageContainer from "./ImageContainer/GalleryImageContainer";

export default async function Gallery() {
  const albumHash = "N24f6Zb";
  const url = `https://api.imgur.com/3/album/${albumHash}/images`;

  const album: ImgurAlbum | undefined = await fetchImgurAlbum(url);

  if (!album || album.data.length === 0)
    return (
      <h2 className="m-4 text-2xl font-bold">No Images Found / Album Empty</h2>
    );

  return (
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
      {album.data.map((image) => (
        <GalleryImageContainer key={image.id} image={image} />
      ))}
    </section>
  );
}
