"use client";

import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CountUp from "react-countup";

export default function AboutMehdiTechnologies() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="mx-auto 2xl:max-w-7xl xl:max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            About <span className="text-[#007BFF]">Mehdi</span> Technologies
          </h2>

          <p className="mt-4 mx-auto text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            <strong>With 10 years of experience</strong> in the digital and IT
            industry, Mehdi Technologies has built a strong reputation for
            delivering reliable, innovative, and high-quality solutions. From
            branding to development, automation to design—we transform your
            ideas into powerful digital experiences that help your business grow
            faster and smarter. Our journey is driven by dedication, creativity,
            and a commitment to push boundaries. Your success isn’t just our
            goal—it’s our promise.
          </p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT: Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
              <div className="rounded-[48%] overflow-hidden">
                <Image
                  src="/AboutPagePicture.jpg"
                  alt="Team"
                  width={1000}
                  height={900}
                  className="object-cover block"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT: bullets + stats */}
          <div className="flex flex-col gap-8">
            {/* bullets */}
            <div className="space-y-4">
              {[
                "Advanced technology solutions to keep you ahead of the curve",
                "Trusted expertise with over 9 years driving innovation and growth",
                "Committed to empowering your success in an ever-evolving digital world",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1">
                    <FaCheckCircle className="text-white bg-[#007BFF] rounded-full p-[6px] w-6 h-6" />
                  </div>
                  <p className="text-base text-black font-bold">{text}</p>
                </div>
              ))}
            </div>

            {/* stats grid */}
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-800">
                  <CountUp end={350} duration={2.5} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Completed Projects
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-800">
                  <CountUp end={10} duration={2.5} />
                </div>
                <div className="text-sm text-gray-500 mt-1">Years</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-800">
                  <CountUp end={200} duration={2.5} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 mt-1">Unique clients</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-800">
                  <CountUp end={14} duration={2.5} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 mt-1">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
