import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen 2xl:min-h-0 bg-pale-pink overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-16 pt-40 pb-16 flex gap-x-16">
        <div className="flex-1">
          <div className="w-fit py-1.5 px-3 border border-heliotrope-gray rounded-xl">
            <div className="flex items-center gap-x-5">
              <p className="font-semibold text-xl">
                Explore Modern Living Spaces
              </p>
              <Link href="/" className="font-semibold text-crayola-blue">
                Discover More
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="font-bold text-6xl leading-[1.125]">
              Welcome to Briella Homes, Where Elegance Meets Comfort.
            </h1>
            <h2 className="mt-3 text-2xl leading-9">
              Find your dream home in a serene and stylish environment.
            </h2>
          </div>
          <div className="mt-8 flex items-center gap-x-3">
            <Link
              href="/"
              className="py-2 px-4 font-semibold border border-heliotrope-gray rounded-xl"
            >
              Learn More
            </Link>
            <Link
              href="/"
              className="py-2 px-4 font-semibold bg-crayola-blue border border-crayola-blue text-white rounded-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/hero.png"
            className="ml-auto rounded-xl border border-heliotrope-gray"
          />
        </div>
      </div>
    </div>
  );
}
