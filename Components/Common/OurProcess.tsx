// components/WebProcessAccordion.tsx
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

interface WebProcessAccordionProps {
  title?: string;
  process: Step[];
}
export default function WebProcess({title,process}: WebProcessAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-bold text-center mb-16">{title}</h1>
        {/* <p className="text-2xl md:text-3xl text-center text-blue-600 font-medium mb-16">How We Build Your Web Solution</p> */}

        {/* Mobile: Vertical Stack | Desktop: Horizontal Row */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
          {process.map((step, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
                className="relative cursor-pointer w-full  lg:w-auto "
                animate={{
                  width: isOpen ? (window.innerWidth < 1024 ? '100%' : 460) : window.innerWidth < 1024 ? '100%' : 110,
                  height: window.innerWidth < 1024 ? (isOpen ? 280 : 70) : 500,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl bg-linear-to-t from-[#003C7D] to-[#58C9EC]"
                  initial={false}
                  animate={{
                    boxShadow: isOpen
                      ? "0 25px 60px rgba(0,0,0,0.35), 0 0 0 5px rgba(59,130,246,0.4)"
                      : "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ height: '100%' }}
                >
                  {/* Background Image when open */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                        {/* <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/90" /> */}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content when open */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-0 left-0 right-0 p-10 text-white z-10"
                      >
                        <h3 className="text-3xl font-bold mb-3 leading-tight">{step.title}</h3>
                        <p className="text-lg leading-relaxed opacity-95">{step.subtitle}</p>
                        <span className="absolute bottom-1 right-6 text-[#838180] text-7xl font-bold opacity-70">
                          {step.id}
                        </span>
                      </motion.div>
                      
                    )}
                  </AnimatePresence>
                  {/* <motion.div
                    className="md:hidden absolute bottom-6 right-1 z-20"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ChevronDown className="w-6 h-6 text-white drop-shadow-lg" />
                  </motion.div> */}

                  {/* Closed State - Mobile & Desktop */}
                        {!isOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.9 }}
    className="absolute inset-0 w-full h-full z-10 flex items-end justify-center md:items-center md:justify-center"
  >
    <span className="text-white text-base md:text-xl font-black text-center px-4 whitespace-nowrap pb-6 md:pb-0 md:-rotate-90 origin-center">
        <span>{step.id}-</span>{" "}
      {step.title}
    </span>
  </motion.div>
)}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}