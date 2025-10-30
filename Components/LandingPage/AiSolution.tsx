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
      className="relative min-h-screen py-16 px-10 lg:px-28 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Achievement.png')" }}
    >
      <div className="text-center mb-8">
        <h4 className="text-[#007BFF] bg-white inline-block border border-[#00000030] px-6 py-1 text-xs md:text-base font-medium rounded-full tracking-[0.5em] uppercase shadow-sm backdrop-blur-sm">
          NEXT-GEN TECH
        </h4>

        <h2 className="text-6xl my-2 font-semibold mt-4 text-white">
          Our <span className="text-[#007BFF]">AI Solution</span>
        </h2>
        <p className="text-center text-lg mt-3 font-extralight text-white">
          We empower businesses with intelligent AI-driven solutions that
          automate processes, enhance decision-making, and deliver <br />{" "}
          smarter digital experiences. Our team builds custom AI systems
          designed to scale with your operations and goals.
        </p>
      </div>

      <div className="flex gap-8 items-start">
        <Image
          src="/AiSolution.png"
          alt="Ai solution Image"
          width={760}
          height={500}
          className="object-contain"
          priority
        />
        <div className="space-y-4 max-w-sm w-full pt-6">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-4 bg-gradient-to-r border rounded-lg border-white from-[#007BFF] to-[#58C9EC] text-white px-5 py-3  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Icon size={32} className="text-white" />

                <span className="font-semibold text-lg md:text-lg">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
