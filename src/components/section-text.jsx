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
        className={`font-bold font-pressstart border-[5px] border-black text-gray-900 top-28 left-12 inline p-4 relative text-nowrap ${className} bg-[#FA7958] relative z-10 font-bold shadow-[10px_10px_0px_rgba(0,0,0,0.8)]`}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default SectionText;
