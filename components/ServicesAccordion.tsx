"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function ServicesAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl sit amet nisi scelerisque interdum vel at ex. Nullam eget orci euismod, tincidunt turpis vitae, tincidunt turpis.";

  return (
    <div>
      <h2>Services Accordion</h2>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
