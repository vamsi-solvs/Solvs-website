import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] overflow-hidden">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight text-center md:text-left">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                OFFICE
              </motion.span>
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                OF
              </motion.span>
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                ARCHITECTURE
              </motion.span>
            </h1>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full md:w-1/2 h-[40vh] md:h-[60vh] z-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/landingPage/Balehonnur.png"
            alt="Architectural Office"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Content Section 1 – Right aligned, slides in from right */}
      <ContentSection align="right">
        <p className="text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Tellus vitae consectetur metus
          integer amet ut. Amet sollicitudin risus eget facilisi aliquam purus
          dictum sed at. Malesuada nunc tristique id vestibulum eu. Lorem nulla
          eget pellentesque cursus nulla. Mi elit aliquet vitae vel dolor in.
          Elit ornare blandit ac porttitor sit elit. Mattis et tempus pretium
          elementum integer amet amet urna. Eget id tellus orci amet platea
          arcu. Pulvinar malesuada amet velit lorem volutpat ligula ultricies.
          Et volutpat leo varius at massa turpis amet magna. Semper eleifend
          rhoncus ipsum ornare tempor.
        </p>
      </ContentSection>

      {/* Content Section 2 – Left aligned, slides in from left */}
      <ContentSection align="left">
        <p className="text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Tellus vitae consectetur metus
          integer amet ut. Amet sollicitudin risus eget facilisi aliquam purus
          dictum sed at. Malesuada nunc tristique id vestibulum eu. Lorem nulla
          eget pellentesque cursus nulla. Mi elit aliquet vitae vel dolor in.
          Elit ornare blandit ac porttitor sit elit. Mattis et tempus pretium
          elementum integer amet amet urna. Eget id tellus orci amet platea
          arcu. Pulvinar malesuada amet velit lorem volutpat ligula ultricies.
          Et volutpat leo varius at massa turpis amet magna. Semper eleifend
          rhoncus ipsum ornare tempor.
        </p>
      </ContentSection>
    </div>
  );
};

// Content Section Component – slides in on scroll
const ContentSection = ({ children, align = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // animation direction based on alignment
  const slideDirection = align === "right" ? 100 : -100;

  // text + container alignment
  const alignmentClasses =
    align === "right" ? "text-right ml-auto" : "text-left mr-auto";

  return (
    <motion.div
      ref={ref}
      className={`max-w-4xl ${alignmentClasses} px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20`}
      initial={{ opacity: 0, x: slideDirection }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default HeroSection;