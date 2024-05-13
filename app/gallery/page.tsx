import Gallery from "@/components/Gallery";
import { title } from "@/components/primitives";
import NewGallery from "@/components/NewGallery";
import ReGallery from "@/components/ReGallery";
import Image from "next/image";
import GalleryTest from "@/components/GalleryTest";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export default async function GalleryPage() {
  // const image = await fetch(
  //   "https://sparrowhawk-bucket.s3.eu-north-1.amazonaws.com/album1/_img-1.jpeg"
  // );

  return (
    <div>
      <h1 className={title()}>Gallery</h1>

      {/* <Image src={image.url} alt="Gallery image" width={250} height={250} /> */}

      {/* <NewGallery /> */}
      {/* <Gallery /> */}
      {/* <ReGallery /> */}
      <GalleryTest />
    </div>
  );
}
