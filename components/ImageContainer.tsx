import type { ImgurImage } from "@/models/imgur-schemas";
import Image from "next/image";
import { ImageSlide } from "yet-another-react-lightbox/*";

type Props = {
  image: ImgurImage;
};

export default function ImageContainer({ image }: Props) {
  return (
    <div
      key={image.id}
      className="group h-64 bg-gray-200 rounded-xl relative overflow-hidden"
    >
      <Image
        src={image.link}
        alt="Gallery image"
        fill={true}
        sizes="(min-width: 1380px) 298px, (min-width: 1100px) calc(17.31vw + 63px), (min-width: 840px) calc(33.33vw - 27px), (min-width: 580px) calc(50vw - 36px), (min-width: 540px) calc(100vw - 64px), calc(93.64vw - 31px)"
        className="object-cover group-hover:opacity-75"
      />
    </div>
  );
}
