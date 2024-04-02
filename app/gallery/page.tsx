import Gallery from "@/components/Gallery";
import { title } from "@/components/primitives";
import NewGallery from "@/components/NewGallery";

export default function GalleryPage() {
  return (
    <div>
      <h1 className={title()}>Gallery</h1>
      {/* <NewGallery /> */}
      <Gallery />
    </div>
  );
}
