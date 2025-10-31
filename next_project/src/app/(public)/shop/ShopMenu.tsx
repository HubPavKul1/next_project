"use client"

import { MenuItem } from "@/src/components/MenuItem";
import { PAGES } from "@/src/config/pages.config";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

export function ShopMenu() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4 mb-5">
      <MenuItem
        menuItem={{ href: PAGES.SHOP, name: "SSR" }}
        isActive={!!match(PAGES.SHOP)(pathname)}
      />
      <MenuItem
        menuItem={{ href: PAGES.SSG, name: "SSG" }}
        isActive={!!match(PAGES.SSG)(pathname)}
      />
      <MenuItem
        menuItem={{ href: PAGES.ISR, name: "ISR" }}
        isActive={!!match(PAGES.ISR)(pathname)}
      />
    </nav>
  );
}
