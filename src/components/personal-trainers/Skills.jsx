import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Activity from "@/components/home/activities/Activity";
import { Button } from "@nextui-org/react";
import { zusMainInformation } from "@/zustand/main-information/zusMainInformation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Skills = ({ skills = [], whatsapp }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(skills);
    console.log(whatsapp);
  }, [skills, whatsapp]);

  const [skillsUser, setSkillsUser] = useState([]);

  useEffect(() => {
    const trainerSkills = Object.keys(skills).filter(
      (skill) => skills[skill] == true
    );
    setSkillsUser(trainerSkills);
    console.log(trainerSkills);
  }, [skills]);

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
        <p className="py-4 text-lg font-bold tracking-widest uppercase">
          habilidades
        </p>
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
      </div>

      <div className="flex flex-wrap mb-32 justify-center">
        {skillsUser.map((skill, i) => (
          <Skill
            key={i}
            icon="material-symbols-light:cardiology-outline"
            skill={skill.split("_").join(" ")}
            description="Fortalece el corazón y quema calorías, mejorando tu salud"
          />
        ))}
        {/* <Activity
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
          icon="ion:body-outline"
          activity="flexibilidad"
          description="Who knew fun and fitness could be so refreshing?"
        />

        <Activity
          icon="iconoir:gym"
          activity="SWIMMING"
          description="Who knew fun and fitness could be so refreshing?"
        />

        <Activity
          icon="mdi:jewel"
          activity="COMODIDADES"
          description="Rafa Crossf Gym te afrece lo que necesitas para alcanzar tus metas."
        /> */}
      </div>

      <div className="text-center ">
        <p
          className="text-sm md:text-lg mb-7"
          style={{ letterSpacing: ".2em" }}
        >
          TODO ESTO Y MUCHO MÁS DESDE SÓLO
        </p>
        <Link href={"/"} target="_blank">
          <Button
            variant="bordered"
            className="text-white text-sm font-semibold tracking-widest py-3 px-12"
            style={{ borderRadius: 3, border: "1px solid #fff" }}
          >
            <span>UNETE</span>
            <Icon className="ms-1" icon="teenyicons:right-solid" />
          </Button>
        </Link>
        {/* <p className="mb-7">
          <span className="text-7xl md:text-8xl">${monthlyPrice}</span>{" "}
          <span className="text-3xl md:text-5xl tracking-wider">
            /MENSUALES
          </span>
        </p>

        <Button
          variant="bordered"
          className="text-white text-sm font-semibold tracking-widest py-3 px-12"
          style={{ borderRadius: 3, border: "1px solid #fff" }}
        >
          <span>UNETE</span>
          <Icon className="ms-1" icon="teenyicons:right-solid" />
        </Button> */}
      </div>
    </div>
  );
};

export default Skills;

const Skill = ({ icon, skill, description }) => {
  const skillAndDescription = {
    cardio: {
      description: "Experto en ejercicios cardioasculares",
      icon: "material-symbols-light:cardiology-outline",
    },
    pesas: {
      description: "Experto en levantamiento de pesas",
      icon: "hugeicons:body-part-muscle",
    },
    ["mente y cuerpo"]: "Relagacion de cuerpo y liberar extres",
    yoga: {
      description: "Entrenador de yoga",
      icon: "iconoir:yoga",
    },
    flexibilidad: {
      description: "Experto en flexibildad humana",
      icon: "ion:body-outline",
    },
    deportes: "Atleta en deportes de alto rendimiento",
    natacion: "Nadador amateur",
    relajacion: "Conocimentos de ejercicios de relajacion",
    masajes: "Masajista experto",
    pilates: "Entrenador de pilates",
    ciclismo: "Ciclista de alto rendimiento",
    aerobicos: "Profecional es ejercicios de aerobiscos",
    ["baile y zumba"]: "Entrenador de zumba y baile",
    estiramiento: "experto en ejercicios de estitamientos",
    ["ejercicios de agilidad"]: "Experto en ejercicios de agiliadad",
    ["ejercicios de movilidad articular"]:
      "Experto en ejercicios de movilidad articular",
    mediticion: "Maestro de la meditacion",
    ["ejercicios de respiracion"]: "Conocimientos en ejercicios de meditacion",
    ["tecnicas de mindfulness"]: "Conocimientos en tecnicas de mindfulness",
  };

  const allSkills_ = [
    "cardio",
    "pesas",
    "mente y cuerpo",
    "yoga",
    "flexibilidad",
    "deportes",
    "natacion",
    "relajacion",
    "masajes",
    "pilates",
    "ciclismo",
    "Aerobicos",
    "Baile/Zumba",
    "Estiramiento",
    "Ejercicios de agilidad",
    "Ejercicios de movilidad articular",
    "mediticion",
    "Ejercicios de respiración",
    "Técnicas de mindfulness",
  ];

  return (
    <div className="text-center p-20 basis-4/12">
      <Icon
        className="mx-auto mb-7 text-7xl"
        icon={skillAndDescription[skill].icon}
      />
      <div className="mb-7">
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 1.8 }}
        />
        <h3
          className="py-2 text-lg uppercase"
          style={{ letterSpacing: ".2em" }}
        >
          {skill}
        </h3>
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 1.8 }}
        />
      </div>
      <p className="text-sm font-medium leading-6">
        {skillAndDescription[skill].description}
      </p>
    </div>
  );
};
