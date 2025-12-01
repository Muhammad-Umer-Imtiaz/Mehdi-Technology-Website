"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  points: string[];
}

interface ServicesSectionProps {
  title: string;
  services: ServiceItem[];
}

export default function ServicesSection({
  title,
  services,
}: ServicesSectionProps) {
  const [active, setActive] = useState<string>(services[0]?.title || "");
  const activeData = services.find((s) => s.title === active);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 160; // Increased for better visibility
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white py-20 px-5">
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="2xl:text-3xl xl:text-2xl text-white font-bold mb-3">
            {title}
          </h2>
          {/* <p className="text-white text-center md:text-lg text-sm">
            {description}
          </p> */}
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start 2xl:px-20 md:px-8">
          {/* Buttons */}
          <div className="w-full">
            {/* Desktop Buttons */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mb-6">
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setActive(service.title)}
                  className={`2xl:px-6 px-1 py-6 text-center rounded-xl border text-lg border-gray-600 font-semibold transition-all duration-300 ${
                    active === service.title
                      ? "bg-[#007BFF] text-white"
                      : "hover:bg-[#58C9EC] hover:text-black"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Mobile Scrollable Buttons with Arrows INSIDE */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Scrollable Container */}
                <div
                  className="flex overflow-x-auto gap-4 scrollbar-none scroll-smooth snap-x snap-mandatory px-12" // px-12 = space for arrows
                  ref={scrollRef}
                >
                  {services.map((service) => (
                    <button
                      key={service.title}
                      onClick={() => setActive(service.title)}
                      className={`flex-shrink-0 min-w-[140px] md:min-w-[180px] px-4 md:px-6 py-3 md:py-4 text-center rounded-xl border text-sm md:text-lg border-gray-600 font-semibold transition-all duration-300 snap-center ${
                        active === service.title
                          ? "bg-[#007BFF] text-white"
                          : "hover:bg-[#58C9EC] hover:text-black"
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>

                {/* Left Arrow */}
                <button
                  onClick={() => scroll("left")}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-700 transition-all z-10"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => scroll("right")}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-700 transition-all z-10"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Content Panel */}
          <div className="relative md:p-10 p-4 rounded-lg bg-black border border-gray-800 overflow-hidden group">
            <div className="absolute inset-0 rounded-lg animate-borderMove"></div>
            <div className="absolute inset-0 rounded-lg animate-borderMove2"></div>

            <div className="relative z-10">
              <h3 className="md:text-2xl text-lg font-bold md:mb-4">
                {activeData?.title}
              </h3>
              <p className="md:mb-8 mb-4 text-sm md:text-xl">
                {activeData?.desc}
              </p>
              <ul className="list-disc md:text-lg text-xs list-inside md:space-y-3 space-y-1">
                {activeData?.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes borderMove {
          0% {
            border-image-source: linear-gradient(
              0deg,
              #007bff 0%,
              transparent 50%,
              transparent 100%
            );
          }
          25% {
            border-image-source: linear-gradient(
              90deg,
              #007bff 0%,
              transparent 50%,
              transparent 100%
            );
          }
          50% {
            border-image-source: linear-gradient(
              180deg,
              #007bff 0%,
              transparent 50%,
              transparent 100%
            );
          }
          75% {
            border-image-source: linear-gradient(
              270deg,
              #007bff 0%,
              transparent 50%,
              transparent 100%
            );
          }
          100% {
            border-image-source: linear-gradient(
              360deg,
              #007bff 0%,
              transparent 50%,
              transparent 100%
            );
          }
        }
        .animate-borderMove {
          border-width: 4px;
          border-style: solid;
          border-image-slice: 1;
          animation: borderMove 3s linear infinite;
        }

        @keyframes borderMove2 {
          0% {
            border-image-source: linear-gradient(
              180deg,
              #40f1aa 0%,
              transparent 50%,
              transparent 100%
            );
          }
          25% {
            border-image-source: linear-gradient(
              270deg,
              #40f1aa 0%,
              transparent 50%,
              transparent 100%
            );
          }
          50% {
            border-image-source: linear-gradient(
              0deg,
              #40f1aa 0%,
              transparent 50%,
              transparent 100%
            );
          }
          75% {
            border-image-source: linear-gradient(
              90deg,
              #40f1aa 0%,
              transparent 50%,
              transparent 100%
            );
          }
          100% {
            border-image-source: linear-gradient(
              180deg,
              #40f1aa 0%,
              transparent 50%,
              transparent 100%
            );
          }
        }
        .animate-borderMove2 {
          border-width: 4px;
          border-style: solid;
          border-image-slice: 1;
          animation: borderMove2 3s linear infinite;
        }

        /* Hide scrollbar */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
