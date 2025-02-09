import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { NavbarItem } from "@heroui/navbar";
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
            className="flex h-full items-end"
          >
            <Link
              href={link.href}
              className={`flex h-full items-end px-2 py-2 ${
                isActive ? "font-extrabold text-brighter-orange" : "text-white"
              } text-lg md:text-medium lg:text-lg`}
            >
              {link.label}
            </Link>
          </NavbarItem>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
