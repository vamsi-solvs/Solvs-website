import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-white overflow-hidden">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 z-10">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight text-center md:text-left">
            OFFICE<br className="hidden md:block" />
            <span className="md:hidden"> </span>
            OF<br className="hidden md:block" />
            <span className="md:hidden"> </span>
            ARCHITECTURE
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-[60vh] z-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop"
          alt="Architectural Office"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;