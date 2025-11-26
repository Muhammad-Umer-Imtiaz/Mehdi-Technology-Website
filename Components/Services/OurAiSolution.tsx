"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Zap, Brain, Cloud, MessageSquare, BarChart3 } from "lucide-react";

export default function OurAiSolution() {
  const solutions = [
    {
      icon: Bot,
      label: "AI Chatbot Development",
      href: "/ai-chatbot",
      image: "/Services/AiSolution/AiChatbot.webp",
    },
    {
      icon: Zap,
      label: "AI Automation Systems",
      href: "/ai-automation",
      image: "/Services/AiSolution/AiAutomation.webp",
    },
    {
      icon: Brain,
      label: "Predictive AI Models",
      href: "/predictive-ai-model",
      image: "/Services/AiSolution/PredictiveAi.webp",
    },
    {
      icon: Cloud,
      label: "AI SaaS Applications",
      href: "/ai-saas-application",
      image: "/Services/AiSolution/AiSAAS.webp",
    },
    {
      icon: MessageSquare,
      label: "LLM Integrations",
      href: "/chatgpt-gemini-integration",
      image: "/Services/AiSolution/LLMIntegration.webp",
    },
    {
      icon: BarChart3,
      label: "Business Intelligence & Analytics",
      href: "/business-intelligence-and-analytics",
      image: "/Services/AiSolution/BuisnessIntelligence.webp",
    },
  ];

  // Animations
  const imageVariants = {
    rest: { scale: 1, filter: "blur(0px)" },
    hover: { scale: 1.5, filter: "blur(10px)" },
  };

  const overlayVariants = {
    rest: { opacity: 0, y: 60 },
    hover: { opacity: 1, y: 0 },
  };

  const textVariants = {
    rest: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: -40 },
  };

  return (
    <section className="mx-auto py-12 px-5 2xl:max-w-7xl">
      {/* Header */}
      <div className="md:text-center text-start mb-8">
        <h4 className="text-[#007BFF] inline-block border border-[#00000030] px-6 py-1 text-sm font-light rounded-full tracking-[0.5em]">
          NEXT-GEN TECH
        </h4>
        <h2 className="md:text-6xl text-3xl my-2 font-semibold mt-4">
          OUR <span className="text-[#007BFF]">AI SOLUTION</span>
        </h2>
        <p className="mt-3 text-gray-600 md:max-w-5xl mx-auto">
          We empower businesses with intelligent AI-driven solutions that
          automate processes, enhance decision-making, and deliver smarter
          digital experiences. Our team builds custom AI systems designed to
          scale with your operations and goals.
        </p>
      </div>

      {/* SEO-friendly links grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {solutions.map((item, index) => (
          <Link key={index} href={item.href} className="block group">
            <motion.div
              className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden rounded-2xl cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* BG Image */}
              <motion.div
                className="absolute inset-0"
                variants={imageVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Black overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

              {/* Text OUT */}
              <motion.div
                className="absolute bottom-6 left-0 right-0 text-center"
                variants={textVariants}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white text-2xl font-semibold">
                  {item.label}
                </p>
              </motion.div>

              {/* Hover overlay IN */}
              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
              >
                <div className="flex flex-col items-center justify-center px-10 py-4 rounded-xl w-full h-full">
                  <item.icon className="text-[#007BFF] mb-4" size={70} />
                  <p className="text-5xl font-semibold text-center">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
