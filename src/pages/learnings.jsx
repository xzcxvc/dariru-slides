import React from "react";
import SectionText from "../components/section-text";
import Card from "../components/card";
import { learnings } from "../constants";
const Learnings = () => {
  return (
    <section id="learnings" className="relative min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 ">
        <SectionText text="LEARNINGS" />
        <div className="flex font-sharetech justify-evenly relative p-64 flex items-center  gap-3">
          {learnings?.map((learning) => {
            return (
              <Card>
                <p className=" text-end ">{learning?.name}</p>
              </Card>
            );
          })}
        </div>
      </h2>
    </section>
  );
};

export default Learnings;
