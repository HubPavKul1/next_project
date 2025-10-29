"use client"

import { usePathname } from "next/navigation";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";

export function Menu() {
    const pathname = usePathname()
  return (
    <nav className="flex gap-6">
      {MENU.map(item => <MenuItem key={item.href} menuItem={item} isActive={pathname === item.href}/>)}
    </nav>
  );
}
