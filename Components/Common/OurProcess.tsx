// 'use client'
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import type { IconType } from "react-icons";
import { useRouter } from "next/navigation";
export interface ProcessStep {
  phase: string;
  duration: string;
  title: string;
  description: string;
  icon: IconType;
  deliverables: string[];
  color: string;
}

interface OurProcessProps {
  title: string;
  // description: string;
  process: ProcessStep[];
}

export default function OurProcess({ title, process }: OurProcessProps) {
  const [activePhase, setActivePhase] = useState<number | null>(null);
const router =useRouter()
  return (
    <section className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide">OUR METHODOLOGY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            {title}
          </h2>
          {/* <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p> */}
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-orange-500 hidden lg:block"></div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActivePhase(index)}
                onMouseLeave={() => setActivePhase(null)}
              >
                <div className="flex items-start gap-6 lg:gap-12">
                  {/* Icon with number */}
                  <div className="relative flex-shrink-0 hidden lg:flex">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 transition-all duration-300 ${activePhase === index ? 'scale-110 shadow-2xl shadow-cyan-500/30' : ''}`}>
                      <div className="w-full h-full rounded-2xl bg-gray-950 flex flex-col items-center justify-center">
                        {(() => {
                          const Icon = item.icon;
                          return <Icon className="w-8 h-8 text-white/90 mb-1" />;
                        })()}
                        <span className="text-xs font-bold text-white/70">STEP {index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile icon */}
                  <div className={`lg:hidden w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-xl bg-gray-950 flex items-center justify-center">
                      {(() => {
                        const Icon = item.icon;
                        return <Icon className="w-6 h-6 text-white/90" />;
                      })()}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 transition-all duration-300 ${activePhase === index ? 'translate-x-2' : ''}`}>
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
                      {/* Phase label */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                          {item.phase}
                        </span>
                        <span className="text-gray-500 text-sm font-medium">{item.duration}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                          Key Deliverables
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <FaCheckCircle className="text-cyan-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector for next item */}
                {index !== process.length - 1 && (
                  <div className="h-8 lg:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-3">Ready to Scale Your Organic Growth?</h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how our proven SEO methodology can drive measurable results for your business.
            </p>
            <button onClick={()=>{router.push("/contact-us")}} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
