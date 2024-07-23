"use client";

import React from "react";
import CustomHr from "./CustomHr";
import useWidth from "@/hooks/useWidth/useWidth";

const ImagesMain = ({ img, text }) => {
  const { width } = useWidth();

  return (
    <div
      className=""
      style={{
        // padding: "35vh 0 15vh",
        borderTop: width < 1024 ? "78px solid #000" : "",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${img}')`,
        padding: width > 1024 ? "400px 0" : "35vh 0 15vh",
        backgroundSize: "cover",

        // background: "#000 center top",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full px-2">
        <CustomHr width={110} />
        <h1
          className={`text-white text-center font-normal uppercase ${
            width > 1024 ? " py-10 text-5xl" : "py-4 text-base"
          }`}
          style={{ letterSpacing: ".4em" }}
        >
          {text}
        </h1>
        <CustomHr width={110} />
      </div>
    </div>
  );
};

export default ImagesMain;
