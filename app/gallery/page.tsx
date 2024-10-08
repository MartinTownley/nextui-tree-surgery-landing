import { title } from "@/components/primitives";
import Gallery from "@/components/Gallery";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default async function GalleryPage() {
  const galleryComponent = await Gallery();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
  ];
  return (
    <div>
      {/* <h1 className={`${title()} text-center`}>Gallery</h1> */}
      <div className="mx-4 mb-4">
        <BreadcrumbComponent />
      </div>
      {/* <h1 className="text-3xl font-bold text-center">Gallery</h1> */}
      {galleryComponent}
    </div>
  );
}
