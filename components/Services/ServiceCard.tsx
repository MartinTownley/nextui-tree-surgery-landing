import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  preTitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  iconSrc: string;
  additionalInfo1: string;
  additionalInfo2: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const {
    preTitle,
    title,
    description,
    buttonText,
    buttonLink,
    imageUrl,
    iconSrc,
    additionalInfo1,
    additionalInfo2,
  } = props;

  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">
          {preTitle}
        </p> */}
        <h4 className="text-white font-medium bg-black/50 text-4xl">{title}</h4>
        {/* <p className="text-white bg-green-800/80">{description}</p> */}
      </CardHeader>

      <Image
        // removeWrapper
        width={500}
        height={500}
        alt="service-image"
        className="z-0 w-full h-full object-cover brightness-75"
        src={imageUrl}
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <Link href={buttonLink} passHref>
          <Button
            // as={Link}
            radius="sm"
            size="md"
            color="secondary"
            // href={buttonLink}
          >
            {buttonText}
          </Button>
        </Link>
      </div>

      {/* <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"> */}
      {/* <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src={iconSrc}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{additionalInfo1}</p>
            <p className="text-tiny text-white/60">{additionalInfo2}</p>
          </div>
        </div> */}
      {/* </CardFooter> */}
    </Card>
  );
};

export default ServiceCard;
