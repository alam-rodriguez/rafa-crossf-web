import React from "react";
import CustomHr from "../CustomHr";

const MainTextHead = ({ text }) => {
  return (
    <div className="mb-12">
      <CustomHr />
      <h1
        className="text-white text-center font-bold py-3 text-lg"
        style={{ letterSpacing: ".2em" }}
      >
        {text}
      </h1>
      <CustomHr />
    </div>
  );
};

export default MainTextHead;
