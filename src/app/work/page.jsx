"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { projects } from "@/utils/projects";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const filterOptions = [
  "All",
  "Master Planning",
  "Public",
  "Commercial",
  "Residential",
  "Renovation",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (value) => {
    startTransition(() => setActiveFilter(value));
  };

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Filter Navigation */}
      <nav className="flex justify-end items-center px-4 md:px-12 pb-2 bg-white">
        <div className="flex space-x-6 md:space-x-8 text-[16px] md:text-[20px] font-medium overflow-x-auto scrollbar-hide md:overflow-visible whitespace-nowrap">
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

      {/* Masonry Grid */}
      <div className="max-w-8xl mx-auto px-12 pb-20 pt-8">
        {filteredProjects.length === 0 ? (
          <div className="flex items-center justify-center h-[60vh]">
            <p className="text-gray-500 text-xl md:text-2xl font-medium">
              Coming Soon
            </p>
          </div>
        ) : (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="64px" className="w-full!">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  <Link href={`/work/${project.slug}`}>
                    {/* Image */}
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={800}
                      height={600}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-x-0 bottom-0 text-left px-6 py-5">
                        <h3 className="text-white text-xl font-light">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-base font-light mt-1">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </div>
    </div>
  );
}