"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProjectCarousel = ({ images = [] }) => {
  // Handle nested array (e.g., [ ["/img1", "/img2"] ]) gracefully
  const flatImages = Array.isArray(images[0]) ? images[0] : images;

  return (
    <div className="relative w-full">
      <Carousel
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
                <div className="relative h-[80vh] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0} // load first image fast
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

        <CarouselPrevious className="left-6 h-10 w-10 border-none bg-transparent text-foreground hover:bg-transparent hover:text-foreground/80" />
        <CarouselNext className="right-6 h-10 w-10 border-none bg-transparent text-foreground hover:bg-transparent hover:text-foreground/80" />
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;