import React, { useState } from "react";
import SectionText from "../components/section-text";
import Card from "../components/card";
import { learnings } from "../constants";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Learnings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [toggledLearning, setToggledLearning] = useState(null);

  const handleToggle = (id) => {
    const selected = learnings.find((item) => item.id === id);
    setToggledLearning(selected);
  };

  return (
    <section
      id="learnings"
      className="relative min-h-screen transition-all duration-300"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText text="LEARNINGS" />
      </h2>

      <div
        className={`flex font-bitcount justify-evenly relative py-72 px-24 flex items-center gap-8`}
      >
        {learnings?.map((learning, index) => {
          let dynamicColor;

          switch (learning?.id) {
            case 1:
              dynamicColor = "#FF6F61";
              break;
            case 2:
              dynamicColor = "#B8E986";
              break;
            case 3:
              dynamicColor = "#F7A8B8";
              break;
            case 4:
              dynamicColor = "#B39DDB";
              break;
          }

          const isActive = toggledLearning?.id === learning.id;
          return (
            <div key={learning.id} className="relative inline-block group ">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: index % 2 === 0 ? 200 : -200 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index % 2 === 0 ? 0.5 : 0.4,
                  ease: "easeOut",
                }}
                className=" relative text-wrap"
              >
                <div
                  className={`absolute inset-0 bg-black z-0 transition-all duration-200 translate-2 group-hover:translate-3 
                    ${isActive ? "translate-3 w-full" : ""}`}
                />
                <Card
                  className={`group-hover:-translate-3 gap-3 hover:cursor-pointer 
                    ${isActive ? "-translate-3" : ""}`}
                  style={{ background: dynamicColor }}
                  onClick={() => handleToggle(learning.id)}
                >
                  <img src={learning?.thumbnail} alt={learning?.name} />
                  <p
                    className={`w-auto absolute text-3xl text-center text-wrap mt-12 
                      font-extrabold group-hover:text-shadow-[3px_3px_0px_rgba(0,0,0,0.8)] 
                      ${isActive ? "text-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]" : ""}`}
                    style={{ color: dynamicColor }}
                  >
                    {learning?.name}
                  </p>
                </Card>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Learnings;
