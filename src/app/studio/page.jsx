"use client";

import React, { useState, useTransition } from "react";
import ComingSoon from "@/components/coming-soon/ComingSoon";
import ProfileContent from "@/features/studio/profile/ProfileContent";
import PeopleContent from "@/features/studio/people/PeopleContent";
import { cn } from "@/lib/utils";

const filterOptions = ["Profile", "People"];

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
      default:
        return <ComingSoon />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Filter Navigation */}
      <nav className="flex justify-end items-center px-6 sm:px-10 lg:px-12 py-2 bg-white">
        <div className="flex space-x-6 sm:space-x-8">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleFilterChange(option)}
              className={cn(
                "font-normal text-[18px] sm:text-[19px] md:text-[20px] transition-colors duration-150",
                activeFilter === option
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main className="pt-10">{renderContent()}</main>
    </div>
  );
};

export default StudioPage;