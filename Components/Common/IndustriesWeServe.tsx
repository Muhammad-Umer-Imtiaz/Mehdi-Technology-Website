// components/IndustriesWeServe.tsx
import React from "react";
import { IconType } from "react-icons";

interface Industry {
  name: string;
  desc: string;
  icon: IconType;
}

interface IndustriesWeServeProps {
  title?: string;
  Industry: Industry[]; // ← keeping your exact prop name
}

export default function IndustriesWeServe({ title = "Industries We Serve", Industry }: IndustriesWeServeProps) {
  if (!Industry || Industry.length === 0) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background Image + Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/BackgroundPictures/IndustriesWeServeBG.webp')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">
        {/* Main Title */}
        <h2 className="text-3xl md:text-7xl font-bold text-white mb-16 drop-shadow-2xl">
          {title}
        </h2>
        {/* <p className="text-xl md:text-2xl text-white/90 mb-16 font-light tracking-wide">
          We create websites for:
        </p> */}

        {/* Grid of Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Industry.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl md:py-8 py-4 px-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 cursor-default"
              >
                {/* Icon Circle */}
                <div className="md:mb-6 mb-3 flex justify-center">
                  <div className="md:w-20 md:h-20 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                    <Icon className="md:w-10 md:h-10 h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="md:text-xl text-base font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}