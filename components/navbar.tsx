import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import Image from "next/image";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  PhoneIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* <NavbarContent className="lg:basis-3/4 sm:basis-4/5" justify="start"> */}
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          {/* <Logo /> */}
          <Image
            src="/custom-logo-wide.svg"
            alt="Custom Logo Wide"
            width={200}
            height={36}
          />
        </NextLink>
      </NavbarBrand>
      <NavbarContent
        className="lg:basis-auto gap-4 bg-blue-300"
        justify="start"
      >
        <ul className="hidden md:flex lg:flex gap-4 justify-start ml-2">
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

      {/* <NavbarContent className="lg:basis-1/4" justify="end"> */}

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end"> */}
      <NavbarContent className="w-1/4 bg-red-300" justify="end">
        <ThemeSwitch />
        <NavbarItem>
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href="javascript:void(0)"
            startContent={<PhoneIcon className="text-danger" />}
            variant="flat"
          >
            Call Us
          </Button>
        </NavbarItem>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="lg:basis">
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navAndMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
