// gallery/page.tsx
import { title } from "@/components/primitives";
import Gallery from "@/components/Gallery";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default async function GalleryPage() {
  // const galleryComponent = Gallery();
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
      <Gallery />
    </div>
  );
}
