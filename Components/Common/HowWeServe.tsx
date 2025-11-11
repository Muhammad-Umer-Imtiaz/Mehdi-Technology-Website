"use client";

import React from "react";

interface HowWeServeService {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string;
}

interface HowWeServeProps {
  title: string;
  description: string;
  services: HowWeServeService[];
}

export default function HowWeServe({
  title,
  description,
  services,
}: HowWeServeProps) {
  if (!services || services.length === 0) return null;

  // Function to split array into rows depending on length
  const getRows = (services: HowWeServeService[]): HowWeServeService[][] => {
    const len = services.length;
    let rows: HowWeServeService[][] = [];

    if (len === 7) {
      rows = [
        services.slice(0, 2), // first row 2
        services.slice(2, 5), // middle row 3
        services.slice(5, 7), // last row 2
      ];
    } else if (len === 5) {
      rows = [
        services.slice(0, 2), // first row 2
        services.slice(2, 5), // second row 3
      ];
    } else if (len <= 3) {
      rows = [services]; // everything in one row
    } else {
      // fallback: split in half
      const mid = Math.ceil(len / 2);
      rows = [services.slice(0, mid), services.slice(mid)];
    }

    return rows;
  };

  const rows = getRows(services);

  return (
    <section className="bg-white text-black py-20 px-6 md:px-28">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-base md:text-xl leading-6 text-center">
          {description}
        </p>
      </div>

      {/* Dynamic Rows */}
      <div className="flex flex-col gap-6">
        {rows.map((row, rowIndex) => {
          // Determine grid columns for this row
          let gridColsClass = "grid-cols-1 md:grid-cols-1";
          if (row.length === 2) gridColsClass = "grid-cols-1 md:grid-cols-2";
          if (row.length === 3) gridColsClass = "grid-cols-1 md:grid-cols-3";

          return (
            <div key={rowIndex} className={`grid gap-6 ${gridColsClass}`}>
              {row.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-[#007BFF] shadow-[0_0_10px_0_rgba(0,123,255,0.8)]
                    px-6 py-6 text-center hover:shadow-xl transition-shadow duration-300
                    ${service.colSpan ? service.colSpan : ""}`}
                >
                  <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p
                    className={`text-black leading-relaxed ${
                      row.length <= 2 ? "text-xl" : "text-lg"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
