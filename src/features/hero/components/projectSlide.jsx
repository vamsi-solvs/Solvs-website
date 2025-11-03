"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryFormDialog } from "./InquiryFormDialog";

export function ProjectSlide({ title, category, location, imageUrl, projectSlug }) {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Slide Content */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-2xl space-y-4 md:space-y-6">
          <h2 className="text-white text-5xl md:text-7xl font-light tracking-wide">
            {title}
          </h2>

          <p className="text-white/90 text-xl md:text-2xl font-light">
            {category} | {location}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <InquiryFormDialog />

            <Link href={`/work/${projectSlug}`}>
              <Button
                variant="ghost"
                className="text-white text-sm md:text-base font-medium tracking-wider px-0 hover:bg-transparent hover:opacity-80 transition-opacity group"
              >
                VIEW WORKS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}