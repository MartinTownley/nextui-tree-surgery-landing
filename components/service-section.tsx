"use client";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import ServiceCard from "@/components/service-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

register();

export const ServiceSection = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <Swiper
      ref={swiperElRef}
      slides-per-view={1}
      navigation={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <ServiceCard></ServiceCard>
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCard></ServiceCard>
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCard></ServiceCard>
      </SwiperSlide>
    </Swiper>
  );
};
