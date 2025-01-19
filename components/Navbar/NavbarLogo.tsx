import { Link } from "@heroui/link";
import CustomLogo from "@/components/CustomLogo";
import customLogoShort from "../../public/custom-logo-narrow.svg";
import customLogoLongCropped from "../../public/custom-logo-long-cropped.svg";

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <CustomLogo
          src={"/custom-logo-short.svg"}
          alt={"Custom Logo Narrow"}
          width={200}
          height={64}
          className="lg-custom:hidden "
        />
        <CustomLogo
          src={"/custom-logo-long-cropped.svg"}
          alt={"Custom Logo Wide"}
          width={300}
          height={80}
          className="hidden lg-custom:block "
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
