"use client";
import servicesData from "@/public/data/services-data";
import { Accordion, AccordionItem } from "@heroui/accordion";

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
            <div className="pb-8 ">{service.description}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
