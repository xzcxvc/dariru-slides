import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${className} flex items-center justify-center z-50
        hover:border-1 
        hover:border-black 
        hover:text-white 
        hover:cursor-pointer hover:-translate-1`}
    >
      {children}
    </button>
  );
};

export default Button;
