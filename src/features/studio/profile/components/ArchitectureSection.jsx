import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ArchitectureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className=" bg-white py-16 px-6 md:px-12 lg:px-12"
    >
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Large Hero Image */}
        <motion.div
          className="relative h-[600px] lg:h-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/OFA_office/WhatsApp Image 2025-11-05 at 10.44.42 (1).jpeg"
            alt="Modern architectural skyscrapers viewed from below"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Column: Text on top, two images below */}
        <div className="flex flex-col gap-8">
          {/* Top Text Section */}
          <motion.div
            className="flex flex-col justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <blockquote className="text-gray-800 leading-relaxed space-y-4">
              <p className="text-lg md:text-xl font-light italic">
                &quot;Lorem ipsum dolor sit amet consectetur. Erat curabitur quis
                sagittis auctor vel suscipit. Viverra pellentesque vel cras etiam
                at nibh arcu tellus. Sed tortor eros felis placerat sagittis
                elementum ornare orci convallis. Lectus cras adipiscing tristique
                bibendum cras et massa elementum dictum. Blandit elit turpis purus
                pharetra egestas elementum. Feugiat facilisis urna velit etiam
                ornare parturient dis cursus nisl.&quot;
              </p>
            </blockquote>
          </motion.div>

          {/* Bottom Two Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <motion.div
              className="relative h-[250px] md:h-[300px] overflow-hidden shadow-lg bg-gray-200"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/OFA_office/WhatsApp Image 2025-11-05 at 10.44.42 (2).jpeg"
                alt="Modern curved building with coral pink facade"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              className="relative h-[250px] md:h-[300px] overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/OFA_office/WhatsApp Image 2025-11-05 at 10.44.42.jpeg"
                alt="Angular modern glass building with geometric patterns"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
