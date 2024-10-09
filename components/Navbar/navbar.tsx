"use client";
import { NavbarContent, Navbar as NextUINavbar } from "@nextui-org/navbar";
import { useState } from "react";
// import { ThemeSwitch } from "@/components/theme-switch";
import { usePathname } from "next/navigation";
import NavbarLogo from "@/components/Navbar/NavbarLogo";
import NavbarLinks from "@/components/Navbar/NavbarLinks";
import NavbarPhoneNo from "./NavbarPhoneNo";
import NavbarMobileButtons from "./NavbarMobileButtons";
import NavbarMenuItems from "./NavbarMenuItems";
//import MobileMenu from "@/components/MobileMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="flex border"
      classNames={{
        item: [
          "flex",
          "relative",
          "items-end",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[4px]",
          // "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-secondary",
        ],
      }}
    >
      <NavbarContent className="">
        <NavbarLogo />
      </NavbarContent>

      <div className="flex justify-end">
        <NavbarContent className="hidden md:flex " justify="end">
          <NavbarLinks />
          {/* <NavbarContent
          className="hidden md:inline-flex border border-green-500 "
          justify="end"
          > */}
          <div className="border-l border-gray-700  h-8 self-center "></div>
          {/* Divider */}
          <NavbarPhoneNo />
        </NavbarContent>
        {/* </NavbarContent> */}
      </div>

      <NavbarMobileButtons isMenuOpen={isMenuOpen} />

      <NavbarMenuItems setIsMenuOpen={setIsMenuOpen} />
    </NextUINavbar>
  );
};
