import type { Metadata } from "next";
import Explore from "./Explore";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Explore",
};

export default function ExplorePage() {
  //For production need Suspense fore correct useSearchParams
  return (
    <Suspense>
      <Explore />
    </Suspense>
  );
}
