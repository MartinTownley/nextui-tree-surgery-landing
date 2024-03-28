import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    // Container
    <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-8 lg:mt-14">
      {/* Content */}
      <div className="flex-1 flex-col items-center lg:items-start">
        <h1 className={`${title()} text-center`}>About Us</h1>
        <div className="text-lg mt-4 text-center lg:text-left mb-6">
          <p className="my-4">
            Sparrowhawk Trees is a family-run tree surgery business based in
            South-East London. We are passionate about trees and the environment
            and have been providing a professional and friendly service to our
            customers for over 20 years.
          </p>
          <p className="my-4">
            We are fully insured and qualified to undertake all aspects of tree
            surgery, from pruning and shaping to felling and stump removal. We
            pride ourselves on our high standards of workmanship and customer
            service, and we always go the extra mile to ensure our customers are
            happy with the work we do.
          </p>
          <p className="my-4">
            Our team of experienced arborists are trained to the highest
            standards and use the latest equipment and techniques to carry out
            their work safely and efficiently. We are committed to protecting
            the environment and always aim to minimise our impact on the
            surrounding area.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
        <Image
          src="/about-imgs/profile-img.jpeg"
          alt="Profile Picture"
          width={400}
          height={500}
          className="rounded-medium object-cover"
          // placeholder="blur"
          // style={{ objectFit: "" }}
        />
      </div>
    </div>
  );
}
