"use client"

import { PAGES } from "@/src/config/pages.config";
import { useRouter } from "next/navigation";

export function ProfileFake() {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ProfileFake</h1>
      <button onClick={() => router.push(PAGES.HOME)}>GO TO HOME</button>
    </div>
  );
}
