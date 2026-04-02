"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { reviews } from "@/data/reviews";

const stars = "★★★★★";

export default function HeroUIReviewCard() {
  const [startIndex, setStartIndex] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIndex((startIndex) => (startIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  const pause = () => {
    clearInterval(intervalRef.current!);
  };

  const resume = () => {
    intervalRef.current = setInterval(() => {
      setStartIndex((startIndex) => (startIndex + 1) % reviews.length);
    }, 5000);
  };

  const visible = [
    reviews[startIndex % reviews.length],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <div
      className="hidden md:flex flex-col justify-center gap-3 px-8 z-10 max-w-md ml-auto"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <AnimatePresence initial={false}>
        {visible.map((review) => (
          <motion.div
            key={review.name}
            layout
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.6 }}
          >
            <Card
              className="w-full"
              isBlurred
              isPressable
              isHoverable
              as="a"
              href="https://www.google.com/maps/place/Sparrowhawk+Trees/@51.553577,-0.0714451,17z/data=!4m8!3m7!1s0x48761dd9e9a46961:0x704bb4ace1028ed4!8m2!3d51.5535737!4d-0.0688702!9m1!1b1!16s%2Fg%2F11y1vkb5fz?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${review.name}'s review on Google Maps`}
            >
              <CardHeader className="flex flex-col items-start gap-1 pb-0">
                <div className="text-yellow-400 tracking-wide">{stars}</div>
                <p className="text-default-500 text-sm font-medium">
                  {review.name} · {review.year}
                </p>
              </CardHeader>
              <CardBody className="pt-2">
                <p className="text-sm leading-relaxed ">
                  &ldquo;{review.shortText}&rdquo;
                </p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
