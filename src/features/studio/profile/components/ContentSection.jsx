import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContentSection = ({ children, align = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // animation direction based on alignment
  const slideDirection = align === "right" ? 100 : -100;

  // text + container alignment
  const alignmentClasses =
    align === "right" ? "text-right ml-auto" : "text-left mr-auto";

  return (
    <motion.div
      ref={ref}
      className={`max-w-4xl ${alignmentClasses} px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20`}
      initial={{ opacity: 0, x: slideDirection }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ContentSection;
