"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Fraud Braz",
    title: "Manager, Whole-Life Church",
    feedback:
      "Working with Mehdi Technologies was a fantastic experience. Their team went above and beyond to deliver a perfectly functional AI chatbot, staying available and responsive throughout the process. Highly professional, efficient, and committed to excellence.",
    image: "/Testimonails/testimonail1.jpg",
  },
  {
    id: 2,
    name: "Professor CU",
    title: "Professor, CU",
    feedback:
      "The Mehdi Technologies team demonstrated outstanding performance in chatbot development. Their proactive communication and detail-oriented work made the collaboration seamless and enjoyable. Highly recommended!",
    image: "/Testimonails/testimonail2.jpg",
  },
  {
    id: 3,
    name: "Founder MAI",
    title: "Founder, MAI",
    feedback:
      "Our AI project with Mehdi Technologies exceeded expectations. Their attention to detail, documentation, and timely delivery made the process smooth. A truly top-notch experience.",
    image: "/Testimonails/testimonail3.jpg",
  },
  {
    id: 4,
    name: "Founder OME",
    title: "Founder, OME",
    feedback:
      "Mehdi Technologies worked tirelessly to understand and meet our needs. Excellent communication, fast delivery, and a great final product. Highly recommended!",
    image: "/Testimonails/testimonail4.jpg",
  },
  {
    id: 5,
    name: "Founder AJM",
    title: "Founder, AJM",
    feedback:
      "Professional and competent throughout. Despite the complexity of our order, Mehdi Technologies developed an efficient solution quickly with great communication and collaboration.",
    image: "/Testimonails/testimonail5.jpg",
  },
];

export default function Testimonial2() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleNext, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const firstTestimonial = testimonials[index];
  const secondTestimonial = testimonials[(index + 1) % testimonials.length];

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -80) {
      handleNext();
      resetInterval();
    } else if (info.offset.x > 80) {
      handlePrev();
      resetInterval();
    }
  };

  return (
    <section
      id="testimonial"
      className="relative min-h-screen py-16 px-6 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/BackgroundPictures/LandingPageBG/TestimonialBG.webp')",
      }}
    >
      <div className="text-center mb-8">
        <h4 className="text-[#007BFF] bg-white/90 inline-block border border-[#00000030] px-8 py-2 text-xs md:text-sm font-medium rounded-full tracking-[0.5em] uppercase shadow-sm backdrop-blur-sm">
          OUR CLIENTS
        </h4>

        <h2 className="text-4xl md:text-6xl my-2 font-semibold mt-4 text-white">
          Testimonial
        </h2>
        <p className="max-w-2xl mx-auto mt-3 font-extralight text-white">
          From innovative startups to established enterprises, hear how our
          clients describe their <br />
          experiences and the value we’ve delivered together.
        </p>
      </div>

      {/* Desktop / Tablet */}
      <div className="hidden md:flex relative items-center justify-center max-w-7xl mx-auto w-full mt-10 gap-6">
        <button
          onClick={() => { handlePrev(); resetInterval(); }}
          aria-label="Previous"
          className="absolute left-4 md:-left-14 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm z-20 transition-all"
        >
          <FiChevronLeft size={28} />
        </button>

        <div className="relative w-full flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={firstTestimonial.id}
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="bg-gradient-to-r from-[#007BFF] to-[#58C9EC] text-white rounded-3xl p-8 flex gap-8 w-[70%] shadow-xl z-10 relative"
            >
              <div className="flex-shrink-0">
                <Image
                  src={firstTestimonial.image}
                  alt={firstTestimonial.name}
                  width={300}
                  height={350}
                  className="object-contain rounded-3xl h-80 w-auto mb-4 md:mb-2 md:mr-3"
                />
                <h4 className="text-lg font-semibold text-center">
                  {firstTestimonial.name}
                </h4>
                <p className="text-sm opacity-80 text-center">
                  {firstTestimonial.title}
                </p>
              </div>
              <div>
                <p className="text-sm md:text-xl font-light leading-relaxed mb-3">
                  {firstTestimonial.feedback}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={secondTestimonial.id + "next"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#007BFF]/70 to-[#58C9EC]/70 text-white rounded-3xl p-6 flex flex-col items-center shadow-xl w-[25%] absolute right-0 top-0 z-0"
          >
            <Image
              src={secondTestimonial.image}
              alt={secondTestimonial.name}
              width={300}
              height={350}
              className="object-cover rounded-2xl h-84 w-auto mb-4 md:mb-2"
            />
            <h4 className="text-sm font-semibold text-center">
              {secondTestimonial.name}
            </h4>
            <p className="text-sm opacity-80 text-center">
              {secondTestimonial.title}
            </p>
          </motion.div>
        </div>

        <button
          onClick={() => { handleNext(); resetInterval(); }}
          aria-label="Next"
          className="absolute right-4 md:-right-14 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm z-20 transition-all"
        >
          <FiChevronRight size={28} />
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden mt-8">
        <div className="flex items-center justify-center">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full max-w-md mx-auto cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={firstTestimonial.id}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-gradient-to-r from-[#007BFF]/70 to-[#58C9EC]/70 text-white rounded-3xl p-6 flex flex-col items-center shadow-xl"
              >
                <Image
                  src={firstTestimonial.image}
                  alt={firstTestimonial.name}
                  width={320}
                  height={360}
                  className="object-contain rounded-2xl h-64 w-full mb-4"
                />
                <h4 className="text-lg font-semibold text-center">
                  {firstTestimonial.name}
                </h4>
                <p className="text-sm opacity-90 text-center mb-3">
                  {firstTestimonial.title}
                </p>
                <p className="text-sm font-light leading-relaxed text-center">
                  {firstTestimonial.feedback}
                </p>
                <div className="mt-4 text-xs opacity-80">Swipe left or right</div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={() => { handlePrev(); resetInterval(); }}
            className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm"
            aria-label="Previous"
          >
            <FiChevronLeft size={20} />
          </button>
          <div className="text-white text-sm">
            {index + 1}/{testimonials.length}
          </div>
          <button
            onClick={() => { handleNext(); resetInterval(); }}
            className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm"
            aria-label="Next"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}