"use client";
import React from "react";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroTextAndButton() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="py-8 md:py-10 px-10 relative w-full z-10"
    >
      {/* Hero Text */}
      <div className="inline-block max-w-lg text-left">
        <h1 className={title()}>Your Friendly Neighbourhood Tree Surgery</h1>
        <br />
        <h2
          className={subtitle({
            class: "mt-2 text-gray-100 backdrop-blur rounded-xl",
          })}
        >
          Skilled and experienced tree surgeons, carrying out quality tree work
          throughout East London and beyond.
        </h2>
      </div>
      {/* Hero Button */}
      <div className="flex gap-3 pt-6">
        <Button
          className="bg-secondary-orange font-bold text-base border"
          as={Link}
          // color="custom-orange"
          radius="sm"
          variant="shadow"
          href="/#contact"
          size="md"
        >
          Get in Touch
        </Button>
      </div>
    </motion.div>
  );
}

export default HeroTextAndButton;
