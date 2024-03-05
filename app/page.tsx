import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ServiceSection } from "@/components/service-section";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative">
      <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
        {/* <Image
          fill={true}
          alt="Garden"
          className="object-cover"
          src="/hero-background.webp"
        /> */}
        <div className="inline-block max-w-lg text-left justify-center">
          {/* <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "green" })}>beautiful&nbsp;</h1> */}
          <h1 className={title()}>Your Friendly Neighbourhood Tree Surgery</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            At Sparrowhawk trees, we believe in more than tree surgery – we're
            your partners in garden management, cultivating spaces where nature
            and beauty coexist.
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
        <ServiceSection></ServiceSection>
      </section>
    </section>
  );
}
