import HeartIcon from "./icons/HeartIcon";
import LightningIcon from "./icons/LightningIcon";
import LockIcon from "./icons/LockIcon";
import MoonIcon from "./icons/MoonIcon";
import SparkleIcon from "./icons/SparkleIcon";
import SunIcon from "./icons/SunIcon";

export default function Features() {
  const features = [
    {
      icon: <LightningIcon />,
      title: "Timeless Design",
      description: "Embrace a lifestyle",
    },
    {
      icon: <SparkleIcon />,
      title: "Unmatched Comfort",
      description: "Experience unparalleled",
    },
    {
      icon: <LockIcon />,
      title: "Sustainability Focus",
      description:
        "Our properties prioritize eco-friendly materials and energy-efficient technologies to reduce your carbon footprint",
    },
    {
      icon: <HeartIcon />,
      title: "Prime Locations",
      description:
        "Locate your dream home in desirable neighborhoods that offer convenience, community, and lifestyle choices",
    },
    {
      icon: <MoonIcon />,
      title: "Exceptional Value",
      description:
        "We provide modern homes at competitive prices, ensuring you receive the best value for your investment",
    },
    {
      icon: <SunIcon />,
      title: "Trustworthy Service",
      description:
        "Our dedicated team is committed to guiding you through every step of the home-buying process with integrity",
    },
  ];

  return (
    <div className="p-16 max-w-screen-2xl mx-auto">
      <div className="flex justify-center gap-x-16">
        <div className="flex-1">
          <div className="aspect-[479/392] flex flex-col items-center justify-center">
            <p className="font-bold text-xl text-dark-liver text-center">
              Elegant Living Awaits
            </p>
            <h2 className="font-bold text-3xl text-center">
              Discover the Essence of Modern Homes
            </h2>
          </div>
          <div className="mt-5">
            <img src="/feature2.png" className="w-full shadow-lg" />
          </div>
        </div>
        <div className="flex-[1.25_1.25_0%] flex flex-col">
          <img src="/feature1.png" className="w-full shadow-lg" />
          <img src="/feature3.png" className="w-full shadow-lg mt-auto" />
        </div>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-y-8 gap-x-6">
        {features.map((f, idx) => (
          <Card
            key={idx}
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <div>
      <div className="w-fit mx-auto p-2.5 border border-philippine-silver rounded-xl">
        {props.icon}
      </div>
      <div className="mt-5">
        <p className="font-semibold text-lg text-center">{props.title}</p>
        <p className="mt-2.5 text-center">{props.description}</p>
      </div>
    </div>
  );
}
