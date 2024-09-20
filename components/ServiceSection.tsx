"use client";
import { useRef, useEffect } from "react";
//import { register } from "swiper/element/bundle";
import ServiceCard from "@/components/ServiceCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import servicesData from "@/public/data/services-data";
import {
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

export const ServiceSection = () => {
  const swiperElRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
      ref={swiperElRef}
      slides-per-view={1}
      navigation={true}
      // pagination={{ clickable: true }}
      keyboard={true}
      mousewheel={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 40,
        // },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
      }}
    >
      {servicesData.map((cardData, index) => (
        <SwiperSlide key={index}>
          <ServiceCard {...cardData} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
