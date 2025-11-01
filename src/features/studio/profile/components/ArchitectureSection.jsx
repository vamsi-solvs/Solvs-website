import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ArchitectureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Large Hero Image */}
          <motion.div
            className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-sm shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Modern architectural skyscrapers viewed from below"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
        </div>

        {/* Bottom Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative h-[400px] overflow-hidden rounded-sm shadow-lg bg-gray-200"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Modern curved building with coral pink facade"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            className="relative h-[400px] overflow-hidden rounded-sm shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
              alt="Angular modern glass building with geometric patterns"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
