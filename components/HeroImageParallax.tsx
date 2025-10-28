"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface HeroImageParallaxProps {
  heroImage: StaticImageData;
}

export default function HeroImageParallax({
  heroImage,
}: HeroImageParallaxProps) {
  const { scrollYProgress } = useScroll({});
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
      <Image
        src={heroImage}
        alt="garden"
        style={{ objectFit: "cover", objectPosition: "top" }}
        fill
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Dark Overlay */}
      <div className="fixed inset-0 z-1 bg-black opacity-40"></div>
    </motion.div>
  );
}
