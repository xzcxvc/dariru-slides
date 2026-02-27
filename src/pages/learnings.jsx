import React from "react";
import SectionText from "../components/section-text";

const Learnings = () => {
  return (
    <section id="learnings" className="relative min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText
          text="LEARNINGS"
          className="bg-[#FA7958] relative z-10 font-bold shadow-[10px_10px_0px_rgba(0,0,0,0.8)]"
        />
      </h2>
    </section>
  );
};

export default Learnings;
