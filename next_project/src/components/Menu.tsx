"use client"

import Link from "next/link";
import { PAGES } from "../config/pages.config";
import { usePathname } from "next/navigation";

export function Menu() {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <nav className="flex gap-6">
      <Link className={pathname === PAGES.HOME ? "text-white": "text-white/80"} href={PAGES.HOME}>Home</Link>
      <Link className={pathname === PAGES.EXPLORE ? "text-white": "text-white/80"} href={PAGES.EXPLORE}>Explore</Link>
      <Link className={pathname === PAGES.PROFILE_FAKE ? "text-white": "text-white/80"} href={PAGES.PROFILE_FAKE}>Profile</Link>
    </nav>
  );
}
