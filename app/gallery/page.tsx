import { title } from "@/components/primitives";
import Gallery from "@/components/Gallery";

export default async function GalleryPage() {
  const galleryComponent = await Gallery();
  return (
    <div>
      <h1 className={title()}>Gallery</h1>
      {galleryComponent}
    </div>
  );
}
