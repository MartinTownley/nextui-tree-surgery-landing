"use client";
import { NavbarContent, Navbar as NextUINavbar } from "@heroui/navbar";
import { useState } from "react";
// import { ThemeSwitch } from "@/components/theme-switch";
import NavbarLogo from "@/components/Navbar/NavbarLogo";
import NavbarLinks from "@/components/Navbar/NavbarLinks";
import NavbarPhoneNo from "./NavbarPhoneNo";
import NavbarMobileButtons from "./NavbarMobileButtons";
import NavbarMenuItems from "./NavbarMenuItems";
import customLogoShort from "../../public/custom-logo-short.svg";
import customLogoLongCropped from "../../public/custom-logo-long-cropped.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NextUINavbar
      maxWidth="2xl"
      position="sticky"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="flex bg-main-green bg-[url('/nnnoise6.svg')] bg-cover"
      classNames={{
        item: [
          "flex",
          "relative",
          "items-end",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-[-10px]",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[4px]",
          // "data-[active=true]:after:rounded[2px]",
          "data-[active=true]:after:bg-brighter-orange",
        ],
      }}
    >
      <NavbarContent className="">
        <NavbarLogo
          shortLogo={customLogoShort}
          longLogo={customLogoLongCropped}
        />
      </NavbarContent>

      <div className="hidden md:flex justify-end">
        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarLinks />

          <div className="border-l border-gray-700  h-8 self-center "></div>
          {/* Divider */}
          <NavbarPhoneNo />
        </NavbarContent>
      </div>

      <NavbarMobileButtons isMenuOpen={isMenuOpen} />

      <NavbarMenuItems setIsMenuOpen={setIsMenuOpen} />
    </NextUINavbar>
  );
};
