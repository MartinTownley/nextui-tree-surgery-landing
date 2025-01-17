"use client";
import React, { useState } from "react";
import { NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <NavbarMenu className="lg:basis">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navAndMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                // size="lg"
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
    </div>
  );
}
