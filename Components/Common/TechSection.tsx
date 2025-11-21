import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ElementType;
  color?: string;
}

interface TechSectionProps {
  title: string;
  highlight?: string;
  technologies?: TechItem[];
  data?: {
    des?: string;
    points?: string[];
    Title?: string;
  };
}

export default function TechSection({
  title,
  highlight,
  technologies = [],
  data = {},
}: TechSectionProps) {
  return (
    <section className="bg-white py-20 px-5 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl 2xl:text-6xl xl:text-6xl font-extrabold text-center mb-6">
        {title}{" "}
        {highlight && <span className="text-[#007BFF]">{highlight}</span>}
      </h2>
      {/* Tech Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-center mx-auto text-center">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 transition-transform hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-20 h-20 flex items-center justify-center mx-auto">
                <Icon size={64} color={tech.color} />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-start md:mt-40 mt-10">
        <h2 className="text-2xl 2xl:text-4xl xl:text-4xl mb-6 font-medium ">
          {data.Title}{" "}
        </h2>
        {/* Description */}
        {data.des && (
          <p
            className="text-black text-xl mb-6"
            // style={{ wordSpacing: "1rem" }}
          >
            {data.des}
          </p>
        )}

        {/* Points */}
        {data.points && data.points.length > 0 && (
          <ul className="text-black max-w-2xl text-lg  mb-12 space-y-2 ">
            {data.points.map((point, idx) => (
              <li key={idx}>• {point}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
