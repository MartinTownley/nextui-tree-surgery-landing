import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { bungee } from "@/config/fonts";

const NavbarPhoneNo = () => {
  return (
    <NavbarItem className="flex h-full items-center justify-center">
      <span
        className={`flex flex-col items-center large-font ${bungee.className}`}
      >
        <span className="block lg:hidden">
          07956-
          <br />
          864566
        </span>
        <span className="hidden lg:block">07956 864566</span>
      </span>
    </NavbarItem>
  );
};

export default NavbarPhoneNo;