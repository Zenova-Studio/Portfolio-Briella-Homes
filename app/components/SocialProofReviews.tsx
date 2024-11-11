"use client";

import { MouseEventHandler, useState } from "react";
import reviews from "../data/reviews.json";

export default function SocialProofReviews() {
  const [index, setIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [isAnimateTo, setIsAnimateTo] = useState<"back" | "next" | "no">("no");

  function next() {
    if (isAnimateTo === "no") {
      setIsAnimateTo("next");
    }
  }

  function back() {
    if (isAnimateTo === "no") {
      setIsAnimateTo("back");
    }
  }

  function onTransitionEnd() {
    const animateTo = isAnimateTo;
    switch (animateTo) {
      case "back":
        setIndex((state) => {
          return [
            getIndex("back", state[0], 0, reviews.length - 1),
            getIndex("back", state[1], 0, reviews.length - 1),
            getIndex("back", state[2], 0, reviews.length - 1),
            getIndex("back", state[3], 0, reviews.length - 1),
            getIndex("back", state[4], 0, reviews.length - 1),
            getIndex("back", state[5], 0, reviews.length - 1),
            getIndex("back", state[6], 0, reviews.length - 1),
            getIndex("back", state[7], 0, reviews.length - 1),
            getIndex("back", state[8], 0, reviews.length - 1),
            getIndex("back", state[9], 0, reviews.length - 1),
            getIndex("back", state[10], 0, reviews.length - 1),
          ];
        });
        break;
      case "next":
        setIndex((state) => {
          return [
            getIndex("next", state[0], 0, reviews.length - 1),
            getIndex("next", state[1], 0, reviews.length - 1),
            getIndex("next", state[2], 0, reviews.length - 1),
            getIndex("next", state[3], 0, reviews.length - 1),
            getIndex("next", state[4], 0, reviews.length - 1),
            getIndex("next", state[5], 0, reviews.length - 1),
            getIndex("next", state[6], 0, reviews.length - 1),
            getIndex("next", state[7], 0, reviews.length - 1),
            getIndex("next", state[8], 0, reviews.length - 1),
            getIndex("next", state[9], 0, reviews.length - 1),
            getIndex("next", state[10], 0, reviews.length - 1),
          ];
        });
      case "no":
    }
    setIsAnimateTo("no");
  }

  function getIndex(
    action: "next" | "back",
    data: number,
    min: number,
    max: number
  ) {
    if (action === "back") {
      if (data === min) {
        data = max;
      } else {
        data--;
      }
    } else {
      if (data === max) {
        data = min;
      } else {
        data++;
      }
    }
    return data;
  }

  return (
    <div className="p-16 max-w-screen-2xl mx-auto">
      <h2 className="font-bold text-3xl text-center">
        What Our Happy Clients Say About Briella Homes
      </h2>
      <div className="mt-20">
        <div
          onTransitionEnd={onTransitionEnd}
          className="relative py-2.5 overflow-hidden"
        >
          <div
            className={`h-[122px] w-[110%] ${
              isAnimateTo === "no"
                ? "-translate-x-[5%]"
                : isAnimateTo === "next"
                ? "transition-all duration-300 -translate-x-[12.4%]"
                : "transition-all duration-300 translate-x-[2.4%]"
            } flex items-center justify-between`}
          >
            <Review
              index={-1}
              src={
                reviews[getIndex("back", index[0], 0, reviews.length - 1)]
                  .img_src
              }
              onClick={back}
              isAnimateTo={isAnimateTo}
              centerIndex={5}
            />
            {index.map((idx, i) => (
              <Review
                key={idx}
                index={i}
                src={reviews[idx].img_src}
                onClick={i > 5 ? next : i < 5 ? back : undefined}
                isAnimateTo={isAnimateTo}
                centerIndex={5}
              />
            ))}
            <Review
              index={index.length + 1}
              src={
                reviews[getIndex("next", index[10], 0, reviews.length - 1)]
                  .img_src
              }
              onClick={back}
              isAnimateTo={isAnimateTo}
              centerIndex={5}
            />
          </div>
          <div className="absolute top-0 h-full flex">
            <div className="bg-white w-1/3" />
            <div className="w-32 bg-gradient-to-r from-white to-white/0" />
          </div>
          <div className="absolute top-0 right-0 h-full flex">
            <div className="w-32 bg-gradient-to-l from-white to-white/0" />
            <div className="bg-white w-1/3" />
          </div>
        </div>
        <div className="mt-6">
          <p className="font-medium text-2xl text-center">
            {reviews[index[5]].title1}
          </p>
          <p className="mt-3 font-medium text-xl text-smoky-black/70 text-center">
            {reviews[index[5]].title2}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ReviewProps {
  index: number;
  src: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  isAnimateTo: "next" | "back" | "no";
  centerIndex: number;
}

function Review(props: ReviewProps) {
  return (
    <img
      src={props.src}
      onTransitionEnd={(e) => e.stopPropagation()}
      onClick={props.onClick}
      className={`transition-all duration-300 ${
        props.isAnimateTo === "no"
          ? props.centerIndex === props.index
            ? "w-28 h-28"
            : props.centerIndex + 1 === props.index ||
              props.centerIndex - 1 === props.index
            ? "w-20 h-20"
            : "w-16 h-16"
          : props.isAnimateTo === "next"
          ? props.centerIndex + 1 === props.index
            ? "w-28 h-28"
            : props.centerIndex + 2 === props.index ||
              props.centerIndex === props.index
            ? "w-20 h-20"
            : "w-16 h-16"
          : props.isAnimateTo === "back"
          ? props.centerIndex - 1 === props.index
            ? "w-28 h-28"
            : props.centerIndex === props.index ||
              props.centerIndex - 2 === props.index
            ? "w-20 h-20"
            : "w-16 h-16"
          : ""
      }`}
    />
  );
}
