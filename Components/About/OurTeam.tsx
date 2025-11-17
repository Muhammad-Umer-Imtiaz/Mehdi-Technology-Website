"use client";

import Image from "next/image";
import React from "react";

const team = [
  {
    name: "Syed Muntazir Mehdi - CEO",
    img: "/OurTeam/OurTeam1.png",
  },
  {
    name: "Arslan Mumtaz - CTO",
    img: "/OurTeam/OurTeam2.png",
  },
  {
    name: "Ahmad Raza - HR Manager",
    img: "/OurTeam/OurTeam3.png",
  },
];

export default function OurTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto 2xl:max-w-7xl xl:max-w-5xl px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Our <span className="text-[#007BFF]">Team</span>
          </h2>
          <p className="mt-4  mx-auto text-gray-600">
            Meet the passionate team behind <strong>Mehdi Technologies</strong>,
            working together to deliver innovative and reliable digital
            solutions.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {team.map((member, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
              role="figure"
              aria-label={member.name}
            >
              {/* Blue outline + glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow:
                    "0 8px 24px rgba(2,132,255,0.12), 0 0 0 4px rgba(2,132,255,0.06)",
                //   border: "1px solid rgba(2,132,255,0.9)",
                }}
              />

              {/* Image */}
              <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[530px]">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority={idx < 2}
                />
              </div>

              {/* Bottom gradient overlay with name/title */}
              {/* <div className="absolute left-0 right-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {member.name}
                </h3>
              </div> */}

              {/* Hover effect: subtle lift & stronger glow */}
              <style jsx>{`
                .group:hover {
                  transform: translateY(-6px);
                }
                .group:hover .absolute[inset-0] {
                  box-shadow: 0 18px 36px rgba(2, 132, 255, 0.18),
                    0 0 0 6px rgba(2, 132, 255, 0.08);
                }
                article {
                  transition: transform 240ms ease, box-shadow 240ms ease;
                }
              `}</style>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
