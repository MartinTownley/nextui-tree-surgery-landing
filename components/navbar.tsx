"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
// import { ThemeSwitch } from "@/components/theme-switch";
import CustomLogo from "@/components/CustomLogo";
import { PhoneIcon } from "@/components/icons";
import { bungee_shade } from "@/config/fonts";
import { usePathname } from "next/navigation";
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
      className="flex justify-between items-center"
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
      {/* <NavbarContent className="lg:basis-3/4 sm:basis-4/5" justify="start"> */}
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

      {/* -- Navbar Menu Items (lg screen) */}
      <NavbarContent className="hidden md:flex" justify="start">
        <ul className="hidden md:flex lg:flex gap-4 justify-center h-full items-end">
          {siteConfig.navAndMenuItems.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <NavbarItem
                key={link.href}
                data-active={isActive ? "true" : "false"}
                className="flex h-full items-end py-2"
              >
                <Link isBlock color="foreground" size="lg" href={link.href}>
                  {link.label}
                </Link>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      {/* --Phone Number */}
      <NavbarContent justify="end">
        <NavbarItem className="flex h-full items-end justify-center ">
          <span className="hidden md:inline items-center mb-2 py-2">
            123-456-7890
          </span>
        </NavbarItem>
      </NavbarContent>

      {/* -- Navbar Menu Items - phone and toggle */}
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
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile View Dropdown Menu */}
      <NavbarMenu className="lg:basis">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navAndMenuItems.map((link, index) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <NavbarMenuItem
                key={`${link}-${index}`}
                data-active={isActive ? "true" : "false"}
                className={clsx(
                  isActive ? "bg-secondary text-white" : "",
                  "px-2 py-1 rounded-md"
                )}
              >
                <Link
                  isBlock
                  color="foreground"
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
