"use client";

import React from "react";
import CustomHr from "../CustomHr";
import useWidth from "@/hooks/useWidth/useWidth";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const VideoSecundary = () => {
  const { width } = useWidth();

  return (
    <div>
      <div
        className="relative overflow-hidden "
        style={{ background: "#000 center center" }}
      >
        <video
          muted
          autoPlay
          loop
          playsInline
          className="absolute min-w-full min-h-full top-0-left-0 object-cover"
          style={{ maxHeight: 2842.5 }}
          // src="https://cdn2.hubspot.net/hubfs/2094550/3rd%20edit%204_26-1.mp4"
          src="https://2094550.fs1.hubspotusercontent-na1.net/hubfs/2094550/OL_OTT_30_final_1920x1080_NO%20AUDIO.%20(1)-1.mp4"
        ></video>
        <div
          className="text-center relative mx-auto"
          style={{
            padding: width < 1024 ? "200px 0" : "400px 0",
            // marginBottom: "110px",
            maxWidth: "1400px",
          }}
        >
          <div className="mb-28">
            <CustomHr width={110} />
            <h1
              className={`text-xl relative text-white text-center font-normal uppercase py-5 ${
                width > 1024 ? " py-10-text-5xl" : "py-4-text-base"
              }`}
              style={{ letterSpacing: ".4em" }}
            >
              TU VIAJE EMPIEZA AQUI
            </h1>
            <CustomHr width={110} />
          </div>
          <Button
            className="text-white text-sm py-3 px-12 font-medium tracking-widest"
            variant="bordered"
            style={{ border: "1px solid #fff", borderRadius: 3 }}
          >
            EXPLORAR
            <Icon className="ms-1" icon="teenyicons:right-solid" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoSecundary;
