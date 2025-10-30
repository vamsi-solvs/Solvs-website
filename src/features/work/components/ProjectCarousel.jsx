"use client";

import { useState } from "react";
import Image from "next/image"; // Import Image from next/image
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const ProjectCarousel = ({ images }) => {
  return (
    <div className="relative w-full">
      <Carousel plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh] w-full overflow-hidden">
                <Image // Use Image component
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill // Use fill to cover the parent div
                  style={{ objectFit: "cover" }} // objectFit as style prop
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 h-10 w-10 border-none bg-transparent text-foreground hover:bg-transparent hover:text-foreground/80" />
        <CarouselNext className="right-6 h-10 w-10 border-none bg-transparent text-foreground hover:bg-transparent hover:text-foreground/80" />
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;