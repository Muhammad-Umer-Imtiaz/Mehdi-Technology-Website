import { Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative h-[100vh] w-full bg-cover bg-center md:flex md:pt-0 pt-36 md:items-center md:justify-center text-white"
      style={{ backgroundImage: "url('/BGHeroSection.png')" }}
    >
      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="relative z-10 md:text-center  xl:max-w-5xl 2xl:max-w-7xl md:mt-28 px-5   mx-auto">
        <h1 className="text-5xl sm:text-8xl xl:text-7xl 2xl:text-8xl font-bold mb-4">
          Transforming <span className="text-[#007BFF]">Ideas</span>
          <br className="hidden md:block" /> into{" "}
          <span className="text-[#007BFF]">Digital</span> Excellence
        </h1>

        <p className=" sm:text-xl 2xl:text-2xl ">
          At Mehdi Technologies Pvt Ltd, we turn innovation into real-world
          impact through web, mobile, AI, and blockchain solutions. With 10+
          years of industry expertise, 350+ successful projects, and clients
          across 14+ countries, we help startups and enterprises build
          future-ready digital products.
        </p>

        <div className="flex justify-center w-full">
          <Link
            href="/#service"
            className="
      inline-flex items-center 
      bg-white 
      md:px-8 px-4 py-2 
      md:mt-10 mt-6 
      rounded-md 
      font-semibold 
      text-2xl 
      text-[#007BFF] 
      shadow-[0_0_7px_0_rgba(255,255,255,0.8)]
      transition-all duration-300
      hover:bg-gradient-to-r hover:from-[#007BFF] hover:to-[#58C9EC]
      hover:text-white hover:rounded-lg
      active:bg-gradient-to-r active:from-[#007BFF] active:to-[#58C9EC]
      active:text-white active:rounded-lg
    "
          >
            <Mail className="w-7 h-7 mr-3 text-black hover:text-white active:text-white" />
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
