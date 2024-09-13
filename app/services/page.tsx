import { title, subtitle } from "@/components/primitives";
import ServicesAccordion from "@/components/ServicesAccordion";
import { servicesPageData } from "@/public/data/services-page-data";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main>
      <header className="mb-10 text-center lg:text-left">
        <h1 className={title()}>Services</h1>
      </header>
      <section className="block lg:hidden">
        <ServicesAccordion />
      </section>

      <section className="hidden lg:block">
        {servicesPageData.map((service, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col lg:flex-row lg:gap-8 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:w-2/3">
              <h1 className={title({ size: "sm" })}>{service.title}</h1>
              <p className="mt-4 text-lg">{service.description}</p>
            </div>
            <div className="lg:w-1/3">
              <Image
                src={service.image}
                alt={`${service.title} service`}
                width={400}
                height={500}
                className="rounded-medium w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
