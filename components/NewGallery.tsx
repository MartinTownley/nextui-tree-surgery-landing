import React, { useEffect, useState } from "react";
import ImgContainer from "@/components/ImgContainer";
import fetchImages from "@/app/actions/fetchImages";
import addBlurredDataUrls from "@/app/lib/getBase64";
import { ImageWithBlur } from "@/app/lib/getBase64";

export default function NewGallery() {
  const [photosWithBlur, setPhotosWithBlur] = useState<ImageWithBlur[]>([]);

  useEffect(() => {
    async function fetchData() {
      const images = await fetchImages();
      if (images) {
        const photos = await addBlurredDataUrls(images);
        setPhotosWithBlur(photos);
      }
    }
    fetchData();
  }, []);

  if (!photosWithBlur.length)
    return <h2 className="m-4 text-2xl font-bold"> No Images Found</h2>;

  return (
    <section className="px-1 my-3 grid  grid-cols-gallery auto-rows-[10px]">
      {photosWithBlur.map((photo) => (
        <ImgContainer
          key={photo.url}
          photo={{
            imageUrl: photo.url,
            blurredDataUrl: photo.blurredDataUrl,
            width: photo.width,
            height: photo.height,
          }}
        />
      ))}
    </section>
  );
}
