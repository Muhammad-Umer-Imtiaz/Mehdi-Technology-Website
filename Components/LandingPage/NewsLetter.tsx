import React from "react";
import { BsSendFill } from "react-icons/bs";

export default function NewsLetter() {
  return (
    <section className="bg-white py-20 2xl:max-w-7xl xl:max-w-5xl mx-auto w-full px-6">
      <div className=" md:text-center text-start">
        <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-[#007BFF]">Subscribe</span> Today to Learn More
        </h2>
        <p className="text-gray-600 text-start md:text-center text-base md:text-xl md:max-w-3xl mx-auto mb-12">
          Get the latest updates on technology trends, AI breakthroughs, and
          exclusive Mehdi Technologies insights straight to your inbox.
        </p>

        {/* Email Input Form */}
        <div className="flex flex-row items-center gap-3 md:px-4 px-1 md:py-3 py-1 rounded- md:rounded-2xl max-w-2xl mx-auto border-2   border-[#007BFF] shadow-[0_0_10px_0_rgba(0,123,255,0.8)]">
          <div className="relative flex-1 ">
            <svg
              className="absolute left-2 top-1/2 -translate-y-1/2 md:w-6 md:h-6 w-5 h-5 text-[#007BFF]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:pl-12 pl-8 pr-0 py-3 md:text-xl text-lg rounded-xl text-gray-700 placeholder-gray-400 border-none outline-none"
            />
          </div>
          <button
            className="
            hidden md:inline
      md:px-6 px-4 md:py-3 py-2
      rounded-xl text-white font-medium 
      bg-[#007BFF] shadow-md
      hover:shadow-md 
      whitespace-nowrap hover:shadow-[#007bffc1] 
      text-sm md:text-base
    "
          >
            Subscribe
          </button>{" "}
          <button
            className="
            inline md:hidden
       p-2
      rounded-full text-white font-medium 
      bg-[#007BFF] shadow-md
   active:shadow-md
      whitespace-nowrap  active:shadow-[#007BFF]
      text-sm md:text-base
    "
          >
            <BsSendFill className="w-4 h-4 " />
          </button>
        </div>
      </div>
    </section>
  );
}
