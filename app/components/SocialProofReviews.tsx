import reviews from "../data/reviews.json";

export default function SocialProofReviews() {
  const center = Math.floor(reviews.length / 2);

  return (
    <div className="p-16 max-w-screen-2xl mx-auto">
      <h2 className="font-bold text-3xl text-center">
        What Our Happy Clients Say About Briella Homes
      </h2>
      <div className="mt-20">
        <div className="relative py-2.5 flex items-center justify-between">
          {reviews.map((r, idx) => (
            <img
              key={idx}
              src={r.img_src}
              className={`${
                center === idx
                  ? "w-28 h-28"
                  : center + 1 === idx || center - 1 === idx
                  ? "w-20 h-20"
                  : "w-16 h-16"
              }`}
            />
          ))}
          <div className="absolute h-full flex">
            <div className="bg-white w-1/3" />
            <div className="w-32 bg-gradient-to-r from-white to-white/0" />
          </div>
          <div className="absolute right-0 h-full flex">
            <div className="w-32 bg-gradient-to-l from-white to-white/0" />
            <div className="bg-white w-1/3" />
          </div>
        </div>
        <div className="mt-6">
          <p className="font-medium text-2xl text-center">
            Emily Johnson, Homebuyer
          </p>
          <p className="font-medium text-2xl text-center">Extraordinaire</p>
          <p className="mt-3 font-medium text-xl text-smoky-black/70 text-center">
            Thrilled with my new home!
          </p>
        </div>
      </div>
    </div>
  );
}
