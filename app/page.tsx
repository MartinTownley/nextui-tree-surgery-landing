import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import ServiceSection from "@/components/Services/ServiceSection";
import NewContactForm from "@/components/NewContactForm";
import { Toaster } from "sonner";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="relative">
      <Toaster richColors position="top-center" />
      <div className="hero-section relative flex flex-col items-start justify-center">
        <div
          className="py-8 md:py-10 px-6 "
          style={{
            position: "relative",
            height: "70vh",
            width: "100%",
            clipPath: "inset(0 0 0 0)",
          }}
        >
          <div
            style={{
              position: "fixed",
              height: "100%",
              width: "100%",
              left: "0",
              top: "0",
            }}
          >
            <Image
              src="https://i.imgur.com/AwGWYah.jpg"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0 opacity-30"
            />
          </div>
          <div className="relative z-10 inline-block max-w-lg text-left">
            <h1 className={title()}>
              Your Friendly Neighbourhood Tree Surgery
            </h1>
            <br />
            <h2 className={subtitle({ class: "mt-2" })}>
              At Sparrowhawk trees, we believe in more than tree surgery –
              we&apos;re your partners in garden management, cultivating spaces
              where nature and beauty coexist.
            </h2>
          </div>
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

      <div className="services-section mt-20 px-6">
        <ServiceSection />
      </div>
      <div id="contact" className="contact-section mt-10">
        <NewContactForm />
      </div>
    </section>
  );
}
