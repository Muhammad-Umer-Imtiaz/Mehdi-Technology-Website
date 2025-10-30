"use client";
import { motion } from "framer-motion";
export default function Clients() {
  const logos = [
    "/Clients/company1.png",
    "/Clients/company2.png",
    "/Clients/company3.png",
    "/Clients/company4.png",
    "/Clients/company5.png",
    "/Clients/company6.png",
  ];
  return (
    <section className="mx-auto py-16 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h4 className="text-[#007BFF] bg-white inline-block border-2 border-gray-500 px-6 py-1.5 text-base  font-medium rounded-full tracking-[0.4em] mb-4">
          MEET OUR CLIENTS
        </h4>
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Trusted by innovators, startups, and <br />
          enterprises worldwide.
        </h2>
        <p className="text-gray-600 text-base md:text-lg ">
          Our clients represent industries across the globe, and together we
          build meaningful
          <br /> partnerships that drive growth and results.
        </p>
      </div>
      <div className="relative py-4 border-x-2 border-x-gradient-to-t from-[#00000000] via-[#000000] to-[#000000] mx-24 overflow-x-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          {logos.concat(logos).map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Logo ${i}`}
              className="sm:h-12 h-8 w-auto"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
