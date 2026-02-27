import React from "react";

const Shadow = ({ className }) => {
  return <div className={`${className} absolute -z-50 inset-0`} />;
};

export default Shadow;
