"use client";
import { Typeprojects } from "@/data/CommonData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiSolidCategory } from "react-icons/bi";
import { CiLink } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

type CaseStudyCardProps = {
  item: Typeprojects;
};
export default function CaseStudyCard({ item }: CaseStudyCardProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={() => router.push(`/case-study/${item.slug}`)}
      className="w-full bg-white border-2 border-[#007BFF]  shadow-[0_0_20px_0_rgba(0,123,255,0.8)] rounded-2xl cursor-pointer 
                 hover:shadow-lg transition-all duration-300 overflow-hidden "
    >
      <div className="flex flex-col md:flex-row ">
        {/* LEFT SIDE – TEXT */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              {item.title}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mt-1">
              {item.subtitle}
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {item.description}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/case-study/${item.slug}`);
              }}
              className="bg-linear-to-r from-[#58C9EC] to-[#007BFF] text-white px-10 py-3 border-2 border-white shadow-black shadow-md rounded-full font-semibold text-sm hover:bg-[#0088cc] transition-all duration-300 flex items-center gap-2 group my-3"
            >
              Learn more
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* DETAILS LIST */}
          <div className="mt-6 grid grid-cols-2 space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-3">
              <RiContactsFill className="w-6 h-6" />
              <div>
                Client: <span className="block">{item.client}</span>
              </div>
            </p>

            <p className="flex items-center gap-3">
              <BiSolidCategory className="w-6 h-6" />
              <div>
                Category: <span className="block">{item.category}</span>
              </div>
            </p>

            <p className="flex items-center gap-3">
              <IoIosTime className="w-6 h-6" />
              <div>
                Start Date: <span className="block">{item.date}</span>
              </div>
            </p>

            <p className="flex items-center gap-3">
              <CiLink className="w-6 h-6" />
              <div>
                URL: <span className="block">{item.url}</span>
              </div>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto group cursor-pointer overflow-hidden  md:m-4">
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain md:rounded-r-2xl transition-transform duration-700 group-hover:scale-110"
          />

          {/* Animated Overlay */}
          <div
            className="
      absolute inset-0 
      bg-linear-to-t from-black/80 via-black/60 to-transparent
      opacity-0 translate-y-6
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-700 ease-out
      md:rounded-r-2xl
    "
          ></div>

          {/* Slide-up text */}
          <div
            className="
      absolute bottom-0 left-0 w-full 
      px-6 py-4 
      translate-y-10 opacity-0 
      group-hover:translate-y-0 group-hover:opacity-100 
      transition-all duration-700 ease-out
      text-white font-semibold text-lg
    "
          >
            <h2 className="text-4xl md:text-2xl font-bold">{item.title}</h2>
            <p className="text-xl mt-1 md:text-lg">{item.subtitle}</p>

            <p className="mt-4 leading-relaxed text-lg md:text-base">
              {item.description}
            </p>

            <div
              className="
        mt-3
        transition-all duration-500 
        hover:text-blue-400 
        hover:scale-105
      "
            >
              See a Case Study
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
