import React from "react";
import Image from "next/image";
import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import type { ImgurImage, ImgurAlbum } from "@/models/Imgur-image";
import ImgContainer from "@/components/ImgContainer";
import ImageContainer from "./ImageContainer";

export default async function Gallery() {
  const albumHash = "N24f6Zb";
  const url = `https://api.imgur.com/3/album/${albumHash}/images`;

  const album: ImgurAlbum | undefined = await fetchImgurAlbum(url);

  if (!album || album.data.length === 0)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {album.data.map((image) => (
        // <div key={image.id} className="h-64 bg-slate-900 rounded-xl"></div>
        <ImageContainer image={image} />
      ))}
    </section>
  );
}
