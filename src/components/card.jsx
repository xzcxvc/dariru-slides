import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`${className} border-1 h-[500px] !w-[720px]`}>{children}</div>
  );
};

export default Card;
