import React from "react";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

function HeroTextAndButton() {
  return (
    <div className="py-8 md:py-10 px-10 relative w-full z-10">
      {/* Hero Text */}
      <div className="inline-block max-w-lg text-left">
        <h1 className={title()}>Your Friendly Neighbourhood Tree Surgery</h1>
        <br />
        <h2 className={subtitle({ class: "mt-2" })}>
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
    </div>
  );
}

export default HeroTextAndButton;
