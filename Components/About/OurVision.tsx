"use client";

import React from "react";
import Image from "next/image";
import {
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaBalanceScale,
} from "react-icons/fa";

const features = [
  {
    title: "Progress",
    text: "Our only fuel is our client’s success and we firmly believe in creating long-term business relationships.",
    icon: <FaChartLine />,
  },
  {
    title: "User Experience",
    text: "Our best developers create solutions for startups to enterprises, keeping in mind the interests of their users.",
    icon: <FaUsers />,
  },
  {
    title: "Inventiveness",
    text: "The world is moving at a very fast pace, and we keep up with it with our futuristic Custom Development.",
    icon: <FaLightbulb />,
  },
  {
    title: "Ethic and Credo",
    text: "We firmly believe in maintaining our business relationship with our clients which only comes with strong ethics.",
    icon: <FaBalanceScale />,
  },
];

export default function OurVision() {
  return (
    <section
      id="vision"
      className="relative py-16"
      aria-label="Our Vision section"
    >
      {/* Background placeholder - replace backgroundImage with your image later */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/BackgroundPictures/OurVisionBG.jpg')`, // replace or remove when you add your own
          // optional: dark overlay to match screenshot
        }}
      />

      <div className="mx-auto 2xl:max-w-7xl xl:max-w-5xl px-4">
        {/* Header */}
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Our Vision
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-white/90">
            To create technology that empowers businesses, enhances efficiency, and elevates user experiences.

          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <article
              key={idx}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-transparent
                         transition-all duration-500 ease-out
                         hover:scale-[1.05] hover:shadow-2xl hover:bg-white
                         hover:border-[#00A6FF]"
            >
              {/* Glowing Effect (behind the card) */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 pointer-events-none -z-10"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(0, 166, 255, 0.25), transparent 60%)",
                  boxShadow:
                    "0 0 40px rgba(0, 166, 255, 0.4), 0 0 80px rgba(0, 166, 255, 0.2)",
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#007BFF] to-[#00A6FF] rounded-full flex items-center justify-center shadow-lg 
                              group-hover:scale-110 transition-transform duration-300"
              >
                <div className="text-white">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-center text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-center text-sm sm:text-base text-slate-600 leading-relaxed">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
