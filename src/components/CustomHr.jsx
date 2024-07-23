import React from "react";

const CustomHr = ({ width = 56, mxcenter = true, height = 2 }) => {
  return (
    <hr
      className={`border-0 bg-gray-300 ${mxcenter ? "mx-auto" : ""}`}
      style={{ height: height, width: width }}
    />
  );
};

export default CustomHr;
