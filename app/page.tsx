import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { ServiceSection } from "@/components/ServiceSection";
import Image from "next/image";
import NewContactForm from "@/components/NewContactForm";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <section className="relative">
      <Toaster richColors position="top-center" />
      <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-left">
          <h1 className={title()}>Your Friendly Neighbourhood Tree Surgery</h1>
          <br />
          <h2 className={subtitle({ class: "mt-2" })}>
            At Sparrowhawk trees, we believe in more than tree surgery –
            we&apos;re your partners in garden management, cultivating spaces
            where nature and beauty coexist.
          </h2>
        </div>
        <div className="flex gap-3">
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
      </section>
      <section>
        <ServiceSection />
      </section>
      <section id="contact" className="mt-10">
        <NewContactForm />
      </section>
    </section>
  );
}
