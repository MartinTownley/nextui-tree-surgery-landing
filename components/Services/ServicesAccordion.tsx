"use client";
import servicesData from "@/public/data/services-data";
import { Accordion, AccordionItem } from "@heroui/accordion";
import Image from "next/image";

export default function ServicesAccordion() {
  return (
    <div>
      <Accordion variant="splitted">
        {servicesData.map((service, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            className="bg-stone-800"
            title={<span className="text-lg font-bold">{service.title}</span>}
          >
            <div className="pb-8">
            <div className="overflow-hidden rounded-medium mb-4">
              <Image
                src={service.imageUrl}
                alt={`${service.title} service`}
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            {service.description}
          </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
