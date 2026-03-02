import React from "react";
import SectionText from "../components/section-text";
import { realizations } from "../constants";
import Card from "../components/card";
const Realizations = () => {
  return (
    <section
      id="realizations"
      className="relative min-h-screen transition-all duration-300"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText text="REALIZATIONS" />
      </h2>

      <div
        className={`flex flex-col font-bitcount justify-evenly relative py-48 flex items-start px-27 gap-8`}
      >
        <div className="font-bitcount h-24 w-full relative top-36 flex flex-col gap-12">
          {realizations?.map((item) => {
            return (
              <div className="font-thin text-5xl">
                {/* <button>Click!</button> */}
                <p>{item?.name}</p> 
                {/* simulate typing and enter trigger */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Realizations;
