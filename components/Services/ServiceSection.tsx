// Services Section
import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import servicesData from "@/public/data/services-data";

const ServiceSection = async () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };

  return (
    <EmblaCarousel services={servicesData} options={OPTIONS}></EmblaCarousel>
  );
};

export default ServiceSection;
