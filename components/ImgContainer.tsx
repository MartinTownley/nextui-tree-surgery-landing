import React from "react";
import Image from "next/image";

type Props = {
  imageUrl: string;
};

const ImgContainer: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className="h-64 rounded-xl">
      <Image src={imageUrl} alt={"Gallery image"} width={250} height={250} />
    </div>
  );
};

export default ImgContainer;
