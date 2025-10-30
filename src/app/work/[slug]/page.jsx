"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/projects"; // ✅ Import shared data

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link href="/work" className="text-blue-500 hover:underline ml-4">
          Go back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="text-blue-500 hover:underline mb-8 block">
          &larr; Back to Work
        </Link>

        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-700 mb-6">
          {project.location} | {project.category}
        </p>

        <div className="mb-8">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg mb-4">{project.description}</p>
        <p className="text-md text-gray-800">{project.details}</p>
      </div>
    </div>
  );
}