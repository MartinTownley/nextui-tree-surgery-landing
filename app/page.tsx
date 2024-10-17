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
    <section className="relative min-h-screen">
      <Toaster richColors position="top-center" />
      {/* Hero Section */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{
          backgroundImage: `url("https://i.imgur.com/AwGWYah.jpg")`,
        }}
      ></div>

      <div className="relative z-10">
        <div className="hero-section relative flex flex-col items-start justify-center">
          {/* Hero Content Wrapper */}
          <div className="py-8 md:py-10 px-6 relative h-[70vh] w-full">
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
            <div className="flex gap-3 relative z-10 py-6">
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
      </div>

      {/* Services Section */}
      <div className="services-section mt-20 px-6">
        <ServiceSection />
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section mt-10">
        <NewContactForm />
      </div>
    </section>
  );
}
