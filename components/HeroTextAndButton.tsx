import React from "react";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

function HeroTextAndButton() {
  return (
    <div className="py-8 md:py-10 px-10 relative z-10">
      {/* Hero Text */}
      <div className="inline-block max-w-lg text-left">
        <h1 className={`${title()} text-white`}>
          Your Friendly Neighbourhood Tree Surgeons
        </h1>
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
          radius="sm"
          variant="shadow"
          href="/#contact"
          size="md"
        >
          Get in Touch
        </Button>
        <Button
          className="text-white border-white/50 font-medium text-base backdrop-blur-sm"
          as={Link}
          radius="sm"
          variant="bordered"
          href="/#reviews"
          size="md"
        >
          Our Reviews
        </Button>
      </div>
    </div>
  );
}

export default HeroTextAndButton;
