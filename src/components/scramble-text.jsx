import { useEffect, useState } from "react";

export default function ScrambleText({ text, start, loopInterval = 2000 }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    let scrambling = true;
    let interval;

    const doScramble = () => {
      frame = 0;
      scrambling = true;

      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (!scrambling) return letter;
              if (index < frame) return text[index];
              return String.fromCharCode(97 + Math.floor(Math.random() * 26));
            })
            .join(""),
        );

        frame += 0.5;

        if (frame >= text.length) {
          scrambling = false;
          setDisplayText(text);

          clearInterval(interval);

          // wait loopInterval ms before starting again
          setTimeout(() => {
            doScramble();
          }, loopInterval);
        }
      }, 40);
    };

    doScramble();

    return () => clearInterval(interval);
  }, [start, text, loopInterval]);

  return <>{displayText}</>;
}
