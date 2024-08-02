import useWidth from "@/hooks/useWidth/useWidth";
import React from "react";

const Card = ({ img, title, subTitle, link }) => {
  const { width } = useWidth();

  const handleClick = () => {
    console.log(link);
  };

  return (
    <div className="p-4 basis-1/2 mx-auto">
      <div
        className={`w-96- min-w-96- mx-auto ${
          width < 848 ? "bg-black text-white" : "bg-white text-black"
        } m-4 shadow-md h-auto`}
        style={{
          flexGrow: 0,
          flexShrink: 0,
          // flexBasis: "50%",
        }}
        onClick={handleClick}
      >
        <img
          src={img}
          className="object-cover w-full"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
            height: "525px",
          }}
        />
        <div className="p-11 pt-0">
          <div className="" style={{ marginBottom: 27 }}>
            <hr className="w-12 border-0 bg-gray-300" style={{ height: 2 }} />
            <h2
              className="text-lg py-3 font-semibold leading-6 uppercase"
              style={{ letterSpacing: ".2em" }}
            >
              {title}
            </h2>
            {/* <p className="text-lg py-3 font-bold leading-6">{title}</p> */}
            <hr className="w-12 border-0 bg-gray-300" style={{ height: 2 }} />
          </div>
          <p className="text-xs font-medium leading-6 tracking-wide">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
