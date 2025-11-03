"use client";
import React, { useState, useEffect } from "react";

export default function BreakpointDebugger() {
  const [width, setWidth] = useState<number>(0);
  const [breakpoint, setBreakpoint] = useState<string>("");

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      setWidth(w);

      // Tailwind default breakpoints
      if (w >= 1536) setBreakpoint("2XL"); // ≥1536px
      else if (w >= 1280) setBreakpoint("XL"); // ≥1280px
      else if (w >= 1024) setBreakpoint("LG"); // ≥1024px
      else if (w >= 768) setBreakpoint("MD"); // ≥768px
      else if (w >= 640) setBreakpoint("SM"); // ≥640px
      else setBreakpoint("XS"); // <640px
    };

    updateWidth(); // Run once on mount
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      className="
        fixed bottom-5 right-5 z-[9999]
        backdrop-blur-xl bg-white/10
        border border-white/20
        rounded-2xl shadow-[0_0_15px_2px_rgba(185,232,16,0.6)]
        px-6 py-3 text-white font-mono text-sm
        transition-all duration-300
        hover:shadow-[0_0_25px_5px_rgba(88,201,236,0.8)]
      "
    >
      <div>
        <span className="text-[#58C9EC] font-bold">Width:</span> {width}px
      </div>
      <div>
        <span className="text-[#B9E810] font-bold">Breakpoint:</span>{" "}
        {breakpoint}
      </div>
    </div>
  );
}
