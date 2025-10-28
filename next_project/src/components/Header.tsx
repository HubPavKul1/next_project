import Link from "next/link";
import { IoLogoXing } from "react-icons/io";

export function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black">
      <Link href="/" className="flex items-center gap-3">
        {/* <Image alt="x-logo" src="" width={28} height={28}/> */}
          <IoLogoXing />
        {/* </Image> */}
      </Link>
      <nav className="flex gap-4 text-sm text-white/80">
        <Link href="/">Home</Link>
        <Link href="/">Explore</Link>
        <Link href="/">Profile</Link>
      </nav>
    </header>
  );
}
