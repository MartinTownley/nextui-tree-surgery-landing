import { SVGProps } from "react";
import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const swiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 50,
};

const swiper = new Swiper(".swiper", swiperParams);
