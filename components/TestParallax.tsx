"use client";
import Image from "next/image";
import heroFlip from "../public/hero-flip.jpeg";

import { Parallax } from "react-scroll-parallax";

export default function TestParallax() {
  return (
    <Parallax speed={-10}>
      <div className="relative w-full">
        <Image
          src={heroFlip}
          alt="garden"
          style={{ objectFit: "cover" }}
          fill
          placeholder="blur"
        />
      </div>
    </Parallax>
  );
}
