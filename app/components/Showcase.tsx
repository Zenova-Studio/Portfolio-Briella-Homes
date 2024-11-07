"use client";

import { useState } from "react";
import showcase from "../data/showcase.json";
import HeartIconAlt from "./icons/HeartIconAlt";

export default function Showcase() {
  return (
    <div id="properties" className="py-16 max-w-screen-2xl mx-auto">
      <h2 className="px-8 font-bold text-3xl text-center">
        Unlock Your Next Home at the Best Price—Check Out Our Listings!
      </h2>
      <div className="py-24 flex overflow-x-auto hide-scrollbar">
        {showcase.map((s, idx) => (
          <Card key={idx} imgSrc={s.img_src} title={s.title} price={s.price} />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  imgSrc: string;
  title: string;
  price: string;
}

function Card(props: CardProps) {
  const [loved, setLoved] = useState(false);

  return (
    <div className="px-8">
      <div className="shadow-md rounded-2xl h-[357px] aspect-[275/357] p-3.5">
        <img src={props.imgSrc} className="h-64 rounded-xl" />
        <div className="flex mt-4 px-8 justify-between items-center">
          <div>
            <p className="font-medium">{props.title}</p>
            <p className="font-medium text-eerie-black/50">{props.price}</p>
          </div>
          <div>
            <button type="button" onClick={() => setLoved((prev) => !prev)}>
              <HeartIconAlt fill={loved} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
