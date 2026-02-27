"use client";
import React, { useRef } from "react";
// import { ScrollParallax } from "react-just-parallax";
import BoxShadow from "./shadow";
import { motion, useInView } from "framer-motion";
import Button from "./button";
const SectionText = ({ text, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`font-bold font-pressstart text-gray-900 top-28 left-12 inline p-4 relative text-nowrap ${className} `}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default SectionText;
