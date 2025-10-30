"use client";

import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projects = [
  {
    id: "1",
    title: "Balehonnur",
    category: "Residential",
    location: "Bengaluru",
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: "2",
    title: "Urban Oasis",
    category: "Commercial",
    location: "Mumbai",
    imageUrl:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: "3",
    title: "Skyline Villa",
    category: "Residential",
    location: "Delhi",
    imageUrl:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: "4",
    title: "Green City Masterplan",
    category: "Master Planning",
    location: "Hyderabad",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: "5",
    title: "Public Library",
    category: "Public",
    location: "Chennai",
    imageUrl:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: "6",
    title: "Luxury Villas",
    category: "Villas",
    location: "Goa",
    imageUrl:
      "https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1920",
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

function MobileFilter({ activeFilter, onChange }) {
  return (
    <div className="md:hidden w-full max-w-[200px]">
      <Select onValueChange={onChange} value={activeFilter}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filter Projects" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

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
    <div className="container mx-auto px-4 py-5">
      {/* Filter Controls */}
      <div className="flex justify-end mb-8">
        {/* Desktop Filters */}
        <div className="hidden md:flex space-x-10">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleFilterChange(option)}
              className={cn(
                "text-lg tracking-wide transition-colors duration-150",
                activeFilter === option
                  ? "text-black font-semibold"
                  : "text-gray-500 font-normal hover:text-gray-700"
              )}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Mobile Filter */}
        <MobileFilter activeFilter={activeFilter} onChange={handleFilterChange} />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Our Work</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">
                {project.category} – {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}