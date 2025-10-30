"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProjectSlide } from "./projectSlide";
import { cn } from "@/lib/utils";

export function ProjectCarousel({ projects }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Initialize current slide AFTER the effect yields (avoid sync setState)
    const id = requestAnimationFrame(() => {
      setCurrent(api.selectedScrollSnap());
    });

    // Subscribe to slide change events
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(id);
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="relative h-screen w-full bg-white dark:bg-black transition-colors">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="h-full w-full"
      >
        <CarouselContent className="h-full">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="h-screen">
              <ProjectSlide
                title={project.title}
                category={project.category}
                location={project.location}
                imageUrl={project.imageUrl}
                projectSlug={project.projectSlug}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-1 transition-all duration-300",
              current === index
                ? "w-16 bg-foreground"
                : "w-8 bg-foreground/50 hover:bg-foreground/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}