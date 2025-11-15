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
    <section className="mx-auto py-16 md:px-4 px-5 bg-white">
      {/* Header */}
      <div className="md:text-center md:mb-16 mb-12">
        <h4 className="text-[#007BFF] bg-white inline-block border-2 border-gray-500 md:px-6 px-3 py-1.5 text-base  font-medium rounded-full tracking-[0.4em] mb-4">
          MEET OUR CLIENTS
        </h4>
        <h2 className="text-2xl md:text-6xl font-bold text-black mb-4">
          Trusted by innovators, startups, and <br />
          enterprises worldwide.
        </h2>
        <p className="text-gray-600 text-base md:text-lg ">
          Our clients represent industries across the globe, and together we
          build meaningful
          <br /> partnerships that drive growth and results.
        </p>
      </div>
      <div className="relative md:py-8  md:mx-24 overflow-x-hidden before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-gradient-to-t before:from-transparent before:via-black before:to-transparent after:absolute after:inset-y-0 after:right-0 after:w-0.5 after:bg-gradient-to-t after:from-transparent after:via-black after:to-transparent">
        {" "}
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
            repeatType: "loop",
          }}
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
