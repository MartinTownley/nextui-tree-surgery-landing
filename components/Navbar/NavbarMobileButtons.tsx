import { NavbarContent, NavbarItem, NavbarMenuToggle } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
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
          // color="success"
          isExternal
          as={Link}
          className={`text-sm font-normal text-default-600 flex flex-col bg-secondary-orange ${bungee_shade.className}`}
          href="tel:+447956864566"
          startContent={<PhoneIcon className="text-danger" />}
          variant="flat"
        ></Button>
      </NavbarItem>

      {/* --Toggle */}
      <NavbarItem className="flex items-center justify-end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="p-4"
        />
      </NavbarItem>
    </NavbarContent>
  );
};

export default NavbarMobileButtons;
