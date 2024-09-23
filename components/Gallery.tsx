import React from "react";
import Image from "next/image";
import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import type { ImgurImage, ImgurAlbum } from "@/models/Imgur-image";
import ImgContainer from "@/components/ImgContainer";
import ImageContainer from "./ImageContainer";
import Link from "next/link";

export default async function Gallery() {
  const albumHash = "N24f6Zb";
  const url = `https://api.imgur.com/3/album/${albumHash}/images`;

  const album: ImgurAlbum | undefined = await fetchImgurAlbum(url);

  console.log(album);

  if (!album || album.data.length === 0)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {album.data.map((image) => (
        <div key={image.id}>
          <Link href={`/image/${image.id}`}>
            <ImageContainer image={image} />
          </Link>
        </div>
      ))}
    </section>
  );
}
