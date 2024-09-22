import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import type { ImgurImage } from "@/models/Imgur-image";
import Image from "next/image";
import { Button } from "@nextui-org/react";

type Props = {
  images: ImgurImage[];
  initialIndex: number;
  onClose: () => void;
};

export default function ImageSwiper({ images, initialIndex, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <Button
        onPress={onClose}
        color="danger"
        variant="bordered"
        className="absolute top-4 right-4"
      >
        Close
      </Button>
      <Swiper initialSlide={initialIndex}>
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.link}
              alt={`Gallery image ${image.id}`}
              layout="fill"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
