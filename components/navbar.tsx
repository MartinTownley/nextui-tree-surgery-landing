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
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import CustomLogo from "@/components/CustomLogo";
import { PhoneIcon } from "@/components/icons";
import { bungee_shade } from "@/config/fonts";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* <NavbarContent className="lg:basis-3/4 sm:basis-4/5" justify="start"> */}
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
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
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex" justify="center">
        <ul className="hidden md:flex lg:flex gap-4 justify-center ml-2">
          {siteConfig.navAndMenuItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="w-1/4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarItem>
          <Button
            radius="sm"
            color="success"
            isExternal
            as={Link}
            className={`text-sm font-normal text-default-600 md:hidden flex flex-col ${bungee_shade.className}`}
            href="tel:+1234567890"
            // startContent={<PhoneIcon className="text-danger" />}
            variant="flat"
          >
            CALL NOW!
            {/* <div className="mb-0">CALL</div>
            <div className="mt-0">NOW!</div> */}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <span className="hidden md:inline">123-456-7890</span>
        </NavbarItem>
        <NavbarMenuToggle
          className="md:hidden"
          // aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="lg:basis">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navAndMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
