import useWidth from "@/hooks/useWidth/useWidth";
import React from "react";
import CustomHr from "../CustomHr";

const CardsFlexList = ({
  hasHead = false,
  listTitle,
  listSubtitle,
  children,
}) => {
  const { width } = useWidth();

  return (
    <div className="bg-gray-100 pt-28 pb-20">
      {hasHead ? (
        <div className="">
          <div className="p-10 pb-5 text-center">
            <CustomHr />
            <p
              className="text-lg font-semibold py-3"
              style={{ letterSpacing: ".2em" }}
            >
              {listTitle}
            </p>
            <CustomHr />
          </div>
          <p className="text-lg leading-9 mb-12 text-center">{listSubtitle}</p>
        </div>
      ) : null}

      <div className="px-2 w-full mx-auto " style={{ maxWidth: 1400 }}>
        <div
          className={`flex flex-wrap flex-col- ${
            width < 848 ? " flex-col " : "flex-row"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardsFlexList;
