"use client"

import { usePathname } from "next/navigation";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export function Menu() {
    const pathname = usePathname()
  return (
    <nav className="flex gap-6">
      {/* {MENU.map(item => <MenuItem key={item.href} menuItem={item} isActive={pathname === item.href}/>)} */} 
      {MENU.map(item => <MenuItem key={item.href} menuItem={item} isActive={!!match(item.href)(pathname)}/>)}
    </nav>
  );
}
