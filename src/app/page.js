import React from "react";

import Cards from "@/components/home/cards/Cards";
import { Icon } from "@iconify/react";
import Video from "@/components/home/Video";
import MainText from "@/components/main-text/MainText";
import ImageTeam from "@/components/home/ImageTeam";
import Map from "@/components/home/Map";
import VideoSecundary from "@/components/home/VideoSecundary";
import Activities from "@/components/home/activities/Activities";
import SocialPosts from "@/components/home/SocialPosts";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Video />
      <MainText
        text={
          <p className="text-lg">
            Make 2024 your best year ever, all for about $1 a day. Amazing
            cardio, strength training, boutique studio classes, expansive turf
            areas, pools and sports. We have more ways to reach your fitness
            goals than anyone!{" "}
            <span
              className="inline-flex items-center text-blue-400 cursor-pointer"
              // onClick={handleClickJoinUs}
            >
              Join Us
              <Icon className="" icon="teenyicons:right-solid" />
            </span>
          </p>
        }
      />
      <Cards />
      <ImageTeam />
      <Map />
      <VideoSecundary />
      <Activities />
      <SocialPosts />
    </main>
  );
}
