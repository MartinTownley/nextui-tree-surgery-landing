import React from "react";
import Image from "next/image";

type Props = {
  photo: {
    imageUrl: string;
    blurredDataUrl: string;
  };
};
const ImgContainer: React.FC<Props> = ({ photo }) => {
  // const widthHeightRatio =

  return (
    <div className="h-64 bg-gray rounded-xl relative overflow-hidden group ">
      <Image
        src={photo.imageUrl}
        alt={"Gallery image"}
        fill={true}
        sizes="(min-width: 1380px) 298px, (min-width: 1100px) calc(17.31vw + 63px), (min-width: 840px) calc(33.33vw - 27px), (min-width: 580px) calc(50vw - 36px), (min-width: 540px) calc(100vw - 64px), calc(93.64vw - 31px)"
        className="object-cover group-hover:opacity-75"
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
      />
    </div>
  );
};

export default ImgContainer;
