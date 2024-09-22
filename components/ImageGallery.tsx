"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchImgurImages } from "@/app/lib/fetchImgurImages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ImgurImage } from "@/models/Imgur";

interface ImageGalleryProps {
  albumUrl: string;
}

export default function ImageGallery() {
  const albumHash = "N24f6Zb";
  const albumUrl = `https://api.imgur.com/3/album/${albumHash}/images`;

  const [images, setImages] = useState<ImgurImage[]>([]);
  const [swiperVisible, setSwiperVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadImages() {
      const imgurAlbum = await fetchImgurImages(albumUrl);
      if (imgurAlbum) {
        setImages(imgurAlbum.data);
      }
    }
    loadImages();
  }, [albumUrl]);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setSwiperVisible(true);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={image.id} onClick={() => handleImageClick(index)}>
            <Image
              src={image.link}
              alt="--"
              width={300}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {swiperVisible && (
        <div className="swiper-container">
          <Swiper initialSlide={currentIndex}>
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <Image
                  src={image.link}
                  alt="--"
                  width={800}
                  height={800}
                  layout="responsive"
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={() => setSwiperVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
