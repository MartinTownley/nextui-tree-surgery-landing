import { Link } from "@heroui/link";
import CustomLogo from "@/components/CustomLogo";

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <CustomLogo
          src={"/custom-logo-narrow.svg"}
          alt={"Custom Logo Narrow"}
          width={200}
          height={64}
          className="lg-custom:hidden "
        />
        <CustomLogo
          src={"/custom-logo-wide-cropped.svg"}
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
