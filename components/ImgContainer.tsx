import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  photo: {
    imageUrl: string;
    blurredDataUrl: string;
    width: number;
    height: number;
  };
};
const ImgContainer: React.FC<Props> = ({ photo }) => {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center relative"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={photo.imageUrl}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.imageUrl}
            alt={"Gallery image"}
            width={photo.width}
            height={photo.height}
            sizes="250px"
            className="group-hover:opacity-75"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          />
        </div>
      </Link>
    </div>
  );
};

export default ImgContainer;
