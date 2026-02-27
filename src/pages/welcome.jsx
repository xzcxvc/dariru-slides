import React, { useRef } from "react";
import SectionText from "../components/section-text";
import BoxShadow from "../components/shadow";
import { motion, useInView } from "framer-motion";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="welcome" className="relative min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <div className="relative group">
          <SectionText text="WELCOME!" className="bg-[#FA7958]" />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-sharetech p-28 min-h-screen flex items-center">
              Discover our learnings, reflect on our failures, and celebrate the
              realizations that guide the way forward.
            </p>
          </motion.div>
        </div>
      </h2>
    </section>
  );
};

export default Welcome;
