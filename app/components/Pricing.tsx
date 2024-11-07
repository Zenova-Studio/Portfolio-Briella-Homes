"use client";

import { useState } from "react";
import StarIcon from "./icons/StarIcon";
import LightningIconAlt from "./icons/LightningIconAlt";
import SparkleIconAlt from "./icons/SparkleIconAlt";
import Link from "next/link";
import CheckIcon from "./icons/CheckIcon";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const pricings = [
    {
      icon: <StarIcon />,
      title1: "Free Starter Package",
      description: "Personal Use Only, No Commercial",
      button: "Start Your Journey Today",
      blueButton: false,
      features: [
        {
          name: "Access to Basic Listings",
          gray: false,
        },
        {
          name: "Monthly Newsletter Updates",
          gray: false,
        },
        {
          name: "Property Alerts for New Listings",
          gray: false,
        },
        {
          name: "User-Friendly Interface",
          gray: true,
        },
        {
          name: "Mobile-Friendly Design",
          gray: false,
        },
        {
          name: "Support from Our Team",
          gray: false,
        },
        {
          name: "Bookmark Your Favorites",
          gray: true,
        },
        {
          name: "Easy Contact With Agents",
          gray: true,
        },
      ],
    },
    {
      icon: <LightningIconAlt />,
      title1: "$16",
      title2: "Pro Plan: $29/Month",
      description: "Ideal for Teams and Investors",
      button: "Join Us Today",
      blueButton: true,
      features: [
        {
          name: "Exclusive Property Listings",
          gray: false,
        },
        {
          name: "Dedicated Account Manager",
          gray: false,
        },
        {
          name: "Enhanced Search Filters",
          gray: false,
        },
        {
          name: "Advanced Market Insights",
          gray: true,
        },
        {
          name: "Unlimited Property Alerts",
          gray: false,
        },
        {
          name: "Comprehensive Market Reports",
          gray: true,
        },
        {
          name: "Access to Virtual Tours",
          gray: false,
        },
      ],
    },
    {
      icon: <SparkleIconAlt />,
      title1: "Custom Solutions Available",
      description: "Tailored for Corporate Clients",
      button: "Get Started Now",
      blueButton: false,
      features: [
        {
          name: "Team Collaboration Tools",
          gray: false,
        },
        {
          name: "Custom Branding Options",
          gray: false,
        },
        {
          name: "In-Depth Analytical Reports",
          gray: false,
        },
        {
          name: "Dedicated Support Team",
          gray: false,
        },
        {
          name: "Flexible Pricing Plans",
          gray: false,
        },
        {
          name: "Integration with CRM Systems",
          gray: false,
        },
        {
          name: "Secure Data Management",
          gray: false,
        },
        {
          name: "Regular Training Sessions",
          gray: false,
        },
      ],
    },
  ];

  return (
    <div id="pricing" className="p-16 max-w-screen-2xl mx-auto">
      <div>
        <div>
          <h2 className="font-bold text-3xl text-center">
            Affordable Luxury Awaits
          </h2>
          <p className="mt-3 font-medium text-xl text-smoky-black/70 text-center">
            Explore our curated selection of modern homes tailored to your
            lifestyle.
          </p>
        </div>
        <div className="mt-6 w-fit mx-auto flex items-center gap-x-4">
          <button
            type="button"
            onClick={() => setIsYearly((prev) => !prev)}
            className="w-20 h-9 relative bg-platinum rounded-2xl border border-philippine-silver"
          >
            <div
              className={`absolute top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                !isYearly ? "translate-x-[3px]" : "translate-x-[43px]"
              } w-8 h-7 rounded-xl bg-white`}
            />
          </button>
          <p>Save More Annually</p>
        </div>
      </div>
      <div className="mt-16 flex gap-x-6 justify-between">
        {pricings.map((p, idx) => (
          <Card
            key={idx}
            icon={p.icon}
            title1={p.title1}
            title2={p.title2}
            description={p.description}
            button={p.button}
            blueButton={p.blueButton}
            features={p.features}
          />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  icon: JSX.Element;
  title1: string;
  title2?: string;
  description: string;
  button: string;
  blueButton: boolean;
  features: { name: string; gray: boolean }[];
}

function Card(props: CardProps) {
  return (
    <div className="flex-1 py-6 px-5 border border-philippine-silver rounded-xl shadow-lg">
      <div className="pb-3">
        <div className="w-fit p-3 rounded-full border border-philippine-silver">
          {props.icon}
        </div>
        <div className="mt-3">
          <div className="flex gap-x-1 items-center">
            <p className="font-bold text-3xl line-clamp-1">{props.title1}</p>
            <p className="text-smoky-black/70 line-clamp-1">{props.title2}</p>
          </div>
          <p className="mt-3 text-smoky-black/70">{props.description}</p>
        </div>
      </div>
      <hr className="border-philippine-silver" />
      <div className="mt-8">
        <Link
          href="/"
          className={`block w-full p-2 font-semibold text-center border rounded-2xl ${
            props.blueButton
              ? "bg-crayola-blue text-white border-crayola-blue"
              : "border-philippine-silver"
          }`}
        >
          {props.button}
        </Link>
        <div className="mt-8 space-y-5">
          {props.features.map((f, idx) => (
            <div
              key={idx}
              className={`flex gap-x-3 items-center ${
                f.gray ? "opacity-30" : ""
              }`}
            >
              <div className="h-8 w-8 flex items-center justify-center border border-teal-deer rounded-full">
                <CheckIcon />
              </div>
              <div className="flex-1">{f.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
