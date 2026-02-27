import React, { useRef } from "react";
import SectionText from "../components/section-text";
import BoxShadow from "../components/shadow";
import { motion, useInView } from "framer-motion";
import welcomeImg from "../../public/welcomeImg.png";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="welcome" className="relative min-h-screen ">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText
          text="WELCOME!"
          className="bg-[#FA7958] relative z-10 font-bold shadow-[10px_10px_0px_rgba(0,0,0,0.8)]"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-evenly relative p-20 flex  items-center  gap-3">
            <p className="font-sharetech relative text-wrap w-7/12">
              Discover our learnings, reflect on our failures, and celebrate the
              realizations that guide the way forward.
            </p>
            <div className="w-5/12 h-[680px] border shadow-[10px_10px_0px_rgba(0,0,0,0.8)]">
              <img
                src={welcomeImg}
                alt="Welcome Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </h2>
    </section>
  );
};

export default Welcome;
