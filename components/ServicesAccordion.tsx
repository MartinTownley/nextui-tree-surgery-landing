"use client";
import { servicesPageData } from "@/public/data/services-page-data";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function ServicesAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl sit amet nisi scelerisque interdum vel at ex. Nullam eget orci euismod, tincidunt turpis vitae, tincidunt turpis.";

  return (
    <div>
      <Accordion variant="splitted">
        {servicesPageData.map((service, index) => (
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
