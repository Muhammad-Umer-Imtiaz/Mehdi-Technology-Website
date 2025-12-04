"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSProps {
  title: string;
  data: FAQ[];
}
export default function FAQS({title,data}:FAQSProps) {
  /** `null` = nothing open, otherwise the index of the open FAQ */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // If the clicked item is already open → close it,
    // otherwise open the clicked one (closing any other).
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" px-5 mx-auto 2xl:max-w-7xl  py-16 bg-white ">
      {/* ────── LEFT: VIDEO (fixed height) ────── */}
<h2 className="text-3xl md:text-6xl font-bold text-black mb-16 md:mb-10 drop-shadow-2xl text-center">
          {title}
        </h2>      <div className="flex flex-col lg:flex-row items-center justify-between md:gap-12">
        <div className="lg:w-1/2 flex justify-center items-start">
        <div className="w-full md:h-[550px]  flex justify-center items-center">
          <video
            className="object-contain w-full h-full"
            autoPlay
            muted
            loop
            preload="none"
            playsInline
            src="https://res.cloudinary.com/dezxyrcnm/video/upload/q_auto,f_auto/v1763803244/FAQS_vpjru3.webm"
          />
        </div>
      </div>

      {/* ────── RIGHT: FAQ LIST ────── */}
      <div className="lg:w-1/2 w-full md:mb-0 mb-10">
        <div className="space-y-4">
          {data.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-linear-to-r from-[#007BFF] to-[#58C9EC] text-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                {/* ----- QUESTION BUTTON ----- */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold focus-visible:outline-none"
                >
                  <span>{`Q${index + 1}. ${faq.question}`}</span>
                  {isOpen ? (
                    <ChevronUp className="transition-transform" />
                  ) : (
                    <ChevronDown className="transition-transform" />
                  )}
                </button>

                {/* ----- ANSWER (collapsible) ----- */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-60 opacity-100 px-5 pb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <hr className="border-t border-white/60 mb-3" />
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
