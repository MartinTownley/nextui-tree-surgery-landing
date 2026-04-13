"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/data/reviews";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { usePrevNextButtons } from "../Services/EmblaCarouselArrowButtons";
import clsx from "clsx";
import { roboto_mono } from "@/config/fonts";
import { motion } from "framer-motion";

const stars = "★★★★★";
const sorted = [...reviews].sort((a, b) => b.year - a.year);

export default function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap()),
    );
  }, [emblaApi]);

  return (
    <div
      id="reviews"
      className="relative z-10 bg-stone-900 bg-opacity-100 bg-[url('/nnnoise7.svg')] bg-repeat [background-size:200px_200px] px-6 py-10 md:px-16 md:py-16"
    >
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          What Our Customers Say
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-yellow-400 tracking-wide">★★★★★</span>
          <span className="text-white/70 text-sm md:text-base">5.0</span>
          <span className="text-white/30">|</span>
          <a
            href="https://www.google.com/maps/place/Sparrowhawk+Trees/@51.553577,-0.0714451,17z/data=!4m8!3m7!1s0x48761dd9e9a46961:0x704bb4ace1028ed4!8m2!3d51.5535737!4d-0.0688702!9m1!1b1!16s%2Fg%2F11y1vkb5fz?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors text-white/70 text-sm md:text-base"
          >
            69 reviews on Google
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="embla">
          <div className="embla__viewport reviews-viewport-mask" ref={emblaRef}>
            <div className="embla__container select-none">
              {sorted.map((review, index) => (
                <div className="embla__slide" key={index}>
                  <Card className="w-full border border-white/20">
                    <CardHeader className="flex flex-col items-start gap-1 pb-0">
                      <div className="text-yellow-400 tracking-wide">
                        {stars}
                      </div>
                      <p className="text-default-500 text-sm font-medium">
                        {review.name} · {review.year}
                      </p>
                    </CardHeader>
                    <CardBody className="pt-2 h-48 md:h-64 overflow-y-auto">
                      <p className="text-sm leading-relaxed">{review.text}</p>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center gap-6 mt-4">
            <button
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className="text-white/70 hover:text-white text-2xl font-bold disabled:opacity-30"
            >
              ←
            </button>
            <button
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className="text-white/70 hover:text-white text-2xl font-bold disabled:opacity-30"
            >
              →
            </button>
          </div>
          <div className={clsx(roboto_mono.className)}>
            <p className="md:hidden text-center text-white/50 text-xs mt-3">
              Swipe to explore
            </p>

            <p className="text-center text-white/50 text-xs md:text-sm mt-2">
              {selectedIndex + 1} / {sorted.length}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
