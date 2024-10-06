import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { bungee } from "@/config/fonts";

const NavbarPhoneNo = () => {
  return (
    <NavbarContent className="hidden md:inline" justify="end">
      <NavbarItem className="flex h-full items-center justify-center">
        <span
          className={`flex flex-col items-center large-font ${bungee.className}`}
        >
          <span className="block lg:hidden">
            07956-
            <br />
            864566
          </span>
          <span className="hidden lg:block mb-2 py-2">07956 864566</span>
        </span>
      </NavbarItem>
    </NavbarContent>
  );
};

export default NavbarPhoneNo;
