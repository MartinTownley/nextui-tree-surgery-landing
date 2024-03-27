import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <Image
        src="/about-imgs/profile-img.jpeg"
        alt="Profile Picture"
        width={500}
        height={500}
        className="w-full h-auto mb-4"
      />
      <h1 className={title()}>About Sparrowhawk Trees</h1>
      <p className="text-lg">
        Sparrowhawk Trees is a family-run tree surgery business based in
        South-East London. We are passionate about trees and the environment and
        have been providing a professional and friendly service to our customers
        for over 20 years.
      </p>
      <p className="text-lg">
        We are fully insured and qualified to undertake all aspects of tree
        surgery, from pruning and shaping to felling and stump removal. We pride
        ourselves on our high standards of workmanship and customer service, and
        we always go the extra mile to ensure our customers are happy with the
        work we do.
      </p>
      <p className="text-lg">
        Our team of experienced arborists are trained to the highest standards
        and use the latest equipment and techniques to carry out their work
        safely and efficiently. We are committed to protecting the environment
        and always aim to minimise our impact on the surrounding area.
      </p>
    </div>
  );
}
