import React from 'react';
import HeroSection from './components/HeroSection';

const ProfileContent = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
    >
      <HeroSection />
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Profile Content</h2>
        <p className="text-lg text-gray-700">Details about the studio&apos;s profile will be displayed here.</p>
      </div>
    </div>
  );
};

export default ProfileContent;