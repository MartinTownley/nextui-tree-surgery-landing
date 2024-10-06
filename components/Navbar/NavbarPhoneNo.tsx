import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { bungee } from "@/config/fonts";

const NavbarPhoneNo = () => {
  return (
    <NavbarContent className="hidden md:inline" justify="end">
      <NavbarItem className="flex h-full items-end justify-center">
        <span
          className={`items-center mb-2 py-2 large-font ${bungee.className}`}
        >
          07956 864566
        </span>
      </NavbarItem>
    </NavbarContent>
  );
};

export default NavbarPhoneNo;
