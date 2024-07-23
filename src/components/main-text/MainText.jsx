"use client";

import { Icon } from "@iconify/react";
import React from "react";

const MainText = ({ text, padding = "40px" }) => {
  const handleClickJoinUs = () => {
    console.log("first");
  };

  return (
    <div
      className="bg-black text-white text-center"
      style={{
        background:
          "#000 url('https://cdn2.hubspot.net/hubfs/2094550/_p7_fall_2019/carbon%20fiber%20bg.png') center top",
        backgroundSize: "100%",
        padding: padding,
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1400, letterSpacing: ".2em" }}
      >
        {text}
      </div>
    </div>
  );
};

export default MainText;
