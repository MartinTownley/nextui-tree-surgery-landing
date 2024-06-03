import Gallery from "@/components/Gallery";
import { title } from "@/components/primitives";
import NewGallery from "@/components/NewGallery";
import Image from "next/image";

import PexelsGallery from "@/components/PexelsGallery";
import ImgurGallery from "@/components/ImgurGallery";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export default async function GalleryPage() {
  return (
    <div>
      <h1 className={title()}>Gallery</h1>

      {/* <Image src={image.url} alt="Gallery image" width={250} height={250} /> */}

      {/* <NewGallery /> */}
      {/* <Gallery /> */}
      {/* <ReGallery /> */}
      {/* <GalleryTest /> */}
      {/* <PexelsGallery /> */}
      <ImgurGallery />
    </div>
  );
}
