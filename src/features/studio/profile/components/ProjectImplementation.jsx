import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectImplementation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          Project Implementation at OFA
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Row 1 - Image */}
          <motion.div 
            className="relative h-80 overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="absolute inset-0 bg-[#4A7C9E]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A7C9E] to-[#5A8CAE]" />
              <div className="absolute top-0 right-0 w-3/4 h-1/3 bg-white" />
              <div className="absolute top-1/3 right-0 w-2/3 h-1/4 bg-gray-200" />
              <div className="absolute bottom-1/4 left-0 right-0 h-1/4 bg-gray-300" />
              <div className="absolute bottom-0 left-0 w-1/4 h-1/5 bg-[#8B6F47]" />
            </div>
          </motion.div>

          {/* Card 01 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-5xl font-light mb-8">01</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">CLIENT<br />ONBOARDING</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Once you contact us, we&apos;ll schedule an initial meeting to understand your needs, goals, and vision for the project.
              </p>
            </div>
          </motion.div>

          {/* Card 02 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-5xl font-light mb-8">02</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Site<br />Assessment</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Based on our discussions and site analysis, we develop initial design concepts that bring your vision to life and give you a clear direction.
              </p>
            </div>
          </motion.div>

          {/* Card 03 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-5xl font-light mb-8">03</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Design<br />Development</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Based on our discussions and site analysis, we develop initial design concepts that bring your vision to life and give you a clear direction.
              </p>
            </div>
          </motion.div>

          {/* Row 2 - Card 04 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-5xl font-light mb-8">04</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Design<br />Refinement</h2>
              <p className="text-sm text-gray-700 leading-snug">
                We refine the chosen concept with detailed layouts, materials, and systems, collaborating with consultants.
              </p>
            </div>
          </motion.div>

          {/* Card 05 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-5xl font-light mb-8">05</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Construction<br />Documentation</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Our team prepares all the technical drawings and documents needed for permits, budgeting, and construction.
              </p>
            </div>
          </motion.div>

          {/* Row 2 - Image */}
          <motion.div 
            className="relative h-80 overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#7AB5C9] to-[#5A9FB3]">
              <div className="absolute bottom-0 left-1/4 w-1/4 h-3/4 bg-[#4A7B9E] opacity-80" />
              <div className="absolute bottom-0 left-1/2 w-1/4 h-2/3 bg-[#3A6B8E] opacity-70" />
            </div>
          </motion.div>

          {/* Card 06 */}
          <motion.div 
            className="border-2 border-gray-900 p-8 flex flex-col justify-between h-80"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="text-5xl font-light mb-8">06</div>
            <div>
              <h2 className="text-lg font-bold mb-4 leading-tight">Construction<br />Oversight</h2>
              <p className="text-sm text-gray-700 leading-snug">
                Throughout the construction phase, we stay involved during construction to ensure the project follows the design and runs smoothly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectImplementation;
