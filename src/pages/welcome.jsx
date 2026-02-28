import React, { useRef } from "react";
import SectionText from "../components/section-text";
import { motion, useInView } from "framer-motion";
import WelcomeImg from "/welcomeImg.png";
import ClickSpark from "../components/click-spark";
import { welcomeWords } from "../constants";
import "../index.css";
import ScrambleText from "../components/scramble-text";
import { useState } from "react";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const effectMap = {
    insights: {
      class: "text-[#FF6F61] bg-[#F7DB37] glow",
      animation: { y: [0, -5, 0], scale: [1, 1.05, 1] },
    },
    missteps: {
      class: "text-[#FF6F61] bg-[#BB3F03] stumble",
      animation: { y: [0, -5, 0], scale: [1, 1.05, 1] },
    },
    discoveries: {
      class: "text-[#162042] bg-[#1685A2] ",
      animation: { y: [0, -5, 0], scale: [1, 1.05, 1] },
    },
  };
  const [startScramble, setStartScramble] = useState(false);

  return (
    <section id="welcome" className="relative min-h-screen ">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText text="WELCOME!" />
      </h2>

      <div className="flex justify-evenly relative p-20 flex items-center gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-sharetech relative text-wrap w-7/12 text-[3rem] font-bold "
        >
          {welcomeWords?.map((w) => {
            if (w.type === "normal") return <span> {w.word} </span>;
            const dynamicEffect = effectMap[w.word] || {
              class: "",
              animation: {},
            };

            return (
              <div
                key={`${w.id}-${w.word}`} // key changes when word/context changes
                className="relative inline-block group leading-[1.2]"
              >
                {/* <span>
                  <ScrambleText text="discoveries" />
                </span> */}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, ...dynamicEffect.animation }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: w.id * 0.5,
                  }}
                  onAnimationComplete={() => {
                    if (w.word === "discoveries") {
                      setStartScramble(true);
                    }
                  }}
                  className={`${dynamicEffect.class} border-2 border-black shadow-[5px_5px_0_rgba(0,0,0,0.8)]`}
                >
                  {w.word === "discoveries" ? (
                    <ScrambleText text={w.word} start={startScramble} />
                  ) : (
                    w.word
                  )}
                </motion.span>
              </div>
            );
          })}
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
    </section>
  );
};

export default Welcome;
