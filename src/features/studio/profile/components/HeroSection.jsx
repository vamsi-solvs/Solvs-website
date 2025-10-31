import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-white overflow-hidden">
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
  );
};

export default HeroSection;