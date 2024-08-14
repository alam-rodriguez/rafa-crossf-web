import { zusMainInformation } from "@/zustand/main-information/zusMainInformation";
import React from "react";

const ImageTeam = () => {
  const { imageTeam } = zusMainInformation();

  return (
    <img
      className="w-full h-auto object-cover object-center"
      style={{ maxHeight: "529px" }}
      // src="https://www.onelifefitness.com/hubfs/24-home-youaremore2.png"
      // src="https://as2.ftcdn.net/v2/jpg/04/97/82/13/1000_F_497821300_ittJ1KyrkdWGTBqp4Sc31DJMexkEOrZB.jpg"
      src={imageTeam}
    />
  );
};

export default ImageTeam;
