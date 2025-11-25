"use client";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaPhp,
  FaLaravel,
  FaPython,
  FaFigma,
  FaJava,
  FaRobot,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiDjango,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiOpenai,
  SiSolidity,
  SiEthereum,
  SiWeb3Dotjs,
  SiIpfs,
  SiFlask,
  SiFastapi,
  SiSupabase,
  SiN8N,
  SiTensorflow,
  SiPytorch,
  SiChainlink,
  SiBinance,
  SiSolana,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiCanva,
  SiLangchain,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Category = "Web" | "Mobile" | "AI" | "Blockchain" | "UI/UX";

interface TechItem {
  icon: React.ComponentType<{ size?: number; color?: string }> | null;
  name: string;
  color: string;
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Category>("Web");

  const techStacks: Record<Category, TechItem[]> = {
    Web: [
      { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
      { icon: FaCss3Alt, name: "CSS 3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: FaReact, name: "React.js", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: FaNodeJs, name: "Node.js", color: "#8CC84B" },
      { icon: SiExpress, name: "Express.js", color: "#000000" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
      { icon: FaWordpress, name: "WordPress", color: "#21759B" },
      { icon: FaPhp, name: "PHP", color: "#777BB4" },
      { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
      { icon: SiDjango, name: "Django", color: "#092E20" },
      { icon: SiFlask, name: "Flask", color: "#000000" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
    ],
    Mobile: [
      { icon: SiFlutter, name: "Flutter", color: "#02569B" },
      { icon: TbBrandReactNative, name: "React Native", color: "#61DAFB" },
      { icon: SiSwift, name: "Swift", color: "#FA7343" },
      { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
      { icon: FaJava, name: "Java", color: "#007396" },
    ],
    AI: [
      { icon: FaPython, name: "Python", color: "#3776AB" },
      { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
      { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
      { icon: SiOpenai, name: "OpenAI", color: "#412991" },
      { icon: null, name: "ADK (Agent Dev Kit)", color: "#00C3FF" }, // Image will be used
      { icon: SiN8N, name: "n8n", color: "#E76645" },
      { icon: FaRobot, name: "LLMs", color: "#9C27B0" },
      { icon: SiLangchain, name: "LangChain", color: "#2A5ADA" },
    ],
    Blockchain: [
      { icon: SiSolidity, name: "Solidity", color: "#363636" },
      { icon: SiEthereum, name: "Ethereum", color: "#3C3C3D" },
      { icon: SiWeb3Dotjs, name: "Web3.js", color: "#F16822" },
      { icon: SiIpfs, name: "IPFS", color: "#65C2CB" },
      { icon: SiBinance, name: "BNB Chain", color: "#F3BA2F" },
      { icon: SiSolana, name: "Solana", color: "#00FFA3" },
    ],
    "UI/UX": [
      { icon: FaFigma, name: "Figma", color: "#F24E1E" },
      { icon: SiCanva, name: "Canva", color: "#00C4CC" },
      { icon: SiAdobeillustrator, name: "Illustrator", color: "#FF9A00" },
      { icon: SiAdobeaftereffects, name: "After Effects", color: "#9999FF" },
    ],
  };

  const categories: Category[] = ["Web", "Mobile", "AI", "Blockchain", "UI/UX"];

  return (
    <section
      id="tech-stack"
      className="mx-auto py-16 2xl:px-4 px-4 xl:px-28 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:text-center mb-16">
          <h4 className="text-[#007BFF] bg-white inline-block border-2 border-gray-500 px-6 py-1.5 text-base font-medium rounded-full tracking-[0.4em] mb-4">
            OUR FOUNDATION
          </h4>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Tech Stack & Tools
          </h2>
          <p className="text-gray-600 text-base md:text-lg mx-auto">
            We leverage modern technologies, frameworks, and tools to craft
            scalable solutions
            <br className="hidden md:block" /> tailored to every industry.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] gap-8 items-start">
          {/* Left Side - Category Buttons */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full font-semibold md:text-2xl text-base md:py-4 py-1.5 md:px-8 px-1.5 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#007BFF] text-white shadow-xl"
                    : "bg-white text-black border-2 border-gray-300 hover:bg-[#58C9EC] hover:text-3xl transition-all ease-in shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Side - Tech Stack Icons */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8 gap-y-12">
            {techStacks[activeCategory].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-20 h-20 flex items-center justify-center transition-transform hover:scale-110">
                    {Icon ? (
                      <Icon size={64} color={tech.color} />
                    ) : (
                      <img
                        src="/ADK.png"
                        alt={tech.name}
                        className="w-20 h-20 object-contain"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
