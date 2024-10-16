import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import ServiceSection from "@/components/Services/ServiceSection";
import NewContactForm from "@/components/NewContactForm";
import { Toaster } from "sonner";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative">
      <Toaster richColors position="top-center" />
      <div className="hero-section relative flex flex-col items-start justify-center gap-4 py-8 md:py-10 mb-10 px-6">
        <div
          style={{
            position: "relative",
            height: "60vh",
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
            <div className="flex gap-3 relative z-10">
              <Link
                isExternal
                href={siteConfig.links.docs}
                className={buttonStyles({
                  color: "secondary",
                  variant: "shadow",
                })}
              >
                View Services
              </Link>
            </div>
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
