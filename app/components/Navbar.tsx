import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute w-full max-w-screen-2xl left-1/2 -translate-x-1/2 flex items-center py-3 px-8">
      <div>
        <Image
          src="/logo.svg"
          alt="Briella Homes logo"
          width={34}
          height={34}
        />
      </div>
      <ul className="ml-3 flex-1 flex items-center">
        <li>
          <Link href="/" className="p-3 font-semibold text-smoky-black/70">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#properties"
            className="p-3 font-semibold text-smoky-black/70"
          >
            Properties
          </Link>
        </li>
        <li>
          <Link
            href="/#gallery"
            className="p-3 font-semibold text-smoky-black/70"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/#pricing"
            className="p-3 font-semibold text-smoky-black/70"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/#qna" className="p-3 font-semibold text-smoky-black/70">
            QnA
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className="p-3 font-semibold text-smoky-black/70"
          >
            About
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-x-4">
        <Link
          href="/"
          className="py-2.5 px-4 font-semibold text-smoky-black/70"
        >
          Sign In
        </Link>
        <Link
          href="/"
          className="py-2.5 px-4 font-semibold text-white bg-crayola-blue rounded-xl"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
