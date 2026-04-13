import { title } from "@/components/primitives";
import ServicesAccordion from "@/components/Services/ServicesAccordion";
import servicesData from "@/public/data/services-data";
import Image from "next/image";
import FadeInRow from "@/components/FadeInRow";
import HeroTextAnimated from "@/components/HeroTextAnimated";

export default async function ServicesPage() {
  return (
    <main className="py-10">
      <HeroTextAnimated scrollTriggered>
        <header className="mb-10 text-center lg:text-left">
          <h1 className={title()}>Services</h1>
        </header>
      </HeroTextAnimated>
      <section className="block md:hidden">
        <ServicesAccordion />
      </section>

      <section className="hidden md:block">
        {servicesData.map((service, index) => (
          <FadeInRow key={index} index={index}>
          <div
            id={service.id.toString()}
            className={`mb-16 flex flex-col md:flex-row md:gap-8 scroll-mt-20 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-2/3">
              <h1 className={title({ size: "sm" })}>{service.title}</h1>
              <p className="mt-4 text-lg">{service.description}</p>
            </div>
            <div className="md:w-1/3 overflow-hidden rounded-medium">
              <Image
                src={service.imageUrl}
                alt={`${service.title} service`}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
          </FadeInRow>
        ))}
      </section>
    </main>
  );
}
