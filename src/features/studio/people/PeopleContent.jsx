"use client";

import Image from "next/image";
import { peopleData } from "@/utils/people";

// Reusable card component
const PersonCard = ({ imageUrl, name, designation }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Image */}
      <div className="w-full aspect-square relative mb-6 bg-gray-200 overflow-hidden">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`Photo of ${name}`}
            fill
            className="
              object-cover
              filter grayscale
              hover:grayscale-0
              transition-all duration-500 ease-in-out
            "
            priority={false}
          />
        )}
      </div>

      {/* Name */}
      <h3 className="font-medium text-[18px] sm:text-[19px] md:text-[20px] text-gray-900 leading-snug">
        {name}
      </h3>

      {/* Designation */}
      <p className="font-normal text-[18px] sm:text-[19px] md:text-[20px] text-gray-700 leading-snug mt-1">
        {designation}
      </p>
    </div>
  );
};

// Main grid
const PeopleContent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8
        "
      >
        {peopleData.map((person, index) => (
          <PersonCard
            key={index}
            name={person.name}
            designation={person.designation}
            imageUrl={person.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleContent;