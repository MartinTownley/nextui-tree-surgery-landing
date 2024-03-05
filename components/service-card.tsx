import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const ServiceCard = () => {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Pre-Title</p>
        <h4 className="text-white font-medium bg-black/50 text-xl">Title</h4>
        <p className="text-white bg-green-800/80">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ab
          iure nisi minus modi. Reprehenderit veritatis, corrupti debitis fugit
          asperiores possimus minima id voluptatum. Perspiciatis tenetur at odio
          obcaecati voluptate!
        </p>
        <Button radius="sm" size="sm">
          Learn More
        </Button>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/space-comic.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/pencill-art.jpg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Some Information</p>
            <p className="text-tiny text-white/60">Some other text.</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
