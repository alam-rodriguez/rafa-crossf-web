"use client";

import React from "react";
import CustomHr from "../CustomHr";
import useWidth from "@/hooks/useWidth/useWidth";
import { Button } from "@nextui-org/react";

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
          src="https://cdn2.hubspot.net/hubfs/2094550/3rd%20edit%204_26-1.mp4"
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
              YOUR JOURNEY STARTS HERE
            </h1>
            <CustomHr width={110} />
          </div>
          <Button
            className="text-white text-sm py-3 px-12"
            variant="bordered"
            style={{ border: "1px solid #fff", borderRadius: 3 }}
          >
            explorar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoSecundary;
