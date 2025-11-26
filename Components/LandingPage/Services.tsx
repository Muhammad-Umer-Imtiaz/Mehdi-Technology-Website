"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
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
import { useRouter } from "next/navigation";

const data = [
  {
    id: 2,
    image: "/LandingPage/Services/BlockChain.webp",
    heading: "Blockchain, Web 3.0 & NFT",
    icon: <FaCube />,
    slug: "services/blockchain-development",
  },
  {
    id: 3,
    image: "/LandingPage/Services/MobileAppDeveloment.webp",
    heading: "Mobile App Development",
    icon: <FaMobileAlt />,
    slug: "services/mobile-app-development",
  },
  {
    id: 4,
    image: "/LandingPage/Services/TelegramMiniApps.webp",
    heading: "Telegram Mini Apps Development",
    icon: <FaTelegramPlane />,
    slug: "services/telegram-mini-apps",
  },
  {
    id: 5,
    image: "/LandingPage/Services/AIDevelopment.webp",
    heading: "AI/ML & Generative AI",
    icon: <FaRobot />,
    slug: "services/ai-automation",
  },
  {
    id: 6,
    image: "/LandingPage/Services/UI&UX.webp",
    heading: "UI/UX Designing",
    icon: <FaPaintBrush />,
    slug: "services/graphic-designing",
  },
  {
    id: 7,
    image: "/LandingPage/Services/SEO&Digitalmarketing.webp",
    heading: "SEO & Digital Marketing",
    icon: <FaBullhorn />,
    slug: "services/website-optimzation",
  },
  {
    id: 1,
    image: "/LandingPage/Services/WebsiteDevelopment.webp",
    heading: "Website Development",
    icon: <FaGlobe />,
    slug: "services/web-development",
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  /* breakpoint detection */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024); // lg = 1024px
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const n = data.length;
  const idx = (i: number) => ((i % n) + n) % n;

  /* visible items */
  const visible = useMemo(() => {
    if (isMobile) return [data[idx(current)]];
    return [idx(current - 1), idx(current), idx(current + 1)].map(
      (i) => data[i]
    );
  }, [current, isMobile]);

  const handleNext = () => setCurrent((s) => idx(s + 1));
  const handlePrev = () => setCurrent((s) => idx(s - 1));
  const goTo = (i: number) => setCurrent(i);

  /* swipe config */
  const SWIPE_DISTANCE = 80; // px — distance threshold
  const SWIPE_VELOCITY = 500; // px/s — velocity threshold to treat as flick
  const draggedRef = useRef(false); // track if user actually dragged to suppress click

  const handleDrag = (_: any, info: PanInfo) => {
    // mark as dragged if moved a bit (prevents click)
    if (Math.abs(info.offset.x) > 6) draggedRef.current = true;
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    // treat either a long drag or a fast flick as a swipe
    if (offsetX < -SWIPE_DISTANCE || velocityX < -SWIPE_VELOCITY) {
      handleNext();
    } else if (offsetX > SWIPE_DISTANCE || velocityX > SWIPE_VELOCITY) {
      handlePrev();
    }
    // reset dragged flag after small timeout so subsequent clicks work
    setTimeout(() => (draggedRef.current = false), 50);
  };

  /* Animation variants (unchanged) */
  const cardVariants = {
    rest: { scale: 1, zIndex: 0 },
    hover: { scale: 1.02, zIndex: 20 },
  };
  const imageVariants = {
    rest: { scale: 1, filter: "blur(0px)" },
    hover: { scale: 1.5, filter: "blur(2px)" },
  };
  const overlayVariants = {
    rest: { y: 80, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  };
  const oldTextVariants = {
    rest: { y: 0, opacity: 1 },
    hover: { y: -100, opacity: 0 },
  };

  return (
    <section
      id="service"
      className="mx-auto  py-12 md:px-0 px-5 2xl:max-w-7xl bg-white"
    >
      {/* Header */}
      <div className="md:text-center text-start mb-8">
        <h4 className="text-[#007BFF] bg-white inline-block border border-[#00000030] px-6 py-1 text-sm font-light rounded-full tracking-[0.5em]">
          BEST FEATURES
        </h4>
        <h2 className="md:text-6xl text-3xl my-2 font-semibold mt-4 text-black">
          SERVICES
        </h2>
        <p className="mt-3 text-gray-600">
          At Mehdi Technologies, we deliver smart digital solutions that empower
          businesses to grow. From web development to AI{" "}
          <br className="hidden md:block" /> automation, our services simplify
          operations, boost performance, and drive lasting success.
        </p>
      </div>

      <div className="relative">
        {/* Arrows – hidden on mobile when only 1 card */}
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full text-black bg-white/90 shadow-md hover:scale-105 transition-transform"
            >
              <FiChevronLeft size={32} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next"
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform"
            >
              <FiChevronRight size={32} />
            </button>
          </>
        )}

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className={`flex items-center justify-center ${
              isMobile ? "gap-0" : "2xl:gap-10 xl:gap-6 gap-4"
            }`}
          >
            {visible.map((item, i) => {
              const isCenter = !isMobile && i === 1; // only on desktop

              /* For mobile: make the single card draggable (swipe) */
              if (isMobile) {
                return (
                  <motion.div
                    key={item.id}
                    className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer select-none bg-white w-full max-w-xs mx-auto"
                    drag="x"
                    // relaxed constraints so swipe feels natural across devices
                    dragConstraints={{ left: -300, right: 300 }}
                    dragElastic={0.18}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={(e) => {
                      if (draggedRef.current) {
                        // user dragged — don't treat as click
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                      }
                      router.push(`/${item.slug}`);
                    }}
                  >
                    <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden">
                      <motion.div
                        className="absolute inset-0 origin-center"
                        variants={imageVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Image
                          src={item.image}
                          alt={item.heading}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
                    </div>

                    <motion.div
                      variants={oldTextVariants}
                      transition={{ duration: 0.9 }}
                      className="absolute left-0 bottom-8 w-full text-center"
                    >
                      <motion.p
                        initial={{ scaleX: 0.5 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="text-white md:text-xl text-3xl md:font-normal font-bold inline-block"
                      >
                        {item.heading}
                      </motion.p>
                    </motion.div>

                    <motion.div
                      variants={overlayVariants}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-white"
                    >
                      <div
                        className="flex flex-col items-center justify-center px-10 py-2 rounded-xl backdrop-blur-3xl w-full h-full"
                        style={{ backdropFilter: "blur(6px)" }}
                      >
                        <div className="text-5xl mb-2 text-[#007BFF]">
                          {item.icon}
                        </div>
                        <p className="text-5xl font-semibold text-center">
                          {item.heading}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }

              /* Desktop / non-mobile cards (unchanged) */
              return (
                <motion.div
                  key={item.id}
                  className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer select-none bg-white ${
                    isCenter ? "z-20" : "z-10"
                  } ${
                    isMobile
                      ? "w-full max-w-xs mx-auto"
                      : "w-64 sm:w-72 md:w-80 lg:w-96"
                  }`}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardVariants}
                  transition={{ duration: 0.35 }}
                  onClick={() => router.push(`/${item.slug}`)}
                >
                  <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden">
                    <motion.div
                      className="absolute inset-0 origin-center"
                      variants={imageVariants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.heading}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
                  </div>

                  <motion.div
                    variants={oldTextVariants}
                    transition={{ duration: 0.9 }}
                    className="absolute md:left-0 md:bottom-8 left-0 bottom-26 w-full text-center"
                  >
                    <motion.p
                      initial={{ scaleX: 0.5 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="text-white md:text-xl text-3xl md:font-normal font-bold inline-block"
                    >
                      {item.heading}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    variants={overlayVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-white"
                  >
                    <div
                      className="flex flex-col items-center justify-center px-10 py-2 rounded-xl backdrop-blur-3xl w-full h-full"
                      style={{ backdropFilter: "blur(6px)" }}
                    >
                      <div className="text-5xl mb-2 text-[#007BFF]">
                        {item.icon}
                      </div>
                      <p className="text-5xl font-semibold text-center">
                        {item.heading}
                      </p>
                    </div>
                  </motion.div>

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
      </div>

      {/* Pagination dots – always shown */}
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
