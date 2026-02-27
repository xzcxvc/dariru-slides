import React from "react";
import SectionText from "../components/section-text";
import Card from "../components/card";
import { learnings } from "../constants";

const Learnings = () => {
  return (
    <section
      id="learnings"
      className="relative min-h-screen transition-all duration-300"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText text="LEARNINGS" />
        <div className="flex font-bitcount justify-evenly relative py-72 px-24 flex items-center gap-8">
          {learnings?.map((learning) => {
            let dynamicColor;

            switch (learning?.id) {
              case 1:
                dynamicColor = "bg-[#FF6F61]";
                break;
              case 2:
                dynamicColor = "bg-[#B8E986]";
                break;
              case 3:
                dynamicColor = "bg-[#F7A8B8]";
                break;
              case 4:
                dynamicColor = "bg-[#B39DDB]";
                break;
            }
            return (
              <div key={learning.id} className="relative inline-block group ">
                <div
                  className={`absolute inset-0 bg-black z-0 transition-all duration-200 translate-2 group-hover:translate-3`}
                />
                <Card
                  className={`${dynamicColor} group-hover:-translate-3   gap-3`}
                >
                  <img src={learning?.thumbnail} alt={learning?.name} />
                  <p className=" w-full absolute text-3xl text-center text-wrap mt-12">
                    {learning?.name}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </h2>
    </section>
  );
};

export default Learnings;
