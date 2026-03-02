import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100, onComplete, showCursor }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // Track the current character index
  const [cursor, setCursor] = useState("|"); // Terminal cursor

  // Simulate typing effect
  useEffect(() => {
    if (index < text.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1); // Increment index after each character
      }, speed);

      return () => clearInterval(typingInterval); // Cleanup the interval when component unmounts
    }

    // Once typing is finished, trigger the onComplete callback
    if (index === text.length) {
      onComplete && onComplete();
    }
  }, [index, text, speed, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setCursor((prev) => (prev === "|" ? "" : "|")); // Toggle cursor visibility
      }, 500); // Toggle every 500ms

      return () => clearInterval(cursorInterval); // Cleanup the cursor interval
    } else {
      setCursor(""); // Remove cursor when not typing
    }
  }, [showCursor]);

  return (
    <div style={{ whiteSpace: "pre" }}>
      <div>
        {displayedText}
        {cursor}
      </div>
    </div>
  );
};

export default TypingEffect;
