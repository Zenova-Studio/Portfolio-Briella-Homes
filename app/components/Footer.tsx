import Link from "next/link";
import Image from "next/image";
import footerLinks from "../data/footer-links.json";
import footerSocials from "../data/footer-socials.json";

export default function Footer() {
  return (
    <footer className="px-16 pb-10 max-w-screen-2xl mx-auto">
      <hr className="border-philippine-silver" />
      <div className="mt-10 flex">
        {footerLinks.map((f, idx) => (
          <div key={idx} className="flex-1">
            <p className="font-semibold text-dark-liver">{f.title}</p>
            {f.links.map((l, idx) => (
              <Link key={idx} href={l.link} className="block mt-4 font-medium">
                {l.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-7 flex items-center justify-between gap-x-3">
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-2.5">
            <Image
              src="/logo.svg"
              alt="Briella Homes logo"
              width={34}
              height={34}
            />
            <p className="font-bold text-xl">Property</p>
          </div>
          <p>© 2023 Property Indonesia</p>
        </div>
        <div className="flex items-center gap-x-3">
          {footerSocials.map((s, idx) => (
            <Link key={idx} href={s.link}>
              <img src={s.img_src} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
