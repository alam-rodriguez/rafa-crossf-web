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
import usePages from "@/hooks/usePages/usePages";
import { zusPages } from "@/zustand/pages/zusPages";

const page = () => {
  const { pageComodidades, domain } = zusPages();

  useEffect(() => {
    console.log(pageComodidades);
    console.log(domain);
  }, [pageComodidades]);

  const { width } = useWidth();

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div>
      <ImagesMain
        img={
          pageComodidades.backgroundImage &&
          domain + pageComodidades.backgroundImage.url
        }
        text={pageComodidades.imageTitle}
      />
      {/* <ImageBenefits /> */}

      <MainText
        text={
          <div>
            <MainTextHead text={pageComodidades.title} />
            <Text text={pageComodidades.subtitle} />
          </div>
        }
        padding="120px 40px"
      />

      <CardsList>
        {pageComodidades.comodidades &&
          pageComodidades.comodidades.map((comodidad, i) => (
            <Card
              key={comodidad.id}
              head={comodidad.title}
              descripion={comodidad.subtitle}
              imageSide={(i + 1) % 2 === 0 ? "right" : "left"}
              imageUrl={domain + comodidad.imageComodidad.url}
              btnText="EXPLORAR"
              pathNativation=""
            />
          ))}
        {/* <Card
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
        /> */}
      </CardsList>

      {/* <TextMainBenefits /> */}

      {/* <BenefitsList /> */}
    </div>
  );
};

export default page;
