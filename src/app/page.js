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
    title: "Sierra Tech Park",
    category: "Commercial",
    location: "Bengaluru",
    imageUrl:
        "/bagmane/V2.webp",
    projectSlug: "sierra-tech-park",
  },
  {
    id: "3",
    title: "Ballia Bus Stand",
    category: "Public",
    location: "Bengaluru",
    imageUrl:
      "/landingPage/BaliaBusStand.png",
    projectSlug: "ballia-bus-stand",
  },
  {
    id: "4",
    title: "Pine Labs",
    category: "Commercial",
    location: "Bengaluru",
    imageUrl:
       "/pine_labs_exterior/Scene1_1.webp",
    projectSlug: "pine-labs",
  },
];

export default function Home() {
  return (
    <main className="absolute top-0 left-0 w-full h-full">
      <ProjectCarousel projects={projects} />
    </main>
  );
}