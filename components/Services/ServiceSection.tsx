// Services Section
import {
  fetchServicesWithImages,
  Service,
} from "@/app/lib/fetchServicesWithImages";
import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const ServiceSection = async () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const servicesWithImages = await fetchServicesWithImages();

  return (
    <EmblaCarousel
      services={servicesWithImages}
      options={OPTIONS}
    ></EmblaCarousel>
  );
};

export default ServiceSection;
