import { Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative h-[100vh] w-full bg-cover bg-center flex items-center  justify-center text-white"
      style={{ backgroundImage: "url('/BGHeroSection.png')" }}
    >
      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-4 mt-28">
        <h1 className="text-3xl sm:text-8xl  font-bold mb-4">
          Transforming <span className="text-[#007BFF] ">Ideas</span>
          <br /> into <span className="text-[#007BFF]">Digital</span> Excellence
        </h1>
        {"    "}
        <p className="text-lg sm:text-2xl  px-44">
          At Mehdi Technologies Pvt Ltd, we turn innovation into real-world
          impact through web,mobile, AI, and blockchain solutions. With 10+
          years of industry expertise, 350+ successful projects, and clients
          across 14+ countries, we help startups and enterprises build
          future-ready digital products.
        </p>

        <button className="bg-white px-8 shadow-[0_0_7px_0_rgba(255,255,255,0.8)] shadow-white py-2 font-semibold text-2xl rounded-md  text-[#007BFF] mt-10">
          <Mail className=" inline  w-7 text-[#000000]  h-7 mb-0.5 mr-3 font-semibold  hover:opacity-10 transition-all duration-300" />
          Our Services
        </button>
      </div>
    </section>
  );
}
