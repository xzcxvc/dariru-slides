import React, { useEffect, useRef } from "react";

const GridBackground = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth;
      const y = e.clientY / innerHeight;

      // Adjust multiplier for subtlety
      const offsetX = x * 30;
      const offsetY = y * 30;

      section.style.backgroundPosition = `-${offsetX}px -${offsetY}px, ${30 - offsetX}px ${30 - offsetY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 pointer-events-none min-w-full min-h-screen flex items-center justify-center text-black
      [background-image:linear-gradient(rgba(0,0,0,0.04)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.04)_2px,transparent_2px)]
      [background-size:60px_60px]
      [background-position:0_0,30px_30px]"
    />
  );
};

export default GridBackground;
