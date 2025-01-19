"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import heroFlip from "../public/hero-flip.jpeg";

export default function HeroImageParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({});
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
      <Image
        src={heroFlip}
        alt="garden"
        style={{ objectFit: "cover", objectPosition: "top" }}
        fill
        placeholder="blur"
      />
      {/* Dark Overlay */}
      <div className="fixed inset-0 z-1 bg-black opacity-40"></div>
    </motion.div>
  );
}
