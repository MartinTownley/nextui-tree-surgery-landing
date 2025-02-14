"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import noiseTexture from "@/public/noise1.svg";

const ServicesSection = () => {
  const { scrollYProgress } = useScroll({});
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <motion.div
      className="relative z-10 px-10 py-10 bg-stone-800"
      style={{
        y: backgroundY,
        backgroundImage: `url(${noiseTexture.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative">
        {/* Title */}
        <div className="max-w-lg py-0 justify-center text-center mx-auto pb-10">
          <h1 className="text-white text-3xl font-bold">Our Services</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
