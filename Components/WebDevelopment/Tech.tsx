"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaPhp,
  FaLaravel,
  FaGithub,
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
  SiCodeigniter,
} from "react-icons/si";

export default function Tech() {
  const Web = [
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
    { icon: FaGithub, name: "GitHub", color: "#181717" },
    { icon: FaWordpress, name: "WordPress", color: "#21759B" },
    { icon: FaPhp, name: "PHP", color: "#777BB4" },
    { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: SiDjango, name: "Django", color: "#092E20" },
    // { icon: SiCodeigniter, name: "CodeIgniter", color: "#EE4323" },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 2xl:px-20 xl:px-28">
      <h2 className="text-3xl 2xl:text-7xl xl:text-6xl font-extrabold text-center mb-12">
        Website <span className="text-[#007BFF]">Development</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 gap-y-12 justify-items-center">
        {Web.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 transition-transform hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Icon size={64} color={tech.color} />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
