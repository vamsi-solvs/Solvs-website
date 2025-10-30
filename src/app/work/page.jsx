"use client";

import { useState, useTransition } from "react";
import Link from "next/link"; // Import Link
import { cn } from "@/lib/utils";
import Image from "next/image";

// Helper function to generate a slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
};

const projects = [
  {
    id: "1",
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Balehonnur",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Balehonnur"),
  },
  {
    id: "2",
    imageUrl:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Urban Edge",
    location: "Hyderabad",
    category: "Commercial",
    slug: generateSlug("Urban Edge"),
  },
  {
    id: "3",
    imageUrl:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Palm Court",
    location: "Goa",
    category: "Residential",
    slug: generateSlug("Palm Court"),
  },
  {
    id: "4",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Green Axis",
    location: "Chennai",
    category: "Master Planning",
    slug: generateSlug("Green Axis"),
  },
  {
    id: "5",
    imageUrl:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Civic Pavilion",
    location: "Pune",
    category: "Public",
    slug: generateSlug("Civic Pavilion"),
  },
  {
    id: "6",
    imageUrl:
      "https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Azure Villa",
    location: "Kochi",
    category: "Villas",
    slug: generateSlug("Azure Villa"),
  },
  {
    id: "7",
    imageUrl:
      "https://images.pexels.com/photos/2611875/pexels-photo-2611875.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Haven Rise",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Haven Rise"),
  },
];

const filterOptions = [
  "All",
  "Master Planning",
  "Public",
  "Commercial",
  "Residential",
  "Villas",
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
      <nav className="flex justify-end items-center px-12 py-6 bg-white">
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

      {/* Masonry Grid with hover info */}
      <div className="max-w-7xl mx-auto px-8 pb-20 pt-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden break-inside-avoid cursor-pointer"
            >
              <Link href={`/work/${project.slug}`}>
                {/* Image */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover details bar */}
                <div className="absolute inset-x-0 bottom-0 bg-white/90 text-center py-4 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-black text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.location}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}