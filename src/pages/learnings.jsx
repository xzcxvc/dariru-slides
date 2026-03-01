import React, { useState } from "react";
import SectionText from "../components/section-text";
import Card from "../components/card";
import { learnings } from "../constants";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Triangle } from "lucide-react";

const Learnings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [toggledLearning, setToggledLearning] = useState(null);

  const handleToggle = (id) => {
    setToggledLearning((prev) => (prev === id ? null : id)); // Toggle the selected learning
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
        {learnings
          ?.filter((item) =>
            toggledLearning ? item.id === toggledLearning : true,
          )
          .map((learning, index) => {
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
                  <motion.div>
                    <Card
                      isActive={toggledLearning}
                      className={`${toggledLearning === learning?.id ? "w-350" : ""} w-80 h-80 
                    ${toggledLearning ? "-translate-3" : ""}`}
                      style={{ background: dynamicColor }}
                      onClick={() => handleToggle(learning.id)}
                    >
                      <div className="flex relative gap-8">
                        <img
                          src={learning?.thumbnail}
                          alt={learning?.name}
                          className={`w-80`}
                        />
                        {toggledLearning && (
                          <div className="w-full">
                            <div
                              className={`pr-12 flex gap-4 flex-col min-h-full justify-center text-xl font-bold font-pressstart`}
                            >
                              {learning?.topics?.map((topic) => (
                                <div
                                  key={topic.id}
                                  className="flex justify-start items-center w-full gap-12"
                                >
                                  <p className="w-3/12 text-nowrap">
                                    {topic.name}
                                  </p>
                                  <div>
                                    <Triangle className="w-6 h-6 fill-black rotate-90 text-black" />
                                  </div>
                                  <p className={`font-sharetech w-8/12`}>
                                    {topic.context}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <p
                          className={`w-auto absolute text-3xl text-center text-wrap mt-12 
                            font-extrabold group-hover:text-shadow-[3px_3px_0px_rgba(0,0,0,0.8)] 
                            ${toggledLearning ? "text-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]" : ""}`}
                          style={{ color: dynamicColor }}
                        >
                          {learning?.name}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Learnings;
