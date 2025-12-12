"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { useState } from "react";

const ProjectCarousel = ({ images = [] }) => {
  const flatImages = Array.isArray(images[0]) ? images[0] : images;
  const [api, setApi] = useState()

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {flatImages.length > 0 ? (
            flatImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]] mt-4 w-full bg-black flex items-center justify-center overflow-hidden bg-white">

                  {/* Main focused image */}
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    width={1200}
                    height={800}
                    className="h-full w-auto object-contain"
                    priority={index === 0}
                  />
                  
                  {/* Left clickable area */}
                  <button
                    onClick={() => {
                      // Add gradient fade effect before scrolling
                      const el = document.querySelector(".transition-opacity");
                      if (el) el.classList.add("opacity-0");
                      setTimeout(() => {
                        scrollPrev();
                        if (el) el.classList.remove("opacity-0");
                      }, 300);
                    }}
                    className="absolute left-0 top-0 h-full w-1/3 cursor-w-resize z-10 transition-all duration-200"
                    style={{
                      background: 'radial-gradient(ellipse at left, rgba(0,0,0,0) 0%, transparent 100%)',
                      opacity: 0,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    aria-label="Previous slide"
                  />

                  {/* Right clickable area */}
                  <button
                    onClick={() => {
                      const el = document.querySelector(".transition-opacity");
                      if (el) el.classList.add("opacity-0");
                      setTimeout(() => {
                        scrollNext();
                        if (el) el.classList.remove("opacity-0");
                      }, 300);
                    }}
                    className="absolute right-0 top-0 h-full w-1/3 cursor-e-resize z-10 transition-all duration-200"
                    style={{
                      background: 'radial-gradient(ellipse at right, rgba(0,0,0,0) 0%, transparent 100%)',
                      opacity: 0,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    aria-label="Next slide"
                  />
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="flex items-center justify-center h-[80vh] bg-gray-100 text-gray-500">
                No images found
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;