"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { usePathname } from "next/navigation";
import path from "path";

interface Breadcrumb {
  label: string;
  href: string;
}

const BreadcrumbComponent: React.FC = () => {
  const pathname = usePathname();
  if (!pathname) return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs: Breadcrumb[] = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const isImageDetailPage =
        pathname.includes("/gallery/") && index === pathSegments.length - 1;
      const label = isImageDetailPage
        ? "Image"
        : segment.charAt(0).toUpperCase() + segment.slice(1);
      return {
        label,
        href,
      };
    }),
  ];

  return (
    <Breadcrumbs>
      {breadcrumbs.map((breadcrumb, index) => (
        <BreadcrumbItem
          key={index}
          href={breadcrumb.href}
          isCurrent={index === breadcrumbs.length - 1}
        >
          {breadcrumb.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbComponent;
