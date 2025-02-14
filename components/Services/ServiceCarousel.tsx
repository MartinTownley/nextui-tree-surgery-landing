import { fetchServicesWithImages } from "@/app/lib/fetchServicesWithImages";
import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const ServiceCarousel = async () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const servicesWithImages = await fetchServicesWithImages();

  return (
    <EmblaCarousel
      services={servicesWithImages}
      options={OPTIONS}
    ></EmblaCarousel>
  );
};

export default ServiceCarousel;
