import React from 'react';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import ProjectImplementation from './components/ProjectImplementation';
import ArchitectureSection from './components/ArchitectureSection';

const ProfileContent = () => {
  return (
    <div className="bg-white">
      <Hero />
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

export default ProfileContent;