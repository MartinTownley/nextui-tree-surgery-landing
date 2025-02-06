import { Link } from "@heroui/link";
import CustomLogo from "@/components/CustomLogo";
import customLogoShort from "../../public/custom-logo-short.svg";
import customLogoLongCropped from "../../public/custom-logo-long-cropped.svg";

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <CustomLogo
          src={customLogoShort}
          alt={"Custom Logo Short"}
          width={200}
          height={64}
          className="lg-custom:hidden "
        />
        <CustomLogo
          src={customLogoLongCropped}
          alt={"Custom Logo Long"}
          width={300}
          height={80}
          className="hidden lg-custom:block"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
