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
        "/bagmane/V2.webp",
    projectSlug: "Bagmanne-Sierra",
  },
  {
    id: "3",
    title: "Balia Bus Stand",
    category: "Public",
    location: "Bengaluru",
    imageUrl:
      "/landingPage/BaliaBusStand.png",
    projectSlug: "Balia-Bus-Stand",
  },
  {
    id: "4",
    title: "Pine Labs",
    category: "Commercial",
    location: "Bengaluru",
    imageUrl:
       "/pine_labs_exterior/Scene1_1.webp",
    projectSlug: "Pine-Labs",
  },
];

export default function Home() {
  return (
    <main className="absolute top-0 left-0 w-full h-full">
      <ProjectCarousel projects={projects} />
    </main>
  );
}