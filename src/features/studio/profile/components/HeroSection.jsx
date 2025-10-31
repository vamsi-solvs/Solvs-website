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

      {/* Project Implementation Section */}
      <ProjectImplementation />
      <ArchitectureSection />
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

// Project Implementation Component
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
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          Project Implementation at OFA
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Row 1 - Image */}
          <motion.div 
            className="relative h-80 overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="absolute inset-0 bg-[#4A7C9E]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A7C9E] to-[#5A8CAE]" />
              <div className="absolute top-0 right-0 w-3/4 h-1/3 bg-white" />
              <div className="absolute top-1/3 right-0 w-2/3 h-1/4 bg-gray-200" />
              <div className="absolute bottom-1/4 left-0 right-0 h-1/4 bg-gray-300" />
              <div className="absolute bottom-0 left-0 w-1/4 h-1/5 bg-[#8B6F47]" />
            </div>
          </motion.div>

          {/* Card 01 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-5xl font-light mb-8">01</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">CLIENT<br />ONBOARDING</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Once you contact us, we&apos;ll schedule an initial meeting to understand your needs, goals, and vision for the project.
              </p>
            </div>
          </motion.div>

          {/* Card 02 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-5xl font-light mb-8">02</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Site<br />Assessment</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Based on our discussions and site analysis, we develop initial design concepts that bring your vision to life and give you a clear direction.
              </p>
            </div>
          </motion.div>

          {/* Card 03 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-5xl font-light mb-8">03</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Design<br />Development</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Based on our discussions and site analysis, we develop initial design concepts that bring your vision to life and give you a clear direction.
              </p>
            </div>
          </motion.div>

          {/* Row 2 - Card 04 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-5xl font-light mb-8">04</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Design<br />Refinement</h2>
              <p className="text-sm text-gray-700 leading-snug">
                We refine the chosen concept with detailed layouts, materials, and systems, collaborating with consultants.
              </p>
            </div>
          </motion.div>

          {/* Card 05 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-5xl font-light mb-8">05</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Construction<br />Documentation</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Our team prepares all the technical drawings and documents needed for permits, budgeting, and construction.
              </p>
            </div>
          </motion.div>

          {/* Row 2 - Image */}
          <motion.div 
            className="relative h-80 overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#7AB5C9] to-[#5A9FB3]">
              <div className="absolute bottom-0 left-1/4 w-1/4 h-3/4 bg-[#4A7B9E] opacity-80" />
              <div className="absolute bottom-0 left-1/2 w-1/4 h-2/3 bg-[#3A6B8E] opacity-70" />
            </div>
          </motion.div>

          {/* Card 06 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="text-5xl font-light mb-8">06</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Construction<br />Oversight</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Throughout the construction phase, we stay involved during construction to ensure the project follows the design and runs smoothly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
const ArchitectureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Large Hero Image */}
          <motion.div
            className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-sm shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Modern architectural skyscrapers viewed from below"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <blockquote className="text-gray-800 leading-relaxed space-y-4">
              <p className="text-lg md:text-xl font-light italic">
                "Lorem ipsum dolor sit amet consectetur. Erat curabitur quis
                sagittis auctor vel suscipit. Viverra pellentesque vel cras etiam
                at nibh arcu tellus. Sed tortor eros felis placerat sagittis
                elementum ornare orci convallis. Lectus cras adipiscing tristique
                bibendum cras et massa elementum dictum. Blandit elit turpis purus
                pharetra egestas elementum. Feugiat facilisis urna velit etiam
                ornare parturient dis cursus nisl."
              </p>
            </blockquote>
          </motion.div>
        </div>

        {/* Bottom Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative h-[400px] overflow-hidden rounded-sm shadow-lg bg-gray-200"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Modern curved building with coral pink facade"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            className="relative h-[400px] overflow-hidden rounded-sm shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
              alt="Angular modern glass building with geometric patterns"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default HeroSection;