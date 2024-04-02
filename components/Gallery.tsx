import React, { useEffect, useState } from "react";
import ImgContainer from "@/components/ImgContainer";
import fetchImages from "@/app/actions/fetchImages";
import addBlurredDataUrls from "@/app/lib/getBase64";

export default async function Gallery() {
  const imageUrls: string[] | undefined = await fetchImages();

  if (!imageUrls)
    return <h2 className="m-4 text-2xl font-bold"> No Images Found</h2>;

  const photosWithBlur = await addBlurredDataUrls(imageUrls);

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery ">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.imageUrl} photo={photo} />
      ))}

      {/* {galleryImages.map((image, index) => (
        <div
          key={index}
          className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group"
        >
          <Image
            src={image}
            alt={`Gallery image ${index + 1}`}
            // fill={true}
            width={250}
            height={250}
            // sizes="(min-width: 1380px) 298px, (min-width: 1100px) calc(17.31vw + 63px), (min-width: 840px) calc(33.33vw - 27px), (min-width: 580px) calc(50vw - 36px), (min-width: 540px) calc(100vw - 64px), calc(93.64vw - 31px)"
            sizes="250px"
            // placeholder="blur"
            className="object-cover group-hover:opacity-75"
          />
        </div>
      ))} */}
    </section>
  );
}