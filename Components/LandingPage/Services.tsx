"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  FaGlobe,
  FaCube,
  FaMobileAlt,
  FaRobot,
  FaPaintBrush,
  FaBullhorn,
  FaTelegramPlane,
} from "react-icons/fa";
import Image from "next/image";

// Data + icons
const data = [
  {
    id: 2,
    image: "/Services/BlockChain.png",
    heading: "Blockchain, Web 3.0 & NFT",
    icon: <FaCube />,
  },
  {
    id: 3,
    image: "/Services/MobileAppDeveloment.png",
    heading: "Mobile App Development",
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    image: "/Services/TelegramMiniApps.png",
    heading: "Telegram Mini Apps Development",
    icon: <FaTelegramPlane />,
  },
  {
    id: 5,
    image: "/Services/AIDevelopment.png",
    heading: "Artificial Intelligence",
    icon: <FaRobot />,
  },
  {
    id: 6,
    image: "/Services/UI&UX.jpg",
    heading: "UI/UX Designing",
    icon: <FaPaintBrush />,
  },
  {
    id: 7,
    image: "/Services/SEO&Digital Marketing.png",
    heading: "SEO & Digital Marketing",
    icon: <FaBullhorn />,
  },
  {
    id: 1,
    image: "/Services/WebsiteDevelopment.jpg",
    heading: "Website Development",
    icon: <FaGlobe />,
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const n = data.length;
  const idx = (i: number) => ((i % n) + n) % n;

  // visible: left, center, right
  const visible = useMemo(() => {
    return [idx(current - 1), idx(current), idx(current + 1)].map(
      (i) => data[i]
    );
  }, [current]);

  const handleNext = () => setCurrent((s) => idx(s + 1));
  const handlePrev = () => setCurrent((s) => idx(s - 1));
  const goTo = (i: number) => setCurrent(i);

  const cardHeight = "h-72 sm:h-80 md:h-96";

  const cardVariants = {
    rest: { scale: 1, zIndex: 0 },
    hover: { scale: 1.02, zIndex: 20 },
  };

  const imageVariants = {
    rest: { scale: 1, filter: "blur(0px)" },
    hover: { scale: 1.5, filter: "blur(2px)" },
  };

  // New text + icon appear
  const overlayVariants = {
    rest: { y: 80, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  };

  // Old text moves up + fades
  const oldTextVariants = {
    rest: { y: 0, opacity: 1 },
    hover: { y: -100, opacity: 0 },
  };

  return (
    <section
      id="service"
      className="mx-auto overflow-x-hidden py-12 px-4 bg-white"
    >
      <div className="text-center mb-8">
        <h4 className="text-[#007BFF] bg-white inline-block border border-[#00000030] px-6 py-1 text-sm font-light rounded-full tracking-widest">
          BEST FEATURES
        </h4>
        <h2 className="text-6xl my-2 font-semibold mt-4 text-black">
          SERVICES
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-gray-600">
          At Mehdi Technologies, we deliver smart digital solutions that empower
          businesses to grow. From web development to AI automation, our
          services simplify operations, boost performance, and drive lasting
          success.
        </p>
      </div>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-10 border-3 text-black top-1/2 -translate-y-1/2 z-30 p-1 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform"
        >
          <FiChevronLeft size={32} />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div className="flex items-center justify-center gap-6">
            {visible.map((item, i) => {
              const isCenter = i === 1;
              const globalIndex = (current + (i - 1) + n) % n;

              return (
                <motion.div
                  key={item.id}
                  className={`relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer select-none bg-white ${
                    isCenter ? "z-20" : "z-10"
                  }`}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardVariants}
                  transition={{ duration: 0.35 }}
                  onClick={() => {
                    if (!isCenter) goTo(globalIndex);
                  }}
                >
                  {/* Image */}
                  <div
                    className={`relative w-full ${cardHeight} overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 origin-center"
                      variants={imageVariants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.heading}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
                  </div>

                  {/* Old text moves up + fades out */}
                  <motion.div
                    variants={oldTextVariants}
                    transition={{ duration: 0.9 }}
                    className="absolute left-0 bottom-4 w-full text-center origin-center"
                  >
                    <motion.p
                      initial={{ scaleX: 1 }}
                      animate={{ scaleX: 1.4 }} // increases width by 40%
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="text-white text-lg font-medium drop-shadow-md inline-block"
                    >
                      {item.heading}
                    </motion.p>
                  </motion.div>

                  {/* New icon + text appear on hover */}
                  <motion.div
                    variants={overlayVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-white"
                  >
                    <div
                      className="flex flex-col items-center justify-center px-4 py-2 rounded-xl backdrop-blur-md"
                      style={{ backdropFilter: "blur(0px)" }}
                    >
                      <div className="text-5xl mb-2 text-[#007BFF]">
                        {item.icon}
                      </div>
                      <p className="text-5xl font-semibold text-center">
                        {item.heading}
                      </p>
                    </div>
                  </motion.div>

                  {/* Featured badge */}
                  {isCenter && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1 rounded-full text-xs text-slate-800 shadow">
                      Featured
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute border-3 md:right-14  text-black top-1/2 -translate-y-1/2 z-30 p-1 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform"
        >
          <FiChevronRight size={32} />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "scale-125 bg-blue-500" : "bg-slate-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
