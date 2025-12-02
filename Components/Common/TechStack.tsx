"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";

export type TechPrimitive = string;

export interface TechObject {
  name: string;
  icon?: IconType | React.ComponentType<any>;
  color?: string;
}

export type TechItem = TechPrimitive | TechObject;

export type TechnologiesProp = Record<string, TechItem[]>;

interface TechSectionProps {
  title?: string;
  highlight?: string;
  technologies: TechnologiesProp;
  initialCategory?: string;
  // optional render override for each tech item (if you want icons later)
  renderTech?: (tech: TechObject | string) => React.ReactNode;
}

export default function TechSection({
  title = "Tech Stack",
  highlight = "",
  technologies,
  initialCategory,
  renderTech,
}: TechSectionProps) {
  const categories = useMemo(() => Object.keys(technologies), [technologies]);

  // pick a valid default category
  const resolvedDefault = useMemo(() => {
    if (initialCategory && categories.includes(initialCategory)) return initialCategory;
    return categories[0] ?? "";
  }, [initialCategory, categories]);

  const [activeCategory, setActiveCategory] = useState<string>(resolvedDefault);

  // Keep activeCategory in sync when props change
  useEffect(() => {
    if (!categories.length) {
      setActiveCategory("");
      return;
    }

    if (initialCategory && categories.includes(initialCategory)) {
      setActiveCategory(initialCategory);
      return;
    }

    if (!categories.includes(activeCategory)) {
      setActiveCategory(categories[0]);
    }
    // Note: stringify used to detect changes to the object shape
  }, [technologies, initialCategory, categories.join(",")]);

  if (!categories.length) return null;

  const items: TechItem[] = technologies[activeCategory] ?? [];

  return (
    <section id="tech-section" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="md:text-center mb-16">
         
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
           {title}

          </h2>
         
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
          {/* Left - category buttons */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={`w-full font-semibold md:text-xl text-base md:py-4 py-1.5 md:px-8 px-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#007BFF] text-white shadow-xl"
                    : "bg-white text-black border-2 border-gray-300 hover:bg-[#58C9EC] hover:text-2xl transition-all ease-in shadow-md"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right - tech items */}
    
            

           <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8 gap-y-12">
  {items.length > 0 ? (
    items.map((raw, idx) => {
      const isString = typeof raw === "string";
      const name = isString ? raw : raw.name;
      const Icon = isString ? undefined : raw.icon;
      const color = isString ? undefined : raw.color;
      const key = `${activeCategory}::${name}::${idx}`;

      return (
        <div
          key={key}
          className="flex flex-col items-center gap-3 opacity-0 animate-fadeIn"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          <div className="w-20 h-20 flex items-center justify-center transition-transform hover:scale-110">
            {Icon ? (
              // Render the icon component
              <Icon size={64} color={color ?? undefined} />
            ) : (
              // fallback for string or missing icon (e.g., ADK)
              <img
                src="/ADK.png"
                alt={name}
                className="w-20 h-20 object-contain"
              />
            )}
          </div>
          <span className="text-sm font-medium text-gray-700 text-center">
            {name}
          </span>
        </div>
      );
    })
  ) : (
    <div className="text-gray-500">No data for this category</div>
  )}
</div>
          </div>
        </div>
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
