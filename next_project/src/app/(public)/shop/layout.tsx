"use client";

import type { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const DynamicShopMenu = dynamic(
  () => import("./ShopMenu").then((mod) => mod.ShopMenu),
  { ssr: false, loading: () => <div>Loader...</div> }
);

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <DynamicShopMenu />
      {children}
    </div>
  );
}
