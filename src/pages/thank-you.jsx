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

      {/* <div
        className={`bg-[#07182E] w-[190px] h-[254px] rounded-[20px] relative justify-center items-center flex overflow-hidden

            before:content-['']  before:absolute before:w-[120px] before:h-[120%] before:bg-gradient-to-t
            before:from-red-400 before:via-orange-400 before:to-pink-900 before:transition-all before:duration-300 before:animate-[spin_3s_linear_infinite]
            after:content-[''] after:absolute 
            after:inset-[4px] 
            after:bg-[#07182E] after:rounded-[15px]
            `}
      >
        <p className="z-[999] text-white font-sharetech text-3xl">Card</p>
      </div> */}
    </section>
  );
};

export default ThankYou;
