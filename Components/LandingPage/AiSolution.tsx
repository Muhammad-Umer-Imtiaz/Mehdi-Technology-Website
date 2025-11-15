import { Bot, Zap, Brain, Cloud, MessageSquare, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function AiSolution() {
  const solutions = [
    { icon: Bot, label: "AI Chatbot Development" },
    { icon: Zap, label: "AI Automation Systems" },
    { icon: Brain, label: "Predictive AI Models" },
    { icon: Cloud, label: "AI SaaS Applications" },
    { icon: MessageSquare, label: "ChatGPT / Gemini Integrations" },
    { icon: BarChart3, label: "Business Intelligence & Analytics" },
  ];

  return (
    <section
      className="relative min-h-screen py-16   w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/AchievementBG.png')" }}
    >
      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="relative z-10 md:text-center mb-12">
          <h4 className="text-[#007BFF] bg-white inline-block border border-[#00000030] px-6 py-1 text-sm md:text-base font-medium rounded-full tracking-[0.5em] uppercase shadow-sm backdrop-blur-sm">
            NEXT-GEN TECH
          </h4>

          <h2 className="text-5xl md:text-6xl my-4 font-semibold text-white drop-shadow-lg">
            Our <span className="text-[#007BFF]">AI Solution</span>
          </h2>

          <p className="text-white text-lg font-extralight  leading-relaxed drop-shadow-md">
            We empower businesses with intelligent AI-driven solutions that
            automate processes, enhance decision-making, and deliver
            <br className="hidden md:block" /> smarter digital experiences. Our
            team builds custom AI systems designed to scale with your operations
            and goals.
          </p>
        </div>

        {/* Image + Solutions */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 2xl:gap-12 xl:gap-8">
          <div className="">
            <Image
              src="/AiSolution.png"
              alt="AI Solution Image"
              width={760}
              height={500}
              className="object-contain"
              priority
            />
          </div>

          <div className="flex-1 flex flex-col space-y-4 max-w-sm w-full">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-gradient-to-r from-[#007BFF] to-[#58C9EC] border border-white rounded-lg text-white px-5 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 cursor-pointer"
                >
                  <Icon size={32} className="text-white" />
                  <span className="font-semibold text-base md:text-lg">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Header */}
    </section>
  );
}
