"use client";

import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiBinance,
  SiEthereum,
  SiExpress,
  SiIpfs,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiSolidity,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";

export default function Tech() {
  const Blockchain = [
    { icon: SiSolidity, name: "Solidity", color: "#363636" },
    { icon: SiEthereum, name: "Ethereum", color: "#3C3C3D" },
    { icon: SiWeb3Dotjs, name: "Web3.js", color: "#F16822" },
    { icon: SiIpfs, name: "IPFS", color: "#65C2CB" },
    { icon: SiBinance, name: "BNB Chain", color: "#F3BA2F" },
    //   { icon: FaReact, name: "React.js", color: "#61DAFB" },
    //   { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    //   { icon: FaNodeJs, name: "Node.js", color: "#8CC84B" },
    //   { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    //   { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    //   { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    //   { icon: SiExpress, name: "Express.js", color: "#000000" },
    //   { icon: FaGithub, name: "GitHub", color: "#181717" },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 2xl:px-20 xl:px-28">
      <h2 className="text-3xl 2xl:text-7xl xl:text-6xl font-extrabold text-center mb-12">
        Website <span className="text-[#007BFF]">Development</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mx-40 gap-y-12 justify-center items-center">
        {Blockchain.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
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
