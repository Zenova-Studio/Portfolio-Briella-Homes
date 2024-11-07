import Link from "next/link";

export default function CTA() {
  return (
    <div id="gallery" className="flex items-center gap-x-16 p-16 max-w-screen-2xl mx-auto">
      <div className="flex-1">
        <img
          src="/cta.png"
          className="mr-auto border border-philippine-silver shadow-lg"
        />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-3xl leading-10">
          Discover Your Perfect Home with Briella Homes!
        </h2>
        <p className="mt-3 text-lg">
          Explore our exquisite collection of modern properties designed to
          elevate your living experience. Immerse yourself in elegance and
          simplicity, and let us help you find the home of your dreams.
        </p>
        <div className="mt-12 flex items-center gap-x-4">
          <Link
            href="/"
            className="py-2.5 px-4 font-semibold text-lg border border-philippine-silver rounded-xl"
          >
            Explore Our Listings
          </Link>
          <Link
            href="/"
            className="py-2.5 px-4 bg-crayola-blue border border-crayola-blue font-semibold text-lg text-white rounded-xl"
          >
            Start Your Journey Today
          </Link>
        </div>
        <div className="mt-12 flex items-center">
          <div className="relative w-32 flex items-center">
            <img src="/avatar1.png" className="absolute w-12 h-12" />
            <img src="/avatar2.png" className="absolute left-[26%] w-12 h-12" />
            <img src="/avatar3.png" className="absolute left-[52%] w-12 h-12" />
          </div>
          <div className="flex-1">
            <p className="text-smoky-black/70 text-lg">
              Join our community of satisfied homeowners and investors who trust
              Briella Homes for their real estate needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
