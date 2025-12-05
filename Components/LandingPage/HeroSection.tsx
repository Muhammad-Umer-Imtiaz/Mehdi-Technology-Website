import { Mail } from "lucide-react";
import Link from "next/link";
import TextType from "../Animation/TextType";

import { FiArrowRight } from "react-icons/fi"
export default function HeroSection() {
  return (
    <section className="relative h-screen w-full md:flex md:pt-0 pt-48 md:items-center md:justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/BackgroundPictures/LandingPageBG/BGHeroSection.webp"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dezxyrcnm/video/upload/q_auto,f_auto/v1763444736/final_video_hero_section__1__xpr5cu.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 md:text-center  xl:max-w-5xl 2xl:max-w-7xl md:mt-28 px-5   mx-auto">
        <div className="md:block hidden">
          <TextType
  className="
   inline-flex  items-center gap-3 text-xs font-medium mb-6 
    bg-linear-to-r from-white/20 to-white/5 
    text-white/80 px-5 py-2.5 md:text-xl 
    rounded-full shadow-lg border border-white/20 
    backdrop-blur-xl tracking-wide"
  text={["Build better digital experiences", "Automate your workflow with smart solutions", "Scale your business with powerful technology"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

        </div>
        {/* <p className="block bg-white/10 backdrop-blur-md text-[#ffffff]/70 md:px-6 px-3 py-2 md:text-base inline-flex items-center gap-2 font-light rounded-full mb-4 tracking-wide shadow-sm border-2 border-white/50">
  Build 
  <FiArrowRight className="inline-block text-white" />
  Automate
  <FiArrowRight className="inline-block text-white" />
  Scale
</p> */}
       {/* <TextType
  as="h1"
  className="block text-5xl sm:text-8xl xl:text-7xl 2xl:text-8xl font-bold mb-4"
  text={[
    "Transforming Ideas into Digital Excellence",
    "Building Powerful Digital Solutions for your Business"
  ]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/> */}

        <h1 className="text-5xl sm:text-8xl xl:text-7xl 2xl:text-8xl font-bold mb-4">
          Transforming <span className="text-[#007BFF]">Ideas</span>
          <br className="hidden md:block" /> into{" "}
          <span className="text-[#007BFF]">Digital</span> Excellence
        </h1>

        <h2 className=" sm:text-xl 2xl:text-2xl ">
          Custom Software. AI Agents. Mobile Apps. Web Platforms.
Everything your business needs to scale.

        </h2>

        <div className="flex justify-center w-full">
          <Link
            href="/services"
            className="
      inline-flex items-center 
      bg-white 
      md:px-8 px-4 py-2 
      md:mt-10  mt-10 
      rounded-md 
      font-semibold 
      md:text-2xl text-xl
      text-[#007BFF] 
      shadow-[0_0_7px_0_rgba(255,255,255,0.8)]
      transition-all duration-300
      hover:bg-linear-to-r hover:from-[#007BFF] hover:to-[#58C9EC]
      hover:text-white hover:rounded-lg
      active:bg-linear-to-r active:from-[#007BFF] active:to-[#58C9EC]
      active:text-white active:rounded-lg
    "
          >
            <Mail className="w-7 h-7 mr-3  active:text-white" />
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
