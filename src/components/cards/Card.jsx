"use client";

import React from "react";
import CustomHr from "../CustomHr";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import useWidth from "@/hooks/useWidth/useWidth";

const Card = ({
  head,
  descripion,
  imageSide,
  imageUrl,
  btnText,
  pathNativation,
}) => {
  const { width } = useWidth();

  const router = useRouter();

  return (
    <div
      className={`mx-auto flex flex-wrap    ${
        width < 768
          ? "flex-col-reverse"
          : imageSide == "right"
          ? "flex flex-row-reverse"
          : ""
      }  mb-12 w-full h-96- overflow-hidden- bg-black`}
    >
      <div className="basis-1/2 lg:basis-1/3 bg-black p-10 lg:p-24 text-white overflow-hidden">
        <div className="mb-4">
          <CustomHr mxcenter={false} />
          <h2
            className="text-white text-start font-bold py-2 text-lg uppercase"
            style={{ letterSpacing: ".2em" }}
          >
            {head}
          </h2>
          <CustomHr mxcenter={false} />
        </div>
        <p className="text-sm font-normal leading-7 mb-7">{descripion}</p>
        {btnText != false ? (
          <Button
            className="text-white rounded tracking-widest font-medium py-3 px-6"
            variant="bordered"
            onClick={() => router.push(pathNativation)}
          >
            {btnText}
          </Button>
        ) : (
          <></>
        )}
      </div>
      <div
        className="basis-1/2 lg:basis-2/3 min-h-96-"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          clipPath:
            width > 768
              ? imageSide == "left"
                ? "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
                : "polygon(0% 0, 100% 0, 85% 100%, 0% 100%)"
              : "",
          minHeight: width < 768 ? "300px" : "",
        }}
      ></div>
    </div>
  );
};

export default Card;
