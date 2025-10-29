"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Fraud Braz",
    title: "Manager, Whole-Life Church",
    feedback:
      "Working with Mehdi Technologies was a fantastic experience. Their team went above and beyond to deliver a perfectly functional AI chatbot, staying available and responsive throughout the process.",
    image: "/BGHeroSection.png",
  },
  {
    id: 2,
    name: "ABCDEFG",
    title: "Professor, CU",
    feedback:
      "The professionalism and dedication shown by the team were exceptional. They exceeded our expectations and provided outstanding support throughout the project.",
    image: "/BGHeroSection.png",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "CTO, BrightWave",
    feedback:
      "A seamless experience from start to finish. The results were exactly what we envisioned, delivered with precision and creativity.",
    image: "/BGHeroSection.png",
  },
  {
    id: 4,
    name: "Michael Lee",
    title: "Director, NovaTech",
    feedback:
      "Super responsive and technically excellent. The team helped us scale faster than we thought possible.",
    image: "/BGHeroSection.png",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  //   const intervalRef = useRef<NodeJS.Timer | null>(null);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const intervalRef = useRef<number | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => handleNext(), 4000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const firstTestimonial = testimonials[index];
  const secondTestimonial = testimonials[(index + 1) % testimonials.length];

  return (
    <section
      id="testimonial"
      className="relative min-h-screen py-16 px-10 lg:px-28 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Achievement.png')" }}
    >
      <div className="text-center mb-8">
        <h4 className="text-[#007BFF] bg-white/90 inline-block border border-[#00000030] px-8 py-2 text-xs md:text-sm font-medium rounded-full tracking-[0.5em] uppercase shadow-sm backdrop-blur-sm">
          OUR CLIENTS
        </h4>

        <h2 className="text-6xl my-2 font-semibold mt-4 text-white">
          Testimonial
        </h2>
        <p className="max-w-2xl mx-auto mt-3 font-extralight text-white">
          From innovative startups to established enterprises, hear how our
          clients describe their <br />
          experiences and the value we’ve delivered together.
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full mt-10 gap-6">
        {/* Left arrow */}
        <button
          onClick={() => {
            handlePrev();
            resetInterval();
          }}
          aria-label="Previous"
          className="absolute left-4 md:-left-14 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm z-20 transition-all"
        >
          <FiChevronLeft size={28} />
        </button>

        <div className="relative w-full flex ">
          {/* Full testimonial */}
          <motion.div
            layout
            key={firstTestimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-gradient-to-r from-[#007BFF] to-[#58C9EC] text-white rounded-3xl p-8 flex  gap-8 w-[70%] shadow-xl z-10 relative"
          >
            <div>
              <Image
                src={firstTestimonial.image}
                alt={firstTestimonial.name}
                width={600}
                height={800}
                className="object-cover h-80 w-auto mb-4 md:mb-2 md:mr-6"
              />

              <h4 className="text-lg font-semibold text-center">
                {firstTestimonial.name}
              </h4>
              <p className="text-sm opacity-80 text-center">
                {firstTestimonial.title}
              </p>
            </div>
            <div>
              <p className="text-sm md:text-base font-light leading-relaxed mb-3">
                {firstTestimonial.feedback}
              </p>
            </div>
          </motion.div>

          {/* Partial testimonial */}
          <motion.div
            layout
            key={secondTestimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="bg-gradient-to-r from-[#007BFF]/70 to-[#58C9EC]/70 text-white rounded-3xl p-8 flex flex-col items-center shadow-xl w-[25%] absolute right-0 top-0 z-0"
          >
            <Image
              src={firstTestimonial.image}
              alt={firstTestimonial.name}
              width={600}
              height={800}
              className="object-cover h-80 w-auto mb-4 md:mb-2 md:mr-0"
            />
            <h4 className="text-sm font-semibold text-center">
              {secondTestimonial.name}
            </h4>
            <p className="text-sm opacity-80">{firstTestimonial.title}</p>
          </motion.div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => {
            handleNext();
            resetInterval();
          }}
          aria-label="Next"
          className="absolute -right-14 md:-right-14 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm z-20 transition-all"
        >
          <FiChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
