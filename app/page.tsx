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
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="hero-section relative flex flex-col items-start justify-center h-[100vh] border border-red-500">
          {/* Hero Content Wrapper */}
          <div className="py-8 md:py-10 px-10 relative w-full border border-blue-500">
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
                href="/#contact"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        {/* Container */}
        <div className="relative services-section px-10 mt-0 pt-10 bg-neutral-400 bg-opacity-90">
          {/* Title */}
          {/* <div className="relative z-10 max-w-lg py-6 justify-center text-center mx-auto">
            <h1 className={title()}>Our Services</h1>
          </div> */}

          <div className="relative -bottom-10 ">
            <ServiceSection />
          </div>
        </div>

        {/* Contact Section */}
        <div
          id="contact"
          className="contact-section mt-20 bg-black bg-opacity-50"
        >
          <NewContactForm />
        </div>
      </div>
    </section>
  );
}
