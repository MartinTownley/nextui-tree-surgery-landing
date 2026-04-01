"use client";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { reviews } from "@/data/reviews";

const stars = "★★★★★";

const featured = [reviews[35], reviews[31], reviews[33]]; // Saima Hussain, Medina Mailer, Jack Rebaldi

export default function HeroUIReviewCard() {
  return (
    <div className="hidden md:flex flex-col justify-center gap-3 px-8 z-10 max-w-md ml-auto">
      {featured.map((review) => (
        <Card
          key={review.name}
          className="w-full"
          isBlurred
          isPressable
          isHoverable
          as="a"
          href="https://www.google.com/maps/place/Sparrowhawk+Trees/@51.553577,-0.0714451,17z/data=!4m8!3m7!1s0x48761dd9e9a46961:0x704bb4ace1028ed4!8m2!3d51.5535737!4d-0.0688702!9m1!1b1!16s%2Fg%2F11y1vkb5fz?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
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
      ))}
    </div>
  );
}
