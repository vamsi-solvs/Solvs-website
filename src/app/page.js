"use client";

import { ProjectCarousel } from "@/features/hero/components/project-carousel";
const projects = [
  {
    id: "1",
    title: "Balehonnur",
    category: "Residential",
    location: "Bengaluru",
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
    projectSlug: "balehonnur",
  },
  {
    id: "2",
    title: "Urban Oasis",
    category: "Commercial",
    location: "Mumbai",
    imageUrl:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
    projectSlug: "urban-oasis",
  },
  {
    id: "3",
    title: "Skyline Villa",
    category: "Residential",
    location: "Delhi",
    imageUrl:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920",
    projectSlug: "skyline-villa",
  },
];

export default function Home() {
  return (
    <main className="absolute top-0 left-0 w-full h-full">
      <ProjectCarousel projects={projects} />
    </main>
  );
}