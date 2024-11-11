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
      title: "Free Starter Package",
      description: "Personal Use Only, No Commercial",
      button: "Start Your Journey Today",
      blueButton: false,
      features: [
        {
          name: "Access to Basic Listings",
          grayOnYearly: false,
        },
        {
          name: "Monthly Newsletter Updates",
          grayOnYearly: false,
        },
        {
          name: "Property Alerts for New Listings",
          grayOnYearly: false,
        },
        {
          name: "User-Friendly Interface",
          grayOnYearly: true,
        },
        {
          name: "Mobile-Friendly Design",
          grayOnYearly: false,
        },
        {
          name: "Support from Our Team",
          grayOnYearly: false,
        },
        {
          name: "Bookmark Your Favorites",
          grayOnYearly: true,
        },
        {
          name: "Easy Contact With Agents",
          grayOnYearly: true,
        },
      ],
    },
    {
      icon: <LightningIconAlt />,
      title: "$24",
      titleOnYearly: "$16",
      description: "Ideal for Teams and Investors",
      button: "Join Us Today",
      blueButton: true,
      features: [
        {
          name: "Exclusive Property Listings",
          grayOnYearly: false,
        },
        {
          name: "Dedicated Account Manager",
          grayOnYearly: false,
        },
        {
          name: "Enhanced Search Filters",
          grayOnYearly: false,
        },
        {
          name: "Advanced Market Insights",
          grayOnYearly: true,
        },
        {
          name: "Unlimited Property Alerts",
          grayOnYearly: false,
        },
        {
          name: "Comprehensive Market Reports",
          grayOnYearly: true,
        },
        {
          name: "Access to Virtual Tours",
          grayOnYearly: false,
        },
      ],
    },
    {
      icon: <SparkleIconAlt />,
      title: "Custom Solutions Available",
      description: "Tailored for Corporate Clients",
      button: "Get Started Now",
      blueButton: false,
      features: [
        {
          name: "Team Collaboration Tools",
          grayOnYearly: false,
        },
        {
          name: "Custom Branding Options",
          grayOnYearly: false,
        },
        {
          name: "In-Depth Analytical Reports",
          grayOnYearly: false,
        },
        {
          name: "Dedicated Support Team",
          grayOnYearly: false,
        },
        {
          name: "Flexible Pricing Plans",
          grayOnYearly: false,
        },
        {
          name: "Integration with CRM Systems",
          grayOnYearly: false,
        },
        {
          name: "Secure Data Management",
          grayOnYearly: false,
        },
        {
          name: "Regular Training Sessions",
          grayOnYearly: false,
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
            title={p.title}
            titleOnYearly={p.titleOnYearly}
            description={p.description}
            button={p.button}
            blueButton={p.blueButton}
            features={p.features}
            yearly={isYearly}
          />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  icon: JSX.Element;
  title: string;
  titleOnYearly?: string;
  description: string;
  button: string;
  blueButton: boolean;
  features: { name: string; grayOnYearly: boolean }[];
  yearly: boolean;
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
            <p className="font-bold text-3xl line-clamp-1">
              {props.yearly && props.titleOnYearly
                ? props.titleOnYearly
                : props.title}
            </p>
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
                props.yearly && f.grayOnYearly ? "opacity-30" : ""
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
