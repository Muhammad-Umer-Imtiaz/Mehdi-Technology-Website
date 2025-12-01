
import React from "react";
import { IconType } from "react-icons";

interface Industry {
  name: string;
  desc: string;
  icon: IconType;
}

interface IndustriesWeServeProps {
  title?: string;
  Industry: Industry[];
}

export default function IndustriesWeServe({ title, Industry }: IndustriesWeServeProps) {
  if (!Industry || Industry.length === 0) return null;

  return (
    <section className="bg-white text-black py-16 px-6 md:px-20 max-w-7xl mx-auto">
      {title && (
        <h2 className="text-4xl font-bold text-center mb-12 text-[#007BFF]">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Industry.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-[#58C9EC]/40 shadow hover:bg-[#E0F3FF] hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Icon className="w-8 h-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#007BFF] mb-2">
                {industry.name}
              </h3>
              <p className="text-black/80 text-sm">{industry.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
