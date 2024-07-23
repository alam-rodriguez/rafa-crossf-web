import CustomHr from "@/components/CustomHr";
import Map from "@/components/home/Map";
import React from "react";

const page = () => {
  return (
    <div className="py-28 pt-0">
      {/* <div className="mb-10 text-center p-10 pb-5">
        <CustomHr width={56} />
        <h2
          className="text-lg leading-5 py-3 font-bold"
          style={{ letterSpacing: ".2em" }}
        >
          FIND THE ONELIFE FITNESS CLOSEST TO YOU
        </h2>
        <CustomHr width={56} />
      </div> */}

      <Map />
    </div>
  );
};

export default page;
