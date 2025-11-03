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
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {flatImages.length > 0 ? (
            flatImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[90.5vh] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Left clickable area */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-0 h-full w-1/3 cursor-w-resize z-10 transition-all duration-200"
                    style={{
                      background: 'radial-gradient(ellipse at left, rgba(0,0,0,0.20) 0%, transparent 100%)',
                      opacity: 0
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    aria-label="Previous slide"
                  />
                  
                  {/* Right clickable area */}
                  <button
                    onClick={scrollNext}
                    className="absolute right-0 top-0 h-full w-1/3 cursor-e-resize z-10 transition-all duration-200"
                    style={{
                      background: 'radial-gradient(ellipse at right, rgba(0,0,0,0.20) 0%, transparent 100%)',
                      opacity: 0
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