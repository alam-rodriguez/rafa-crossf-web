"use client";

import CustomHr from "@/components/CustomHr";
import useWidth from "@/hooks/useWidth/useWidth";
import React, { useEffect } from "react";

import ImageBenefits from "@/components/benefits/ImageBenefits";
import TextMainBenefits from "./TextMainBenefits";
import BenefitsList from "./benefits-list/BenefitsList";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import CardsList from "@/components/cards/CardsList";
import Card from "@/components/cards/Card";

const page = () => {
  const { width } = useWidth();

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div>
      <ImagesMain
        img="https://www.onelifefitness.com/hubfs/shutterstock_793611454.png"
        text="COMODIDADES"
      />
      {/* <ImageBenefits /> */}

      <MainText
        text={
          <div>
            <MainTextHead text="No es un gimnasio promedio" />
            <Text text="Rafa Croosf gym ofrece una experiencia de fitness de primera calidad que va más allá de tu entrenamiento. Nuestro gym ofrece equipos de gimnasio de última generación, programas de entrenamiento especializados, clases increíbles y comodidades para alcanzar tus objetivos." />
          </div>
        }
        padding="120px 40px"
      />

      <CardsList>
        <Card
          head="esperiencia de estudio"
          descripion="Tenemos clases para todos los gustos y objetivos. Renueva tu rutina con nuestras clases energizantes en el estudio y aprovecha al máximo tu entrenamiento con la camaradería y el apoyo de los demás."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg?length=1024&name=191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg"
          btnText="EXPLORAR"
          pathNativation=""
        />
        <Card
          head="entrenamiento"
          descripion="¡Únete a Rafa CrossFit Gym y transforma tu vida! Aquí encontrarás entrenamientos desafiantes, un ambiente de apoyo y la motivación que necesitas para alcanzar tus objetivos. No importa tu nivel, en Rafa CrossFit Gym todos somos una familia dedicada a mejorar cada día. ¡Ven y descubre tu verdadero potencial!"
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Trainer.png?length=1024&name=Trainer.png"
          btnText="EXPLORAR"
          pathNativation=""
        />
        <Card
          head="esperiencia de estudio"
          descripion="Tenemos clases para todos los gustos y objetivos. Renueva tu rutina con nuestras clases energizantes en el estudio y aprovecha al máximo tu entrenamiento con la camaradería y el apoyo de los demás."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg?length=1024&name=191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg"
          btnText="EXPLORAR"
          pathNativation=""
        />
        <Card
          head="entrenamiento"
          descripion="¡Únete a Rafa CrossFit Gym y transforma tu vida! Aquí encontrarás entrenamientos desafiantes, un ambiente de apoyo y la motivación que necesitas para alcanzar tus objetivos. No importa tu nivel, en Rafa CrossFit Gym todos somos una familia dedicada a mejorar cada día. ¡Ven y descubre tu verdadero potencial!"
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Trainer.png?length=1024&name=Trainer.png"
          btnText="EXPLORAR"
          pathNativation=""
        />
        <Card
          head="esperiencia de estudio"
          descripion="Tenemos clases para todos los gustos y objetivos. Renueva tu rutina con nuestras clases energizantes en el estudio y aprovecha al máximo tu entrenamiento con la camaradería y el apoyo de los demás."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg?length=1024&name=191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg"
          btnText="EXPLORAR"
          pathNativation=""
        />
        <Card
          head="entrenamiento"
          descripion="¡Únete a Rafa CrossFit Gym y transforma tu vida! Aquí encontrarás entrenamientos desafiantes, un ambiente de apoyo y la motivación que necesitas para alcanzar tus objetivos. No importa tu nivel, en Rafa CrossFit Gym todos somos una familia dedicada a mejorar cada día. ¡Ven y descubre tu verdadero potencial!"
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Trainer.png?length=1024&name=Trainer.png"
          btnText="EXPLORAR"
          pathNativation=""
        />
      </CardsList>

      {/* <TextMainBenefits /> */}

      {/* <BenefitsList /> */}
    </div>
  );
};

export default page;
