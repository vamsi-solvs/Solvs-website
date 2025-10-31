"use client";

import { ProjectCarousel } from "@/features/hero/components/project-carousel";
const projects = [
  {
    id: "1",
    title: "Balehonnur",
    category: "Residential",
    location: "Bengaluru",
    imageUrl:
      "/landingPage/Balehonnur.png",
    projectSlug: "balehonnur",
  },
  {
    id: "2",
    title: "Bagmanne Sierra",
    category: "Commercial",
    location: "Bengaluru",
    imageUrl:
      "/landingPage/BagmanneSierra.png",
    projectSlug: "Bagmanne-Sierra",
  },
  {
    id: "3",
    title: "Balia Bus Stand",
    category: "Commercial",
    location: "Bengaluru",
    imageUrl:
      "/landingPage/BaliaBusStand.png",
    projectSlug: "Balia-Bus-Stand",
  },
];

export default function Home() {
  return (
    <main className="absolute top-0 left-0 w-full h-full">
      <ProjectCarousel projects={projects} />
    </main>
  );
}