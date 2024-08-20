import { title } from "@/components/primitives";
import ServicesAccordion from "@/components/ServicesAccordion";

export default function ServicesPage() {
  return (
    <div>
      <h1 className={title()}>Services</h1>
      <ServicesAccordion />
    </div>
  );
}
