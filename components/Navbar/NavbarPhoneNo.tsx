import { NavbarContent, NavbarItem } from "@heroui/navbar";
import { bungee } from "@/config/fonts";

const NavbarPhoneNo = () => {
  return (
    <NavbarContent className="hidden md:inline-block" justify="end">
      <NavbarItem className=" justify-end">
        <span
          className={`flex flex-col items-center large-font ${bungee.className}`}
        >
          <span className="block lg:hidden text-right">
            07956-
            <br />
            864566
          </span>
          <span className="hidden lg:block">07956 864566</span>
        </span>
      </NavbarItem>
    </NavbarContent>
  );
};

export default NavbarPhoneNo;
