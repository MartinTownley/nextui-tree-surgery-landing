"use client";
import servicesData from "@/public/data/services-data";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function ServicesAccordion() {
  return (
    <div>
      <Accordion variant="splitted">
        {servicesData.map((service, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={service.title}
          >
            {service.description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
