"use client";

import React, { useState, useTransition } from 'react';
import ComingSoon from '@/components/coming-soon/ComingSoon';
import ProfileContent from '@/features/studio/profile/ProfileContent';
import PeopleContent from '@/features/studio/people/PeopleContent';
import { cn } from "@/lib/utils";

const filterOptions = [
  "Profile",
  "People",
];

const StudioPage = () => {
  const [activeFilter, setActiveFilter] = useState("Profile");
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (value) => {
    startTransition(() => setActiveFilter(value));
  };

  const renderContent = () => {
    switch (activeFilter) {
      case "Profile":
        return <ProfileContent />;
      case "People":
        return <PeopleContent />;

    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Filter Navigation */}
      <nav className="flex justify-end items-center px-12 py-2 bg-white">
        <div className="flex space-x-8 text-lg">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleFilterChange(option)}
              className={cn(
                "transition-colors duration-150",
                activeFilter === option
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main className="pt-10">
        {renderContent()}
      </main>
    </div>
  );
};

export default StudioPage;