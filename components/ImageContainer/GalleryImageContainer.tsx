import type { ImgurImage } from "@/models/imgur-schemas";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: ImgurImage;
};

export default function GalleryImageContainer({ image }: Props) {
  if (!image) {
    return <div>No image data</div>;
  }

  const widthHeightRatio = image.height / image.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const imageSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${imageSpans}` }}
    >
      {/* <Link
        href={image.link}
        target="_blank"
        className="grid place-content-center"
      > */}
      <Link href={`/gallery/${image.id}`}>
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={image.link}
            alt={"Gallery image"}
            width={250}
            height={galleryHeight}
            sizes="250px"
            className="group-hover:opacity-75"
          />
        </div>
      </Link>
    </div>
  );
}
