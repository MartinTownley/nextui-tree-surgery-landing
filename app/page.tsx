import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import ServiceSection from "@/components/Services/ServiceSection";
import NewContactForm from "@/components/NewContactForm";
import { Toaster } from "sonner";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const bgImg = "https://i.imgur.com/AwGWYah.jpg";

export default function Home() {
  return (
    <section className="relative min-h-screen ">
      <Toaster richColors position="top-center" />

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
      <div className=" relative z-10">
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
                At Sparrowhawk trees, we believe in more than tree surgery –
                we&apos;re your partners in garden management, cultivating
                spaces where nature and beauty coexist.
              </h2>
            </div>
            {/* Hero Button */}
            <div className="flex gap-3 relative z-10 pt-6">
              <Button
                as={Link}
                color="secondary"
                radius="sm"
                variant="shadow"
                href="/#contact-divider"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Fading Gradient Transition */}
        {/* <div className="relative bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-neutral-400"></div> */}
        <div
          className="relative bottom-0 left-0 w-full h-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgb(115 115 115)",
          }}
        ></div>

        {/* Services Section */}
        {/* Container */}
        <div className="relative services-section px-10 bg-neutral-500 bg-opacity-90">
          <div className="relative -bottom-20">
            {/* Title */}
            <div className="relative z-10 max-w-lg py-0 justify-center text-center mx-auto pb-10">
              <h1 className={title()}>Our Services</h1>
            </div>

            <div className="relative">
              <ServiceSection />
            </div>
          </div>
        </div>

        {/* Contact Section */}

        <div
          id="contact"
          className="contact-section bg-stone-900 bg-opacity-100"
        >
          <div className="divider pt-32 px-20 flex items-center justify-center">
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
          </div>
          <div className="form-container pt-10 pb-10">
            <NewContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
