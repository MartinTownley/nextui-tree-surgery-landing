import { title, subtitle } from "@/components/primitives";
import ServiceSection from "@/components/Services/ServiceSection";
import NewContactForm from "@/components/NewContactForm";
import { Toaster } from "sonner";
import Image from "next/image";
import heroFlip from "../public/hero-flip.jpeg";
import HeroImageParallax from "@/components/HeroImageParallax";
import HeroTextAndButton from "@/components/HeroTextAndButton";

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
        {/* Container */}
        <div className="relative z-10 services-section px-10 py-10 bg-stone-800 bg-opacity-100 bg-[url('/noise1.svg')] bg-cover bg-center bg-fixed">
          <div className="relative">
            {/* Title */}
            <div className=" max-w-lg py-0 justify-center text-center mx-auto pb-10">
              {/* <h1 className={title()}>Our Services</h1> */}
            </div>

            <div>
              <ServiceSection />
            </div>
          </div>
        </div>

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
