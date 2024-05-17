import React from "react";
import { fetchImgurImages } from "@/app/lib/fetchImgurImages";
import type { ImgurAlbum } from "@/models/Images";

export default async function ImgurGallery() {
  const albumHash = "N24f6Zb";
  const url = `https://api.imgur.com/3/album/${albumHash}/images`;

  const album: ImgurAlbum | undefined = await fetchImgurImages(url);

  console.log("Images:", album);

  if (!album)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  return (
    <section>
      <ul>
        {album.data.map((image) => (
          <li key={image.id}>{image.link}</li>
        ))}
      </ul>
    </section>
  );
}
