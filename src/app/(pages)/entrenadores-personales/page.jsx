import React from "react";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import { Button } from "@nextui-org/react";
import Card from "@/components/cards/Card";
import Activity from "@/components/home/activities/Activity";

const page = () => {
  return (
    <>
      <ImagesMain
        img="https://www.onelifefitness.com/hubfs/shutterstock_793611454.png"
        text="PERSONAL TRAINING"
      />
      <MainText
        text={
          <div>
            <MainTextHead text="GET A COMPLIMENTARY TRAINING SESSION AND REFRESH YOUR WORKOUT ROUTINE TODAY!" />

            <Text
              text="Enjoy a complimentary training session with one of our awesome
              personal trainers to bring out your best with a fun, high energy
              workout that’ll help you reach your goals. Whether you want to
              lose weight, increase strength, train for a new year’s event or
              just get that extra push to refresh your routine, we’re here to
              help."
            />
            <Button>GET A FREE TRAINING SESSION</Button>
          </div>
        }
        padding="120px 40px"
      />

      <div className="py-24 px-3 max-w-screen-xl mx-auto">
        <Card
          head="Alam Rodriguez"
          descripion="Alam Rodríguez es un entrenador personal altamente respetado y reconocido en la industria del fitness. Con más de una década de experiencia, Alam ha dedicado su vida a ayudar a personas de todas las edades y niveles de condición física a alcanzar sus objetivos de salud y bienestar."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg?length=1024&name=191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg"
          btnText="OBTENER SESION"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="Alam Rodriguez"
          descripion="Alam Rodríguez es un entrenador personal altamente respetado y reconocido en la industria del fitness. Con más de una década de experiencia, Alam ha dedicado su vida a ayudar a personas de todas las edades y niveles de condición física a alcanzar sus objetivos de salud y bienestar."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg?length=1024&name=191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg"
          btnText="OBTENER SESION"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="Alam Rodriguez"
          descripion="Alam Rodríguez es un entrenador personal altamente respetado y reconocido en la industria del fitness. Con más de una década de experiencia, Alam ha dedicado su vida a ayudar a personas de todas las edades y niveles de condición física a alcanzar sus objetivos de salud y bienestar."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg?length=1024&name=191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg"
          btnText="OBTENER SESION"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
      </div>

      <div className="my-14 py-40 bg-black text-white">
        <MainTextHead text="CLIENTS RECEIVE" />
        <div className="flex flex-wrap mb-32">
          <Activity
            icon="solar:swimming-outline"
            activity="CUSTOM WORKOUTS"
            description="Build for your budget and schedule."
          />
          <Activity
            icon="solar:swimming-outline"
            activity="CUSTOM WORKOUTS"
            description=""
          />
          <Activity
            icon="solar:swimming-outline"
            activity="CUSTOM WORKOUTS"
            description=""
          />
          <Activity
            icon="solar:swimming-outline"
            activity="CUSTOM WORKOUTS"
            description=""
          />
          <Activity
            icon="solar:swimming-outline"
            activity="CUSTOM WORKOUTS"
            description=""
          />
          <Activity
            icon="solar:swimming-outline"
            activity="CUSTOM WORKOUTS"
            description=""
          />
        </div>
        <div className="flex justify-center">
          <Button className="">GET A FREE TRAINING SESSION</Button>
        </div>
      </div>
    </>
  );
};

export default page;
