"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp, Rocket, Zap } from "lucide-react";
import type { JSX } from "react";

type Particle = {
  id: number;
  angle: number;
};

export default function ScrollToTop(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createParticles = () => {
    const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      angle: (i * 360) / 8,
    }));
    setParticles(newParticles);
    // clear after animation (1s)
    setTimeout(() => setParticles([]), 1000);
  };

  const goToTop = () => {
    setIsClicked(true);
    createParticles();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setIsClicked(false), 600);
  };

  const getIconForProgress = () => {
    if (isClicked) return <Zap className="w-7 h-7 text-white animate-bounce" />;
    if (isHovered) return <Rocket className="w-7 h-7 text-white" />;
    return <ArrowUp className="w-7 h-7 text-white" />;
  };

  // SVG progress circle math
  const R = 28;
  const C = 2 * Math.PI * R;
  const dashOffset = C - (scrollProgress / 100) * C;

  return (
    <>
      {/* Enhanced Interactive Scroll to Top Button */}
      <div
        className={`fixed bottom-8 right-8 z-[999] transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-16 scale-50 pointer-events-none"
        }`}
      >
        <button
          onClick={goToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
          aria-label="Scroll to top"
          type="button"
        >
          {/* Animated particles on click */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#188FFB] rounded-full animate-ping"
              style={{
                transform: `translate(-50%, -50%) rotate(${particle.angle}deg) translateY(-40px)`,
                animationDuration: "1s",
              }}
            />
          ))}

          {/* Rotating glow effect */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#007BFF] via-[#188FFB] to-[#007BFF] blur-xl transition-all duration-300 ${
              isHovered ? "opacity-100 animate-spin" : "opacity-60"
            }`}
            style={{ animationDuration: "3s" }}
            aria-hidden
          />

          {/* Pulsing ring on hover */}
          {isHovered && (
            <div
              className="absolute inset-0 rounded-full border-2 border-[#188FFB] animate-ping opacity-75"
              aria-hidden
            />
          )}

          {/* Main button container */}
          <div
            className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-[#007BFF] via-[#188FFB] to-[#007BFF] p-[2px] shadow-2xl transition-all duration-300 ${
              isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
            } ${isClicked ? "scale-95" : ""}`}
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              {/* Icon with enhanced transitions */}
              <div
                className={`transition-all duration-500 ${
                  isHovered ? "rotate-0 scale-110" : "rotate-180"
                } ${isClicked ? "scale-150" : ""}`}
              >
                {getIconForProgress()}
              </div>

              {/* Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64" aria-hidden>
                {/* Background ring */}
                <circle
                  cx="32"
                  cy="32"
                  r={R}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="3"
                  fill="none"
                />
                {/* Progress ring with gradient */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#007BFF" />
                    <stop offset="50%" stopColor="#188FFB" />
                    <stop offset="100%" stopColor="#007BFF" />
                  </linearGradient>
                </defs>
                <circle
                  cx="32"
                  cy="32"
                  r={R}
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={C}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                  style={{ filter: "drop-shadow(0 0 8px rgba(24, 143, 251, 0.8))" }}
                />
              </svg>

              {/* Sparkle effect on hover */}
              {isHovered && (
                <>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping" aria-hidden />
                  <div
                    className="absolute bottom-3 left-3 w-1 h-1 bg-white rounded-full animate-ping"
                    style={{ animationDelay: "0.2s" }}
                    aria-hidden
                  />
                  <div  
                    className="absolute top-4 left-2 w-1 h-1 bg-white rounded-full animate-ping"
                    style={{ animationDelay: "0.4s" }}
                    aria-hidden
                  />
                </>
              )}
            </div>
          </div>

          {/* Enhanced tooltip with animation */}
          <div
            className={`absolute -top-14 left-1/2 -translate-x-1/2 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
            }`}
            role="status"
            aria-hidden={!isHovered}
          >
            <div className="relative bg-black border-2 border-[#007BFF] text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#188FFB] rounded-full animate-pulse" />
                <span>{Math.round(scrollProgress)}% scrolled</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r-2 border-b-2 border-[#007BFF] rotate-45" />
            </div>
          </div>

          {/* Ripple effect on click */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" aria-hidden>
            <div
              className={`absolute inset-0 bg-[#188FFB] rounded-full transition-all duration-500 ${
                isClicked ? "scale-150 opacity-0" : "scale-0 opacity-50"
              }`}
            />
          </div>

          {/* Progress percentage indicator ring */}
          {scrollProgress > 50 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#007BFF] border-2 border-black rounded-full flex items-center justify-center animate-bounce" aria-hidden>
              <Zap className="w-3 h-3 text-white" />
            </div>
          )} 
        </button>
      </div>
    </>
  );
}
