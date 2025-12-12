import { CareerCard } from "@/components/careerCard/CareerCard";
import React from "react";

const jobPostings = [
  {
    id: "1",
    title: "Junior Architect",
    department: "Architecture",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "We are seeking a Junior Architect with 1–2 years of experience to support our design team in producing drawings, concepts, and project documentation.",
    email: "careers@company.com",
  },
  {
    id: "2",
    title: "Civil Engineer – Project & Site Coordinator",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "Looking for a Civil Engineer to manage site coordination, project scheduling, vendor supervision, and quality control for ongoing architectural projects.",
    email: "careers@company.com",
  },
  {
    id: "3",
    title: "Freelance 3D Visualizer / AI Visualizer",
    department: "Visualization",
    location: "Remote",
    type: "Freelance",
    description:
      "We are looking for talented freelance 3D and AI visualizers for creating high-quality renders, conceptual visuals, and presentation imagery for architectural projects.",
    email: "careers@company.com",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-12 py-8 max-w-6xl mx-auto">

        {/* ARCHITECTURE-STUDIO HEADER */}
        <header className="mb-14">
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            Join Our Studio
          </h1>
          <p className="text-gray-600 text-base font-light mt-2 max-w-2xl">
            Help us shape meaningful spaces and contribute to our growing architectural practice.
          </p>
        </header>

        <div className="grid gap-8">
          {jobPostings.map((job) => (
            <CareerCard key={job.id} {...job} />
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-light">
            Don’t see an opening? Send your portfolio to{" "}
            <a
              href="mailto:careers@company.com"
              className="text-gray-900 hover:underline"
            >
              careers@company.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
