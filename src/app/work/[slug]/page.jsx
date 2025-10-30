"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import ProjectCarousel from "@/features/work/components/ProjectCarousel";
import ProjectDetails from "@/features/work/components/ProjectDetails";
import { projects } from "@/utils/projects";

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

  const images = [
    project.imageUrl,
    "/landingPage/BaliaBusStand.png",
    "/landingPage/Balehonnur.png",
    "/landingPage/BagmanneSierra.png",
  ];

  const projectDetailsData = [
    { label: "Location", value: project.location },
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Area", value: project.area },
    { label: "Status", value: project.status },
    { label: "Architects", value: project.architects },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel */}
      <ProjectCarousel images={images} />

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Left Column - Project Description (3/4 width) */}
          <div className="lg:col-span-3">
            <h1 className="mb-6 text-3xl font-bold uppercase tracking-tight">
              {project.title}
            </h1>

            <div className="space-y-4 text-sm leading-relaxed text-foreground">
              <p>
                {project.description || "Lorem ipsum dolor sit amet consectetur. Mauris ultrices consectetur eu vitae integer egestas fringilla posuere sollicitudin. In lorem quis faucibus feugiat. Morbi senectus elit at id. Hendrerit nec ut imperdiet blandit malesuada pellentesque. Vitae sed tortor velit egestas mauris consequat malesuada. Ipsum a tellus volutpat mi fringilla vitae suspendisse. Lectus nisi dictumst sagittis vitae. Aenean sit dolor porta purus ultrices ridiculus. Felis adipiscing quam ut ante dolor proin vitae. Amet aenean aliquet magnis facilisi. Sit arcu adipiscing enim venenatis in eget. Laoreet aliquam et diam sed semper vitae."}
              </p>

              <p>
                {project.details || "Lectus laoreet mi eu purus nunc amet. Duis lectus fermentum nunc suspendisse id tristique non diam.Posuere amet luctus urna orci nunc massa urna amet. Aliquam dui et turpis pulvinar. Sed sed gravida tellus mi eget. Risus senectus aliquet scelerisque urna sed at id tellus. Dis amet ultrices etiam velit odio imperdiet."}
              </p>

              <p>
                Lectus laoreet mi eu purus nunc amet. Duis lectus fermentum
                nunc suspendisse id tristique non diam.Posuere amet luctus urna
                orci nunc massa urna amet. Aliquam dui et turpis pulvinar. Sed
                sed gravida tellus mi eget. Risus senectus aliquet scelerisque
                urna sed at id tellus. Dis amet ultrices etiam velit odio
                imperdiet.
              </p>
            </div>
          </div>

          {/* Right Column - Project Details (1/4 width) */}
          <div className="lg:col-span-1">
            <ProjectDetails details={projectDetailsData} />
          </div>
        </div>
      </div>
    </div>
  );
}