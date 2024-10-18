import fetchImgurImage from "@/app/lib/fetchImgurImage";
import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import { ImgurAlbum, ImgurImage } from "@/models/imgur-schemas";
import ImageContainer from "@/components/ImageContainer/ImageContainer";
import React from "react";
import DetailImageContainer from "@/components/ImageContainer/DetailImageContainer";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";

export async function generateStaticParams() {
  const albumHash = "N24f6Zb";
  const url = `https://api.imgur.com/3/album/${albumHash}/images`;

  const album: ImgurAlbum | undefined = await fetchImgurAlbum(url);

  if (!album) {
    return [];
  }

  return album.data.map((image) => ({
    id: image.id,
  }));
}

export default async function PhotoDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const url = `https://api.imgur.com/3/image/${id}`;
  // console.log("Fetching image with url:", url);

  const image: ImgurImage | undefined = await fetchImgurImage(url);

  if (!image) {
    return <h2 className="m-4 text-2xl font-bold">No Image Found</h2>;
  }

  return (
    <div className="">
      <BreadcrumbComponent />

      {/* <h1 className="text-3xl font-bold mb-4">Image Detail</h1> */}
      <DetailImageContainer image={image} />
    </div>
  );
}
