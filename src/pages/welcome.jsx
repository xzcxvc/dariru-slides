import React, { useRef } from "react";
import SectionText from "../components/section-text";
import BoxShadow from "../components/shadow";
import { motion, useInView } from "framer-motion";
import WelcomeImg from "/welcomeImg.png";
import ClickSpark from "../components/click-spark";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="welcome" className="relative min-h-screen ">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText text="WELCOME!" />
      </h2>
      {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        > */}
      <div className="flex justify-evenly relative p-20 flex  items-center  gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-sharetech relative text-wrap w-7/12 text-[3rem] font-bold "
        >
          "Explore our insights, learn from our missteps, and celebrate the
          discoveries that light the path ahead."
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -200 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <div className="h-[600px] w-[600px] border-[5px] border-black shadow-[15px_15px_0px_rgba(0,0,0,0.8)]">
            <img
              src={WelcomeImg}
              alt="Welcome Image"
              className="w-[600px] h-[600px] object-cover"
            />
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </section>
  );
};

export default Welcome;
