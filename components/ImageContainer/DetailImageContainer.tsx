import type { ImgurImage } from "@/models/imgur-schemas";
import Image from "next/image";

type Props = {
  image: ImgurImage;
};

export default function DetailImageContainer({ image }: Props) {
  if (!image) {
    return <div>No image data</div>;
  }

  return (
    <div
      key={image.id}
      className="flex justify-center items-center min-h-screen"
    >
      <Image
        src={image.link}
        alt="Full size image"
        width={0}
        height={0}
        sizes="100vw"
        className="max-h-[90vh] w-auto max-w-full object-cover rounded-xl"
      />
    </div>
  );
}
