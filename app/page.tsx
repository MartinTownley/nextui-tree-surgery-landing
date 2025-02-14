import { title, subtitle } from "@/components/primitives";
import ServiceCarousel from "@/components/Services/ServiceCarousel";
import NewContactForm from "@/components/NewContactForm";
import { Toaster } from "sonner";
import Image from "next/image";
import heroFlip from "../public/hero-flip.jpeg";
import HeroImageParallax from "@/components/HeroImageParallax";
import HeroTextAndButton from "@/components/HeroTextAndButton";
import ServicesSection from "@/components/Services/ServicesSection";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <Toaster richColors position="top-center" expand={true} />

      {/* All Content Wrapper */}
      <div className="relative z-10 tilt">
        {/* Hero Wrapper */}
        <div className="relative flex flex-col items-start h-[95vh] justify-center overflow-hidden">
          {/* Hero Image */}

          <HeroImageParallax heroImage={heroFlip} />

          <HeroTextAndButton />
        </div>

        {/* Services Section */}
        <ServicesSection />

        <ServiceCarousel />

        {/*Icon on border*/}

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src={"/custom-icon.png"}
            alt="Sparrowhawk Trees Icon"
            width={50}
            height={50}
            className="logo"
          />
        </div>

        {/* Contact Section */}

        <div
          id="contact"
          className="relative z-10 contact-section bg-stone-900 bg-opacity-100 bg-[url('/nnnoise7.svg')] bg-cover bg-center bg-fixed"
        >
          <div className="form-container pt-10 pb-10 ">
            <NewContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
