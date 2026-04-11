import { title, subtitle } from "@/components/primitives";
import ServiceSection from "@/components/Services/ServiceSection";
import NewContactForm from "@/components/NewContactForm";
import { Toaster } from "sonner";
import Image from "next/image";
import heroFlip from "../public/hero-flip.jpeg";
import HeroImageParallax from "@/components/HeroImageParallax";
import HeroTextAndButton from "@/components/HeroTextAndButton";
import HeroUIReviewCard from "@/components/Reviews/HeroUIReviewCard";
import ReviewsSection from "@/components/Reviews/ReviewsSection";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <Toaster richColors position="top-center" expand={true} />

      {/* All Content Wrapper */}
      <div className="relative z-10 tilt">
        {/* Hero Wrapper */}
        <div className="relative grid md:grid-cols-2 h-[95vh] items-center overflow-hidden">
          {/* Hero Image */}
          <HeroImageParallax heroImage={heroFlip} />

          <HeroTextAndButton />
          {/* <HeroReviewCard /> */}
          <div className="self-end pb-10">
            <HeroUIReviewCard />
          </div>
        </div>

        {/* Services Section */}
        {/* Container */}
        <div className="relative z-10 services-section px-10 py-10 bg-stone-800 bg-opacity-100 bg-[url('/noise1.svg')] bg-cover bg-center bg-fixed">
          <div className="relative">
            {/* Title */}
            <div className="md:hidden text-center mb-6">
              <h2 className="text-white text-2xl font-bold">Our Services</h2>
            </div>

            <div>
              <ServiceSection />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewsSection />

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
          className="relative z-10 contact-section bg-stone-800 bg-opacity-100 bg-[url('/noise1.svg')] bg-cover bg-center bg-fixed"
        >
          <div className="form-container pt-10 pb-10 ">
            <NewContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
