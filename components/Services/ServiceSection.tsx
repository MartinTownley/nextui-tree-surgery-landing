import servicesData from "@/public/data/services-data";
import { ServicesData } from "@/public/data/services-data";
import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import {
  fetchServicesWithImages,
  Service,
} from "@/app/lib/fetchServicesWithImages";
import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "start" };

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
