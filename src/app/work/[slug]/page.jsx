"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import ProjectCarousel from "@/features/work/components/ProjectCarousel";
import ProjectDetails from "@/features/work/components/ProjectDetails";
import { projects } from "@/utils/projects";
import NotFound from "@/components/not-found/NotFound";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const normalizedSlug = slug?.toLowerCase();
  const currentIndex = projects.findIndex((p) => p.slug === normalizedSlug);
  const project = projects[currentIndex];

  if (!project) return <NotFound />;

  // circular next/prev
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  const projectDetailsData = [
    { label: "Location", value: project.location },
    { label: "Category", value: project.category },
    { label: "Area", value: project.area },
    { label: "Status", value: project.status },
    { label: "Architects", value: project.architects },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel */}
      <ProjectCarousel images={project.images} />

      {/* Main Content */}
      <div className="py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 px-6 sm:px-8 lg:pl-0 lg:pr-12">
            <h1 className="mb-8 text-[18px] md:text-[20px] lg:text-[24px] font-medium uppercase tracking-tight text-gray-900">
              {project.title}
            </h1>

            <div className="space-y-6 text-[12px] md:text-[14px] lg:text-[16px] font-light leading-relaxed text-foreground">
              <p>{project.description}</p>
              <p>{project.details}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 px-6 sm:px-8 lg:px-0">
            <div className="text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-relaxed">
              <ProjectDetails details={projectDetailsData} />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="w-full mt-4 pt-4 px-6 lg:px-16">
        {/* Responsive: keep same visual on desktop; stack & center on mobile */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:items-center">
          
          {/* Back to Work - centered on mobile, left on md+ */}
          <Link
            href="/work"
            aria-label="Back to work"
            className="inline-flex items-center gap-2 text-[12px] md:text-[14px] lg:text-[16px] font-medium hover:opacity-75 transition px-4 py-3"
          >
            <span>← Back to Work</span>
          </Link>

          {/* Prev / Next - centered on mobile below Back, right on md+ */}
          <div className="flex items-center gap-6 text-[12px] md:text-[14px] lg:text-[16px] font-medium">
            <Link
              href={`/work/${prevProject.slug}`}
              aria-label={`Previous project: ${prevProject.title}`}
              className="inline-flex items-center gap-2 hover:opacity-75 transition px-4 py-3"
            >
              ← Prev
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              aria-label={`Next project: ${nextProject.title}`}
              className="inline-flex items-center gap-2 hover:opacity-75 transition px-4 py-3"
            >
              Next →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
