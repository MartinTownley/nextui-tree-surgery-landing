import {
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { bungee_shade } from "@/config/fonts";
import { PhoneIcon } from "@/components/icons";

interface NavbarMobileButtonsProps {
  isMenuOpen: boolean;
}

const NavbarMobileButtons = ({ isMenuOpen }: NavbarMobileButtonsProps) => {
  return (
    <NavbarContent className="w-1/4 md:hidden" justify="end">
      {/* <ThemeSwitch /> */}
      <NavbarItem className="flex items-center justify-end">
        <Button
          radius="sm"
          color="success"
          isExternal
          as={Link}
          className={`text-sm font-normal text-default-600 flex flex-col ${bungee_shade.className}`}
          href="tel:+1234567890"
          startContent={<PhoneIcon className="text-danger" />}
          variant="flat"
        ></Button>
      </NavbarItem>

      {/* --Toggle */}
      <NavbarItem className="flex items-center justify-end">
        <NavbarMenuToggle
          className=""
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarItem>
    </NavbarContent>
  );
};

export default NavbarMobileButtons;
