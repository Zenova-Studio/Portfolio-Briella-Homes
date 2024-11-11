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
        <iframe
          src="https://www.youtube.com/embed/xUBoFDeEYTc?si=xU5iZk6XTXXyNKoV"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video"
        />
      </div>
    </div>
  );
}
