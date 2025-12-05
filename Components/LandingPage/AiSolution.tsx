import { Bot, Zap, Brain, Cloud, MessageSquare, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function AiSolution() {
  const solutions = [
    { icon: Bot, label: "AI Chatbot Development", href: "/ai-chatbot" },
    { icon: Zap, label: "AI Automation Systems", href: "/ai-automation" },
    {
      icon: Brain,
      label: "Predictive AI Models",
      href: "/predictive-ai-model",
    },
    {
      icon: Cloud,
      label: "AI SaaS Applications",
      href: "/ai-saas-application",
    },
    {
      icon: MessageSquare,
      label: "ChatGPT / Gemini Integrations",
      href: "/chatgpt-gemini-integration",
    },
    {
      icon: BarChart3,
      label: "Business Intelligence & Analytics",
      href: "/business-intelligence-and-analytics",
    },
  ];

  return (
    <section
      className="relative min-h-screen py-16 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/BackgroundPictures/LandingPageBG/AiSolutionBG.webp')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 md:text-center mb-12">
          <h2 className="text-[#007BFF] bg-white inline-block border border-[#00000030] px-6 py-1 text-sm md:text-base font-medium rounded-full tracking-[0.5em] uppercase shadow-sm backdrop-blur-sm">
            NEXT-GEN TECH
          </h2>

          <h2 className="text-5xl md:text-6xl my-4 font-semibold text-white drop-shadow-lg">
            Our <span className="text-[#007BFF]">AI Solution</span>
          </h2>

          <p className="text-white text-lg font-extralight leading-relaxed drop-shadow-md">
            We empower businesses with intelligent AI-driven solutions that
            automate processes, enhance decision-making, and deliver
            <br className="hidden md:block" /> smarter digital experiences. Our
            team builds custom AI systems designed to scale with your operations
            and goals.
          </p>
        </div>

        {/* Image + Solutions */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 2xl:gap-12 xl:gap-8">
          <div>
            <video
              className="border-4 border-[#007BFF] rounded-3xl shadow-[0_0_25px_5px_#58C9EC]"
              width={700}
              height={350}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              src="https://res.cloudinary.com/dezxyrcnm/video/upload/q_auto,f_auto/v1763798204/Video_oyr9i6.mp4"
              style={{ pointerEvents: "none" }} // prevent pause by click
            />
          </div>

          <div className="flex-1 flex flex-col space-y-4  w-full">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.href} passHref>
                  <div className="group flex items-center gap-4 bg-linear-to-r from-[#007BFF] to-[#58C9EC] border border-white rounded-lg text-white px-5 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 cursor-pointer">
                    <Icon size={32} className="text-white" />
                    <span className="font-semibold text-base md:text-lg">
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
