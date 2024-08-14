import { zusMainInformation } from "@/zustand/main-information/zusMainInformation";
import React from "react";

const Video = () => {
  const { mainVideo } = zusMainInformation();

  return (
    // <div>
    <video
      className="w-full h-full object-cover"
      style={{ maxHeight: 800, minHeight: 382 }}
      autoPlay
      muted
      loop
      playsInline
      // src="https://2094550.fs1.hubspotusercontent-na1.net/hubfs/2094550/OL_OTT_30_final_1920x1080_NO%20AUDIO.%20(1)-1.mp4"
      src={mainVideo}
      // src="https://videos.pexels.com/video-files/855828/855828-hd_1920_1080_30fps.mp4"
    ></video>

    // </div>
  );
};

export default Video;
