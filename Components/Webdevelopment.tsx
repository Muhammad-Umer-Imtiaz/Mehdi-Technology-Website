"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { 
    id: 1, 
    title: "Discovery & Requirements", 
    subtitle: "Understanding your goals, audience, and technical needs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, 
    title: "UI/UX Wireframes & Design", 
    subtitle: "User flows, wireframes and visual language.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, 
    title: "Frontend + Backend Development", 
    subtitle: "Build responsive UI and robust APIs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 4, 
    title: "Testing & Quality Assurance", 
    subtitle: "Manual and automated testing for stability.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 5, 
    title: "Deployment & Launch", 
    subtitle: "Prepare, deploy and go-live with monitoring.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 6, 
    title: "Ongoing Maintenance & Optimization", 
    subtitle: "Performance, security and iterative improvements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

export default function Webdevelopment() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const handleStepClick = (id: number) => {
    setActiveStep(activeStep === id ? 0 : id);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Web Development Process
        </h1>
        <div className="relative inline-block">
          <p className="text-xl text-gray-700 font-medium relative z-10">
            How We Build Your Web Solution
          </p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Step List (Accordion) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const isFirst = step.id === 1;
            
            return (
              <React.Fragment key={step.id}>
                {/* Step Item */}
                <motion.div
                  layout
                  initial={false}
                  animate={{ 
                    backgroundColor: isActive ? "rgba(59, 130, 246, 0.1)" : "transparent",
                    borderColor: isActive ? "#3B82F6" : "#E5E7EB"
                  }}
                  onClick={() => handleStepClick(step.id)}
                  className={`
                    relative p-6 rounded-xl border-2 cursor-pointer
                    transition-all duration-300 hover:border-blue-400
                    ${isFirst ? "bg-blue-50 border-blue-200" : ""}
                    ${isActive ? "shadow-lg" : "hover:shadow-md"}
                  `}
                  whileHover={{ scale: isActive ? 1 : 1.01 }}
                  whileTap={{ scale: 0.995 }}
                >
                  {/* Step Number and Title */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        layout
                        animate={{ 
                          backgroundColor: isActive || isFirst ? "#3B82F6" : "#9CA3AF",
                          color: "white"
                        }}
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                      >
                        {step.id}
                      </motion.div>
                      <h3 className={`text-xl font-bold ${isActive || isFirst ? "text-gray-900" : "text-gray-800"}`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Animated Arrow Icon */}
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-500 text-xl"
                    >
                      →
                    </motion.div>
                  </div>

                  {/* Step Description - Always visible for step 1, animated for others */}
                  <AnimatePresence>
                    {(isActive || isFirst) && (
                      <motion.div
                        key={`desc-${step.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: "auto",
                          transition: { duration: 0.4 }
                        }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <motion.p 
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="mt-4 text-gray-600 text-lg pl-14"
                        >
                          {step.subtitle}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>

                {/* Divider after step 1 */}
                {step.id === 1 && (
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-4 bg-white text-gray-500 text-sm">
                        Next Steps
                      </span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>

        {/* Right Column - Image Preview */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative h-[500px] lg:h-auto"
        >
          <AnimatePresence mode="wait">
            {steps.map((step) => (
              activeStep === step.id && (
                <motion.div
                  key={`image-${step.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* Background Image with Overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${step.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-white"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                          {step.id}
                        </div>
                        <span className="text-blue-300 font-semibold">Step {step.id}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {step.title}
                      </h2>
                      
                      <p className="text-gray-200 text-lg max-w-md">
                        {step.subtitle}
                      </p>
                      
                      {/* Additional Details */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 pt-6 border-t border-white/20"
                      >
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                            <span className="text-gray-300">Duration: {step.id === 1 ? '1-2 weeks' : step.id < 5 ? '2-3 weeks' : 'Ongoing'}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                            <span className="text-gray-300">Team: {step.id < 3 ? 'Design & Strategy' : step.id < 5 ? 'Development' : 'All Teams'}</span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Step Number in Corner */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute right-6 bottom-6 text-white text-9xl font-extrabold"
                  >
                    {step.id}
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Default State (when no step is selected) */}
          {activeStep === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Select a Step
                </h3>
                <p className="text-gray-300">
                  Click on any step in the process to see detailed information
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center space-x-3 mt-12"
      >
        {steps.map((step) => (
          <button
            key={`dot-${step.id}`}
            onClick={() => setActiveStep(step.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStep === step.id 
                ? 'bg-blue-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to step ${step.id}`}
          />
        ))}
      </motion.div>
    </section>
  );
}