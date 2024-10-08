import { NavbarContent } from "@nextui-org/navbar";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
  const pathname = usePathname();
  return (
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
  );
};

export default NavbarLinks;
