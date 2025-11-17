// pages/404.tsx  OR  app/not-found.tsx (wrap with "use client" if using app router)
"use client";

import Link from "next/link";
import React from "react";
import { FiHome } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#f4fbff] to-white px-6">
      <div className="w-full max-w-6xl mx-auto 2xl:max-w-7xl xl:max-w-5xl flex flex-col lg:flex-row items-center gap-12 py-24">
        {/* Left artwork */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg" aria-hidden>
            {/* Soft gradient blob behind illustration */}
            <div
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-90"
              style={{
                background: "linear-gradient(135deg,#007BFF 0%, #00D1FF 100%)",
                filter: "blur(44px)",
                zIndex: 0,
              }}
            />

            {/* Main card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 z-10 overflow-hidden">
              {/* cute SVG 404 illustration (rocket + stars) */}
              <svg
                viewBox="0 0 800 520"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0" stopColor="#007BFF" />
                    <stop offset="1" stopColor="#00D1FF" />
                  </linearGradient>
                </defs>

                <rect x="0" y="0" width="800" height="520" fill="transparent" />
                {/* Rocket */}
                <g transform="translate(120,60) scale(0.8)">
                  <path
                    d="M240 40c0 0-40 8-60 44-20 36-42 90-42 90s-24 8-48 4c-24-4-72-24-72-24s12 68 32 116c20 48 58 76 94 86 36 10 132 18 190-20 58-38 76-80 88-116 12-36 20-110 4-160-16-50-70-60-146-60z"
                    fill="url(#g1)"
                    opacity="0.95"
                  />
                  {/* flame */}
                  <ellipse
                    cx="210"
                    cy="340"
                    rx="80"
                    ry="36"
                    fill="#FFB74D"
                    opacity="0.95"
                  />
                </g>

                {/* Big 404 text */}
                <g transform="translate(420,90)">
                  <text
                    x="0"
                    y="120"
                    fontSize="160"
                    fontWeight="700"
                    fontFamily="Inter, Arial"
                    fill="#0b1226"
                    opacity="0.9"
                  >
                    404
                  </text>
                </g>
              </svg>
            </div>

            {/* subtle shadow / reflection */}
            <div className="mt-6 text-center text-xs text-slate-500">
              Looks like this page took off to the moon 🚀
            </div>
          </div>
        </div>

        {/* Right content & CTAs */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b1226] mb-3">
            Page not found
          </h1>

          <p className="text-lg text-slate-600 mb-6">
            We can’t find the page you’re looking for. It might have moved or
            never existed. Try returning home or contact us and we’ll help you
            out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#007BFF] to-[#00D1FF] text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
            >
              <FiHome className="w-5 h-5" />
              Go to Homepage
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#00D1FF] text-[#007BFF] font-semibold bg-white hover:bg-[#f0fbff] transition-colors"
            >
              <BsTelephoneFill className="w-4 h-4" />
              Contact Support
            </Link>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            Or try using the navigation — we keep everything tidy. If you
            believe this is an error, please{" "}
            <Link href="/#contact" className="text-[#007BFF] hover:underline">
              let us know
            </Link>
            .
          </div>

          <div className="mt-8">
            <ul className="flex flex-wrap gap-3 justify-center lg:justify-start text-xs text-slate-600">
              <li>
                <Link href="/" className="underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#service" className="underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#testimonial" className="underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#blogs" className="underline">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
