import React, { useCallback, useEffect, useRef } from "react";
import SectionText from "../components/section-text";
import { realizations } from "../constants";
import Card from "../components/card";
import TypingEffect from "../components/typing-effect";
import { useState } from "react";
import { useInView } from "framer-motion";

const Realizations = () => {
  const [index, setIndex] = useState(0); // Track the current realization index
  const [isTyping, setIsTyping] = useState(false); // Track if we're still typing

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  // Start typing asynchronously when first realization is in view
  useEffect(() => {
    if (isInView && index === 0) {
      const timer = setTimeout(() => {
        setIsTyping(true); // safely trigger typing
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  const handleTypingComplete = () => {
    setIsTyping(false); // Stop typing once the text is complete
  };

  // Handle Enter key to move to next realization
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.key === "Enter" &&
        !isTyping &&
        index < realizations.length - 1
      ) {
        setIndex((prev) => prev + 1);
        setIsTyping(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [index, isTyping]);

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
        <div className="font-bitcount h-24 w-full relative top-28 flex flex-col gap-6">
          {realizations.map((item, idx) => {
            // Render all items up to the current index
            if (idx <= index) {
              return (
                <div
                  key={item.id}
                  className="font-semibold text-4xl inline-block relative group"
                  ref={idx === 0 ? ref : null}
                >
                  {/* Only the currently active item is typed */}
                  {isInView && idx === index ? (
                    <Card
                      className={
                        "bg-gradient-to-r from-green-200 via-indigo-300 to-blue-400 w-auto h-20 p-4"
                      }
                    >
                      <TypingEffect
                        text={item.name}
                        speed={40}
                        onComplete={handleTypingComplete} // Trigger the next realization after typing
                        showCursor={idx === index} // Show cursor only for the currently typing item
                      />
                    </Card>
                  ) : (
                    <Card
                      className={
                        "bg-gradient-to-r from-green-200 via-indigo-300 to-blue-400 w-auto h-20 p-4"
                      }
                    >
                      {item.name}
                    </Card>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Realizations;
