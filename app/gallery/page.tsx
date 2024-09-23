import { title } from "@/components/primitives";
import Gallery from "@/components/Gallery";

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
      {/* <ImageGallery /> */}
      <Gallery />
    </div>
  );
}
