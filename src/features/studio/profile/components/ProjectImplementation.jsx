"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectImplementation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full">
        {/* Section Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-[32px] font-medium mb-12 text-gray-900 leading-tight"
        >
          Project Implementation at OFA
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Row 1 - Image */}
          <motion.div
            className="relative h-80 overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-[#4A7C9E]">
              <div className="absolute inset-0 bg-linear-to-br from-[#4A7C9E] to-[#5A8CAE]" />
              <div className="absolute top-0 right-0 w-3/4 h-1/3 bg-white" />
              <div className="absolute top-1/3 right-0 w-2/3 h-1/4 bg-gray-200" />
              <div className="absolute bottom-1/4 left-0 right-0 h-1/4 bg-gray-300" />
              <div className="absolute bottom-0 left-0 w-1/4 h-1/5 bg-[#8B6F47]" />
            </div>
          </motion.div>

          {/* Step Card Component */}
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="border-2 border-gray-900 p-6 sm:p-8 flex flex-col justify-between h-80"
              initial={{ opacity: 0, x: index < 3 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="text-4xl sm:text-5xl font-light mb-6 sm:mb-8">
                {step.number}
              </div>
              <div>
                <h2
                  className="text-lg sm:text-xl md:text-[20px] font-normal mb-3 sm:mb-4 leading-tight text-gray-900"
                >
                  {step.title}
                </h2>
                <p
                  className="text-sm sm:text-base md:text-[16px] font-normal text-gray-700 leading-snug"
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom Image */}
          <motion.div
            className="relative h-80 overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-[#7AB5C9] to-[#5A9FB3]">
              <div className="absolute bottom-0 left-1/4 w-1/4 h-3/4 bg-[#4A7B9E] opacity-80" />
              <div className="absolute bottom-0 left-1/2 w-1/4 h-2/3 bg-[#3A6B8E] opacity-70" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Step Data for cleaner markup
const steps = [
  {
    number: "01",
    title: "CLIENT\nONBOARDING",
    description:
      "Once you contact us, we’ll schedule an initial meeting to understand your needs, goals, and vision for the project.",
  },
  {
    number: "02",
    title: "SITE\nASSESSMENT",
    description:
      "We evaluate your site conditions and requirements to guide early concept development.",
  },
  {
    number: "03",
    title: "DESIGN\nDEVELOPMENT",
    description:
      "Based on discussions and site analysis, we create design concepts that bring your vision to life.",
  },
  {
    number: "04",
    title: "DESIGN\nREFINEMENT",
    description:
      "We refine the chosen concept with detailed layouts, materials, and consultant coordination.",
  },
  {
    number: "05",
    title: "CONSTRUCTION\nDOCUMENTATION",
    description:
      "Our team prepares all technical drawings and documents for permits, budgeting, and execution.",
  },
  {
    number: "06",
    title: "CONSTRUCTION\nOVERSIGHT",
    description:
      "We stay actively involved during construction to ensure smooth progress and design accuracy.",
  },
];

export default ProjectImplementation;