import { title } from "@/components/primitives";
import Image from "next/image";

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
      {/* <ImgurGallery /> */}
    </div>
  );
}
