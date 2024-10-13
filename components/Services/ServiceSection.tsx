// components/Services/ServiceSection.tsx
import ServiceSwiper from "@/components/Services/ServiceSwiper";
import servicesData from "@/public/data/services-data";
import { ServicesData } from "@/public/data/services-data";
import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import type { ImgurAlbum } from "@/models/imgur-schemas";

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

const ServiceSection = async () => {
  const servicesWithImages = await fetchServicesWithImages();
  console.log("services with images:", servicesWithImages);

  return <ServiceSwiper services={servicesWithImages} />;
};

export default ServiceSection;
