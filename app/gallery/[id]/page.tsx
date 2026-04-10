// app/gallery/[id]/page.tsx
import galleryData from "@/public/data/gallery-data";
import DetailImageContainer from "@/components/ImageContainer/DetailImageContainer";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import Link from "next/link";

export async function generateStaticParams() {
  // Generate one static path per image in your local gallery data
  return galleryData.map((image) => ({
    id: image.id.toString(),
  }));
}

export default async function PhotoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Find the image data by ID
  const image = galleryData.find((img) => img.id.toString() === id);

  if (!image) {
    return <h2 className="m-4 text-2xl font-bold">No Image Found</h2>;
  }

  //--
  const currentIndex = galleryData.findIndex((img) => img.id.toString() === id);
  const prevImage = galleryData[currentIndex - 1];
  const nextImage = galleryData[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col gap-6">
      <BreadcrumbComponent />
      <DetailImageContainer image={image} />
      <div className="flex justify-between items-center">
        {prevImage ? (
          <Link href={`/gallery/${prevImage.id}`} className="text-white/70 hover:text-white transition-colors text-lg">
            ← Prev
          </Link>
        ) : <span />}
        {nextImage ? (
          <Link href={`/gallery/${nextImage.id}`} className="text-white/70 hover:text-white transition-colors text-lg">
            Next →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
