import servicesData from "@/public/data/services-data";
import { ServicesData } from "@/public/data/services-data";
import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import {
  fetchServicesWithImages,
  Service,
} from "@/app/lib/fetchServicesWithImages";
import EmblaCarousel from "./EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const ServiceSection = async () => {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const servicesWithImages = await fetchServicesWithImages();

  // return <ServiceSwiper services={servicesWithImages} />;
  return (
    // <div>
    //   <h1>testing </h1>
    //   {servicesWithImages.map((service, index) => (
    //     <div key={index}>
    //       <h1>{service.title}</h1>
    //       <p>{service.description}</p>
    //       <img src={service.imageUrl} alt={service.title} />
    //     </div>
    //   ))}
    // </div>
    <EmblaCarousel
      services={servicesWithImages}
      options={OPTIONS}
    ></EmblaCarousel>
  );
};

export default ServiceSection;
