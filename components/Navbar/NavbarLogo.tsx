import { NavbarContent, NavbarBrand } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import CustomLogo from "@/components/CustomLogo";

const NavbarLogo = () => {
  return (
    <NavbarContent>
      <NavbarBrand as="li" className="gap-3 max-wn-fit">
        <Link className="flex justify-start items-center gap-1" href="/">
          <CustomLogo
            src={"/custom-logo-narrow.svg"}
            alt={"Custom Logo Narrow"}
            width={150}
            height={64}
            className="md:hidden"
          />
          <CustomLogo
            src={"/custom-logo-wide.svg"}
            alt={"Custom Logo Wide"}
            width={200}
            height={80}
            className="hidden md:block"
          />
        </Link>
      </NavbarBrand>
    </NavbarContent>
  );
};

export default NavbarLogo;
