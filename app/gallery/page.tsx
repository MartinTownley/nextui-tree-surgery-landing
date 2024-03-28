import Gallery from "@/components/Gallery";
import { title } from "@/components/primitives";

export default function GalleryPage() {
  return (
    <div>
      <h1 className={title()}>Gallery</h1>
      <Gallery />
    </div>
  );
}
