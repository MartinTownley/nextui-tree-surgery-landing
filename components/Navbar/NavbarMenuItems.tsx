import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const NavbarMenuItems = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (isOpen: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
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
                isActive ? "bg-secondary-orange text-white" : "",
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
  );
};

export default NavbarMenuItems;
