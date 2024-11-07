"use client";

import { useState } from "react";
import faqs from "../data/faqs.json";
import ChevronBottomIcon from "./icons/ChevronBottomIcon";

export default function FAQ() {
  return (
    <div id="qna" className="p-16 max-w-screen-2xl mx-auto">
      <div>
        <h2 className="font-bold text-3xl text-center">
          Your Questions, Answered
        </h2>
        <p className="mt-3 font-medium text-xl text-center text-smoky-black/70">
          We&apos;re Here to Help!
        </p>
      </div>
      <div className="mt-16 space-y-4">
        {faqs.map((f, idx) => (
          <Accordion key={idx} title={f.question} description={f.answer} />
        ))}
      </div>
    </div>
  );
}

interface AccordionProps {
  title: string;
  description: string;
}

function Accordion(props: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      className="px-6 py-3.5 border border-philippine-silver rounded-xl flex items-center justify-between text-left"
    >
      <div className="flex-1">
        <p className="font-medium text-lg py-0.5">{props.title}</p>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <p className="mt-2.5">{props.description}</p>
        </div>
      </div>
      <div
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <ChevronBottomIcon />
      </div>
    </button>
  );
}
