import { PAGES } from "@/src/config/pages.config";
import type { ITweet } from "@/src/shared/types/tweet.interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  tweet: ITweet;
}

export function Tweet({ tweet }: Props) {
  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-white border rounded-full"><Image src="/x-logo.svg" alt="x-logo" width={24} height={24} /></span>
        <Link href={PAGES.PROFILE(tweet.author)} className="font-semibold">@{tweet.author}</Link>
      </div>
      <p className="text-white/90">{tweet.text}</p>
    </div>
  );
}
