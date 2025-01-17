import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import ServiceSection from "@/components/Services/ServiceSection";
import NewContactForm from "@/components/NewContactForm";
import { Toaster } from "sonner";
import Image from "next/image";
import { Button } from "@heroui/button";
import FormWithRHF from "@/components/FormWithRHF";

const bgImg = "https://i.imgur.com/AwGWYah.jpg";

export default function Home() {
  return (
    <section className="relative min-h-screen ">
      <Toaster richColors position="top-center" expand={true} />

      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 tilt">
        {/* Hero Section */}
        <div className=" hero-section relative flex flex-col items-start justify-center h-[91vh] ">
          {/* Hero text Wrapper */}
          <div className="py-8 md:py-10 px-10 relative w-full">
            {/* Hero Text */}
            <div className="relative z-10 inline-block max-w-lg text-left">
              <h1 className={title()}>
                Your Friendly Neighbourhood Tree Surgery
              </h1>
              <br />
              <h2 className={subtitle({ class: "mt-2" })}>
                Skilled and experienced tree surgeons, carrying out quality tree
                work throughout East London and beyond.
              </h2>
            </div>
            {/* Hero Button */}
            <div className="flex gap-3 relative z-10 pt-6">
              <Button
                className="bg-secondary-orange  font-bold text-base"
                as={Link}
                // color="custom-orange"
                radius="sm"
                variant="shadow"
                href="/#contact"
                size="md"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        {/* Container */}
        <div className="relative services-section px-10 py-10 bg-neutral-500 bg-opacity-100 bg-[url('/noise1.svg')] bg-cover bg-center bg-fixed">
          <div className="relative">
            {/* Title */}
            <div className="relative z-10 max-w-lg py-0 justify-center text-center mx-auto pb-10">
              <h1 className={title()}>Our Services</h1>
            </div>

            <div className="relative">
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
          className="contact-section bg-stone-900 bg-opacity-100 bg-[url('/nnnoise7.svg')] bg-cover bg-center bg-fixed"
        >
          {/* <div className="divider pt-32 px-20 flex items-center justify-center">
            <hr
              id="contact-divider"
              className="flex-grow h-px bg-gray-200 border-0 dark:bg-gray-700"
            />
            <div className="mx-4">
              <Image
                src={"/custom-icon.png"}
                alt="Sparrowhawk Trees Icon"
                width={50}
                height={50}
                className="logo"
              />
            </div>

            <hr className="flex-grow h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </div> */}

          <div className="form-container pt-10 pb-10 ">
            <NewContactForm />
          </div>

          {/* <div className="flex min-h-screen max-w-4xl mx-auto flex-col items-center justify-between p-24">
            <FormWithRHF />
          </div> */}
        </div>
      </div>
    </section>
  );
}
