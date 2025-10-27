import Image from "next/image";
import Link from "next/link";

type Props = {
  image: {
    id: number;
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export default function GalleryImageContainer({ image }: Props) {
  if (!image) {
    return <div>No image data</div>;
  }

  const width = image.width || 250;
  const height = image.height || 250;

  const widthHeightRatio = height / width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const imageSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${imageSpans}` }}
    >
      <Link href={`/gallery/${image.id}`}>
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={image.src}
            alt={image.alt || "Gallery image"}
            width={250}
            height={galleryHeight}
            sizes="250px"
            className="group-hover:opacity-75 object-cover"
          />
        </div>
      </Link>
    </div>
  );
}
