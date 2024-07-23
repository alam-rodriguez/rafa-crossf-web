import CustomHr from "@/components/CustomHr";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import { Icon } from "@iconify/react";
import React from "react";

const page = () => {
  return (
    <div>
      <ImagesMain
        img="https://www.onelifefitness.com/hubfs/shutterstock_793611454.png"
        text="HORARIOS DE CLASES"
      />
      <MainText
        text={
          <div>
            <MainTextHead text="FITNESS CLASS DESCRIPTIONS" />

            <p>Learn about group exercise options at your local Onelife.</p>
          </div>
        }
        padding="120px 40px"
      />

      <div className="flex gap-1 py-20 mx-auto" style={{ maxWidth: 1240 }}>
        <ClassType
          icon="material-symbols-light:water-drop-outline"
          text="signature"
          color=""
        />
        <ClassType
          icon="material-symbols-light:water-drop-outline"
          text="agua"
          color="text-blue-700"
        />
        <ClassType
          icon="material-symbols-light:water-drop-outline"
          text="cario"
          color="text-red-700"
        />
        <ClassType
          icon="material-symbols-light:water-drop-outline"
          text="ciclismo"
          color="text-green-700"
        />
        <ClassType
          icon="material-symbols-light:water-drop-outline"
          text="caliente"
          color="text-orange-700"
        />
        <ClassType
          icon="material-symbols-light:water-drop-outline"
          text="mente/cuerpo"
          color="text-violet-700"
        />
        <ClassType
          icon="material-symbols-light:water-drop-outline"
          text="avanzado"
          color="text-gray-700"
        />
        <ClassType
          icon="material-symbols-light:water-drop-outline"
          text="fuerza"
          color=""
        />
      </div>
    </div>
  );
};

export default page;

// eslint-disable-next-line react/prop-types
const ClassType = ({ icon, text, color }) => {
  return (
    <div className="w-20 h-2- border-4- bg-slate-700 uppercase ">
      <Icon className={`mx-auto mb-0 text-5xl ${color}`} icon={icon} />
      <p
        className={`text-xs- text-center font-medium text-white- ${color}`}
        style={{ fontSize: 10 }}
      >
        {text}
      </p>
    </div>
  );
};
