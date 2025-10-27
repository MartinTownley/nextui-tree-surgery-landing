// app/gallery/[id]/page.tsx
import galleryData from "@/public/data/gallery-data";
import DetailImageContainer from "@/components/ImageContainer/DetailImageContainer";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";

export async function generateStaticParams() {
  // Generate one static path per image in your local gallery data
  return galleryData.map((image) => ({
    id: image.id.toString(),
  }));
}

export default async function PhotoDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Find the image data by ID
  const image = galleryData.find((img) => img.id.toString() === id);

  if (!image) {
    return <h2 className="m-4 text-2xl font-bold">No Image Found</h2>;
  }

  return (
    <div>
      <BreadcrumbComponent />
      <DetailImageContainer image={image} />
    </div>
  );
}
