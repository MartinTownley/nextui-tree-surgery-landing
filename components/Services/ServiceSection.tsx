// components/Services/ServiceSection.tsx
import servicesData from "@/public/data/services-data";
import { ServicesData } from "@/public/data/services-data";
import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import type { ImgurAlbum } from "@/models/imgur-schemas";
import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";

export interface Service extends ServicesData {
  imageUrl: string;
}

export async function fetchServicesWithImages(): Promise<Service[]> {
  const albumHash = "7QWtBkH";
  const url = `https://api.imgur.com/3/album/${albumHash}/images`;
  const serviceImages: ImgurAlbum | undefined = await fetchImgurAlbum(url);
  if (!serviceImages || serviceImages.data.length === 0) return [];

  return servicesData.map((service, index) => ({
    ...service,
    imageUrl: serviceImages.data[index]?.link || "",
  }));
}

const OPTIONS: EmblaOptionsType = { align: "start" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ServiceSection = async () => {
  const servicesWithImages = await fetchServicesWithImages();
  // console.log("services with images:", servicesWithImages);

  // return <ServiceSwiper services={servicesWithImages} />;
  return (
    <EmblaCarousel
      services={servicesWithImages}
      options={OPTIONS}
    ></EmblaCarousel>
  );
};

export default ServiceSection;
