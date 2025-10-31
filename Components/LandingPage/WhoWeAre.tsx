"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";

export default function WhoWeAre() {
  const data = [
    {
      id: 1,
      icon: "/WhoWeAre/Web.png",
      title: "Website Development",
      performance: 100,
    },
    {
      id: 2,
      icon: "/WhoWeAre/NFT.png",
      title: "Blockchain Web3.0 & NFT Development",
      performance: 100,
    },
    {
      id: 3,
      icon: "/WhoWeAre/App.png",
      title: "Mobile App Development",
      performance: 100,
    },
    {
      id: 4,
      icon: "/WhoWeAre/Chatbot.png",
      title: "AI Chatbot Development",
      performance: 100,
    },
    {
      id: 5,
      icon: "/WhoWeAre/UIUX.png",
      title: "UI/UX Designing",
      performance: 100,
    },
    {
      id: 6,
      icon: "/WhoWeAre/SEO.png",
      title: "SEO & Digital Marketing",
      performance: 100,
    },
  ];

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-between py-16 px-10 lg:px-28 gap-10"
    >
      {/* Left side image with circular backdrop */}
      <div className="relative flex-shrink-0">
        <div className="absolute -z-10 bg-[#00BFFF20] rounded-full w-[420px] h-[420px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
        <Image
          src="/WhoWeAre.png"
          alt="Who we are Image"
          width={550}
          height={500}
          className="relative z-10"
        />
      </div>

      {/* Right content */}
      <div className="max-w-2xl ">
        <h4 className="text-[#007BFF] border border-[#00000030] px-6 py-1 inline-block font-extralight rounded-full   tracking-widest">
          WHO WE ARE
        </h4>

        <h2 className="text-4xl md:text-6xl font-bold mt-2">
          Your partner in <span className="text-[#007BFF] mr-2">Software</span>
          excellence
        </h2>

        <p className="text-gray-600 mt-1 text-base">
          We specialize in creating custom web and mobile applications. With
          extensive experience in website design and development, we offer a
          full range of services including web and app design, development,
          testing, deployment, and ongoing maintenance.
        </p>

        {/* Services list */}
        <div className="space-y-1 pt-4">
          {data.map((item) => (
            <AnimatedBar key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedBar({
  item,
}: {
  item: { icon: string; title: string; performance: number };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const numberControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: "100%",
        transition: { duration: 1.8, ease: "easeOut" },
      });
      numberControls.start({
        transition: { duration: 1.8, ease: "easeOut" },
      });
    }
  }, [isInView, controls, numberControls, item.performance]);

  return (
    <div ref={ref} className="py-2">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-3">
          <Image
            src={item.icon}
            alt={item.title}
            width={28}
            height={28}
            className="object-contain"
          />
          <h4 className="text-base font-semibold">{item.title}</h4>
        </div>
        <div className="flex items-center gap-2">
          {/* Animated bar */}
          <div className="relative w-40 border-3  h-4 rounded-full overflow-hidden">
            <div className="absolute inset-0 h-4 bg-gradient-to-r from-[#A020F0]/30 to-[#00D1FF]/30" />
            <motion.div
              className="absolute inset-y-0 left-0 h-4 bg-gradient-to-r from-[#A020F0] to-[#00D1FF]"
              initial={{ width: "0%" }}
              animate={controls}
            />
          </div>

          <p className="text-sm">
            <CountUp
              end={item.performance}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            %
          </p>
        </div>
      </div>

      {/* Dual-layer progress line */}
      <div className="relative w-full h-0.5 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-white" />
      </div>
    </div>
  );
}
