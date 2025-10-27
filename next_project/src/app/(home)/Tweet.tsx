import type { ITweet } from "@/src/shared/types/tweet.interface";

interface Props {
  tweet: ITweet;
}

export function Tweet({ tweet }: Props) {
  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-semibold">@{tweet.author}</span>
      </div>
      <p className="text-white/90">{tweet.text}</p>
    </div>
  );
}
