import React from "react";
import SectionText from "../components/section-text";
import Ramen from "/ramen.png";

const ThankYou = () => {
  return (
    <section
      id="thank-you"
      className="relative top-56 flex justify-center min-h-screen"
    >
      <h2 className="text-[8rem] font-bold text-gray-900 ">
        <SectionText text="THANK YOU!" />
      </h2>
    </section>
  );
};

export default ThankYou;
