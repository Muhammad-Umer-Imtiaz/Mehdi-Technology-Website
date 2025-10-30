"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What services does Mehdi Technologies provide?",
    answer:
      "We provide Digital Marketing, Website Development, Mobile App Development, AI Solutions, SEO, and Branding services.",
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Yes! Every project is tailored to meet the client’s specific business requirements and goals.",
  },
  {
    question: "How do I get started with Mehdi Technologies?",
    answer:
      "You can contact us through our website or schedule a consultation to discuss your project needs.",
  },
  {
    question: "How can AI and Cloud solutions improve my business efficiency?",
    answer:
      "AI helps automate processes and extract insights, while cloud solutions enable scalability and cost-efficiency.",
  },
  {
    question: "How is Mehdi Technologies different from other companies?",
    answer:
      "We focus on innovation, transparency, and long-term partnerships rather than one-time projects.",
  },
  {
    question: "How is the project cost decided?",
    answer:
      "Costs are determined based on project complexity, scope, and required technologies after a detailed consultation.",
  },
  {
    question: "Does your company provide post-launch support?",
    answer:
      "Absolutely! We offer maintenance, performance monitoring, and updates even after project delivery.",
  },
];

export default function FAQS() {
  /** `null` = nothing open, otherwise the index of the open FAQ */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // If the clicked item is already open → close it,
    // otherwise open the clicked one (closing any other).
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-16 bg-white gap-12">
      {/* ────── LEFT: IMAGE (fixed size, never affected) ────── */}
      <div className="flex justify-center lg:w-1/2">
        <div className="w-[589px] h-[517px] flex items-center justify-center">
          <Image
            src="/FAQS.png"
            alt="FAQ Illustration"
            width={589}
            height={517}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ────── RIGHT: FAQ LIST ────── */}
      <div className="lg:w-1/2 w-full">

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-gradient-to-r from-[#007BFF] to-[#58C9EC] text-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
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
    </section>
  );
}
