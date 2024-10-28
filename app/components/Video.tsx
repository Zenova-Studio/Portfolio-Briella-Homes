import PlayIcon from "./icons/PlayIcon";

export default function Video() {
  return (
    <div className="p-16 max-w-screen-2xl mx-auto">
      <div>
        <p className="font-bold text-xl text-dark-liver text-center">
          Elegant Living Awaits
        </p>
        <h2 className="mt-3 font-bold text-3xl text-center">
          Discover the Essence of Modern Homes
        </h2>
      </div>
      <div className="mt-16 relative">
        <img src="/video_placeholder.png" className="w-full" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white rounded-xl p-4">
          <PlayIcon />
        </div>
      </div>
    </div>
  );
}
