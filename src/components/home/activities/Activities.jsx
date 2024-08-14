import React from "react";
import { Icon } from "@iconify/react";
import Activity from "./Activity";
import { Button } from "@nextui-org/react";
import { zusMainInformation } from "@/zustand/main-information/zusMainInformation";

const Activities = () => {
  const { monthlyPrice } = zusMainInformation();

  return (
    <div
      className="bg-black my-14 py-40 text-white mx-auto"
      style={{ maxWidth: "1400px" }}
    >
      <div className="text-center mb-16">
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
        <p className="py-4 text-lg font-bold tracking-widest">
          VENTAJAS ASOMBROSAS
        </p>
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
      </div>

      <div className="flex flex-wrap mb-32 justify-center">
        <Activity
          icon="material-symbols-light:cardiology-outline"
          activity="cardio"
          description="Fortalece el corazón y quema calorías, mejorando tu salud"
        />
        <Activity
          icon="hugeicons:body-part-muscle"
          activity="pesas"
          description="Levanta pesas, fortalece músculos, aumenta el metabolismo, mejorando tu salud."
        />
        <Activity
          icon="iconoir:yoga"
          activity="mente y cuerpo"
          description="Fortalece el cuerpo, medita y calma la mente."
        />
        <Activity
          icon="carbon:apple-dash"
          activity="plan nutricional"
          description="Hacemos tu plan nutricional ideal"
        />

        <Activity
          icon="hugeicons:equipment-gym-03"
          activity="maquinas"
          description="Tenemos maquinas de ultima generacion."
        />

        <Activity
          icon="mdi:jewel"
          activity="COMODIDADES"
          description="Rafa Crossf Gym te afrece lo que necesitas para alcanzar tus metas."
        />
      </div>

      <div className="text-center ">
        <p
          className="text-sm md:text-lg mb-7"
          style={{ letterSpacing: ".2em" }}
        >
          TODO ESTO Y MUCHO MÁS DESDE SÓLO
        </p>
        <p className="mb-7">
          <span className="text-7xl md:text-8xl">${monthlyPrice}</span>{" "}
          <span className="text-3xl md:text-5xl tracking-wider">
            /MENSUALES
          </span>
        </p>
        {/* <button>JOIN NOW</button> */}
        <Button
          variant="bordered"
          className="text-white text-sm font-semibold tracking-widest py-3 px-12"
          style={{ borderRadius: 3, border: "1px solid #fff" }}
        >
          <span>UNETE</span>
          <Icon className="ms-1" icon="teenyicons:right-solid" />
        </Button>
      </div>
    </div>
  );
};

export default Activities;
