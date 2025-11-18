"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What services does Mehdi Technologies provide?",
    answer:
      "We provide complete digital transformation services including Web, Mobile, Blockchain, AI, and Digital Marketing solutions tailored to your business needs.",
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Absolutely. Every project is unique. We design and develop custom solutions aligned with your brand, goals, and audience.",
  },
  {
    question: "How do I get started with Mehdi Technologies?",
    answer:
      "It’s easy! Simply contact us with your project details or schedule a free consultation — our experts will guide you from idea to implementation.",
  },
  {
    question: "How can AI and Cloud solutions improve my business efficiency?",
    answer:
      "AI automates repetitive tasks, enhances decision-making, and improves customer interaction. Combined with cloud scalability, your operations become smarter, faster, and more cost-effective.",
  },
  {
    question: "How is Mehdi Technologies different from other companies?",
    answer:
      "We combine innovation with experience, offering transparent processes, advanced technology stacks, and a personalized client experience focused on long-term success.",
  },
  {
    question: "How is the project cost decided?",
    answer:
      "Project costs are based on scope, complexity, technology stack, and timeline. We provide a transparent quote after a detailed discussion of your requirements.",
  },
  {
    question: "Does your company provide post-launch support?",
    answer:
      "Yes. We offer full post-launch maintenance, updates, bug fixes, and scaling support to ensure your project continues to perform seamlessly.",
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
    <section
      id="faqs"
      className="flex flex-col lg:flex-row items-center justify-between px-5 mx-auto 2xl:max-w-7xl py-16 bg-white md:gap-12"
    >
      {/* ────── LEFT: IMAGE (fixed size, never affected) ────── */}
      <div className="flex justify-center lg:w-1/2">
        <div className="w-[450px] md:w-[600px] h-[517px] flex items-center justify-center">
          <Image
            src="/FAQs.gif"
            alt="FAQ Illustration"
            width={589}
            height={517}
            className="object-contain"
            priority
            unoptimized
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
