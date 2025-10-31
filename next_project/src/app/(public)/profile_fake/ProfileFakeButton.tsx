"use client"

import { PAGES } from "@/src/config/pages.config";
import { useRouter } from "next/navigation";

export function ProfileFakeButton() {
    const router = useRouter();
  return (
    <button onClick={() => router.push(PAGES.HOME)}>GO TO HOME</button>
  )
}
