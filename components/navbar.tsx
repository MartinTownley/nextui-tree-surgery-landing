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
import CustomLogo from "@/components/CustomLogo";
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
      <NavbarBrand as="li" className="gap-3 max-w-fit bg-green-000">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          {/* <Logo /> */}
          <CustomLogo
            src={"/custom-logo-narrow.svg"}
            alt={"Custom Logo Narrow"}
            width={150}
            height={64}
          />
          {/* <Image
            src="/custom-logo-narrow.svg"
            alt="Custom Logo Narrow"
            width={150}
            height={64}
            // className={`md:hidden lg:hidden h-12 ${
            //   theme === "dark" ? "inverted-svg" : ""
            // }`}
            className={"md:hidden lg:hidden h-12 inverted-svg"}
          />
          <Image
            src="/custom-logo-wide.svg"
            alt="Custom Logo Wide"
            width={150}
            height={64}
            className="hidden md:block lg:w-64  md:h-12"
          /> */}
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex bg-blue-000" justify="start">
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

      {/* <NavbarContent className="lg:basis-1/4" justify="end"> */}

      {/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end"> */}
      <NavbarContent className="w-1/4 bg-red-000" justify="end">
        <ThemeSwitch />
        <NavbarItem>
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href="tel:+1234567890"
            startContent={<PhoneIcon className="text-danger" />}
            variant="flat"
          >
            Call Now
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
