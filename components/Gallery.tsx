"use client";
import GalleryImageContainer from "./ImageContainer/GalleryImageContainer";
import galleryData, { GalleryImage } from "../public/data/gallery-data";
import { useState, useEffect } from "react";
import { Modal, ModalContent, ModalBody } from "@heroui/react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const currentIndex = selectedImage
    ? galleryData.findIndex((img) => img.id === selectedImage.id)
    : -1;
  const prevImage = currentIndex > 0 ? galleryData[currentIndex - 1] : null;
  const nextImage =
    currentIndex < galleryData.length - 1
      ? galleryData[currentIndex + 1]
      : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prevImage) setSelectedImage(prevImage);
      if (e.key === "ArrowRight" && nextImage) setSelectedImage(nextImage);
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevImage, nextImage]);

  return (
    <>
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {galleryData.map((image) => (
          <GalleryImageContainer
            key={image.id}
            image={image}
            onImageClick={setSelectedImage}
          />
        ))}
      </section>
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        size="2xl"
        backdrop="blur"
        hideCloseButton
        placement="center"
      >
        <ModalContent>
          <ModalBody className="relative flex items-center justify-center p-0">
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt="Modal image"
                height={selectedImage.height}
                width={selectedImage.width}
                className="max-h-[85vh] w-auto max-w-full object-contain mx-auto"
              />
            )}
            {prevImage && (
              <button
                onClick={() => setSelectedImage(prevImage)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-2"
              >
                <IoChevronBack size={28} />
              </button>
            )}
            {nextImage && (
              <button
                onClick={() => setSelectedImage(nextImage)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-2"
              >
                <IoChevronForward size={28} />
              </button>
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white/70 hover:text-white bg-black/30 rounded-full p-2 z-10"
            >
              <IoClose size={24} />
            </button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
