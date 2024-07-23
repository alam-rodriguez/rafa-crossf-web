import CustomHr from "@/components/CustomHr";
import React from "react";

const TextMainBenefits = () => {
  return (
    <div
      className="bg-black text-white py-28 px-10 text-center"
      style={{
        background:
          "#000 url('https://cdn2.hubspot.net/hubfs/2094550/_p7_fall_2019/carbon%20fiber%20bg.png') center top",
        backgroundSize: "100%",
      }}
    >
      <div className="mb-12">
        <CustomHr />
        <h1
          className="text-white text-center font-bold py-3 text-lg"
          style={{ letterSpacing: ".2em" }}
        >
          NOT YOUR AVERAGE GYM
        </h1>
        <CustomHr />
      </div>

      <p className="text-lg mb-9 max-w-6xl">
        Onelife offers a premium fitness experience that extends beyond your
        workout. Our locations offer cutting-edge gym equipment, specialized
        training programs, awesome classes and amenities to reach your goals.
      </p>
    </div>
  );
};

export default TextMainBenefits;
