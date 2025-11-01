import React from 'react';
import AnimatedArchitecturalIcon from '../animatedarchiteturalicon/AnimatedArchitecturalIcon';
import Link from "next/link";


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="text-center">
        <AnimatedArchitecturalIcon />
        <h1 className="text-5xl font-bold mb-4 animate-pulse">404</h1>
        <p className="text-lg text-gray-600">The page you&apos;re looking for seems to have been misplaced in the blueprints.</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-gray-100 to-transparent"></div>
      
    </div>
  );
};

export default NotFound;