import React from "react";

export default function NewsLetter() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-[#007BFF]">Subscribe</span> Today to Learn More
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Get the latest updates on technology trends, AI breakthroughs, and
          exclusive Mehdi Technologies insights straight to your inbox.
        </p>

        {/* Email Input Form */}
        <div
          className="flex flex-col sm:flex-row items-center rounded-xl  justify-center gap-4 max-w-2xl mx-auto "
          style={{ boxShadow: "0 6px 6px -2px rgba(0,0,0,6.5)" }}
        >
          <div className="relative flex-1 w-full sm:w-auto">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 mt-1 mr-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full ml-2 outline-none pl-12 pr-4 pt-3 text-2xl rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none border-none transition-colors"
            />
          </div>
          <button
            className="w-full sm:w-auto px-8 py-4 mb-4 mt-3 mx-3 rounded-xl text-gray-700 font-medium "
            style={{ boxShadow: "0 6px 6px -2px rgba(0,0,0,6.5)" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
