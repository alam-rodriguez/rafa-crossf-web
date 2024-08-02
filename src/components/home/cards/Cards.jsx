"use client";

import React, { useEffect } from "react";
// import { Card } from "@nextui-org/react";
import Card from "./Card";
import useWidth from "@/hooks/useWidth/useWidth";

const Cards = () => {
  const { width } = useWidth();

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div className="bg-gray-100 pt-28 pb-20">
      <div className="px-2 w-full mx-auto " style={{ maxWidth: 1400 }}>
        <div
          className={`flex flex-wrap flex-col- ${
            width < 848 ? " flex-col " : "flex-row"
          }`}
        >
          <Card
            img="https://th.bing.com/th/id/R.42c0c7f83d0ac6b5ab20d18ae0177162?rik=sMP7xNzsl%2bBisw&riu=http%3a%2f%2fgymatlantastudio.com%2fphoto%2fslide5.jpg&ehk=1YSs7tUz8Fggw0D1LIykiL%2b2Qk3HaR%2bRKMpjgoqEe80%3d&risl=&pid=ImgRaw&r=0"
            title="VIRTUAL CLUB TOURS"
            subTitle="Take a Virtual Tour of our Onelife Fitnes locations."
            link=""
          />
          <Card
            img="https://www.orbitfitness.com.au/img/cms/Jumping%20Exercises.jpg"
            title="Membership and Locations"
            subTitle="Unlimited boutique studio classes all under one roof, all included with your membership."
            link=""
          />
          <Card
            img="https://www.onelifefitness.com/hubfs/IMG_0021.jpg"
            title="AirPHX"
            subTitle="We have purchased and have installed AirPHX in every club that we operate. We believe AirPHX to be the world’s most effective air and surface disinfectant, and sanitizing devices on the market."
            link=""
          />
          <Card
            img="https://www.onelifefitness.com/hubfs/24-PT-Photo2.png"
            title="Membership and Locations"
            subTitle="Onelife has locations and membership opportunities to fit your lifestyle, including convenient multi-gym options so you can work out near home, work and on the road. "
            link=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
