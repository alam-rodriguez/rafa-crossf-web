import React, { useEffect } from "react";
import CustomHr from "../CustomHr";
import { zusPages } from "@/zustand/pages/zusPages";

const Achievements = ({ title, subtitle, Achievements = [] }) => {
  useEffect(() => {
    console.log(Achievements);
  }, [Achievements]);

  if (Achievements.length > 0)
    return (
      <div className="">
        <div className="p-10 pb-5 text-center">
          <CustomHr />
          <p
            className="text-lg font-semibold py-3 uppercase"
            style={{ letterSpacing: ".2em" }}
          >
            {title}
          </p>
          <CustomHr />
        </div>
        <p className="text-lg leading-9 mb-12 text-center">{subtitle}</p>
        <div className="flex flex-wrap">
          {Achievements.map((achievement) => (
            <Achievement
              key={achievement.id}
              title={achievement.title}
              subtitle={achievement.subtitle}
              image={achievement.image.url}
            />
          ))}
        </div>
      </div>
    );
};

export default Achievements;

const Achievement = ({ title, subtitle, image }) => {
  const { domain } = zusPages();

  return (
    <div className="border-4-border-blue-700 basis-1/3 p-3">
      <p className="text-xs text-center font-semibold">{title}</p>
      <img className="w-full h-32 object-contain" src={domain + image} alt="" />
      <p className="text-xs text-center">{subtitle}</p>
    </div>
  );
};
