import React, { useState } from "react";
import SectionText from "../components/section-text";
import Card from "../components/card";
import { niceToHaves } from "../constants";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NiceToHaves = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [toggledNiceToHave, settoggledNiceToHave] = useState(null);

  const handleToggle = (id) => {
    settoggledNiceToHave((prev) => (prev === id ? null : id)); // Toggle the selected niceToHave
  };

  return (
    <section
      id="nice-to-haves"
      className="relative min-h-screen transition-all duration-300"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText text="NICE TO HAVES" />
      </h2>

      <div
        className={`flex flex-col font-bitcount justify-evenly relative py-72 flex items-start px-27 gap-8`}
      >
        {niceToHaves.map((niceToHave, index) => {
          let dynamicColor;

          switch (niceToHave?.id) {
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
          const Icon = niceToHave?.icon;
          return (
            <div key={niceToHave.id} className="relative inline-block group ">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? 200 : -200 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index % 2 === 0 ? 0.5 : 0.4,
                  ease: "easeOut",
                }}
                className="relative text-wrap"
              >
                <motion.div>
                  <Card
                    isActive={toggledNiceToHave === niceToHave?.id}
                    className={`group-hover:-translate-3 gap-3 hover:cursor-pointer transition-all duration-300
                       ${toggledNiceToHave === niceToHave?.id ? "h-70" : ""} w-350 h-36 
                   `}
                    style={{ background: dynamicColor }}
                    onClick={() => handleToggle(niceToHave.id)}
                  >
                    <div className="flex flex-col gap-3">
                      <p
                        className={`w-full absolute text-4xl text-center text-wrap p-12 
                      font-extrabold group-hover:text-shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]
                    `}
                        // style={{ color: dynamicColor }}
                      >
                        <div className="flex items-center justify-between ">
                          {niceToHave?.name}
                          <Icon className="w-10 h-10" />
                        </div>
                      </p>
                      {toggledNiceToHave === niceToHave.id && (
                        <ul className="relative px-24 py-32 transition-all duration-300">
                          <li>
                            <p className="font-sharetech text-3xl font-bold">
                              {niceToHave?.description}
                            </p>
                          </li>
                        </ul>
                      )}
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

export default NiceToHaves;
