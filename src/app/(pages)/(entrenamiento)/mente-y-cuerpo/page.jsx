"use client";

import Card from "@/components/cards/Card";
// import Card from "@/components/home/cards/Card";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import { Button } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <div>
      <ImagesMain
        img="https://www.onelifefitness.com/hubfs/191117_OL_SS_Mind_Body_0372.jpg"
        text="CLASES DE PILATES, YOGA Y BARRE"
      />
      <MainText
        text={
          <div>
            <MainTextHead text="Medita con nosotros y deja que tus preocupaciones se alejen." />

            <Text
              text={
                <>
                  <span>
                    Rafa Cross Gym cree que una mente fuerte conduce a un cuerpo
                    fuerte. Conecta tu cerebro con tu entrenamiento en nuestras
                    clases Mente+Cuerpo. ¡Inscríbete en una clase ahora!
                  </span>
                  <br />
                  <br />
                  <span>
                    Relájate, pierde peso o desintoxica tu cuerpo, nuestras
                    clases están diseñadas para enseñarte cómo aumentar la
                    fuerza y la flexibilidad de tu cuerpo mientras relajas y
                    calmas la mente. Conéctate contigo mismo y con los demás en
                    un entorno libre de estrés diseñado para eliminar la
                    negatividad. Ofrecemos clases de yoga, pilates y barra en
                    una amplia gama de clases grupales para todos los niveles y
                    objetivos.
                  </span>
                </>
              }
            />
            <Button>contacta a nuestro director de fitness grupal</Button>
          </div>
        }
        padding="120px 40px"
      />

      <div className="py-24 px-3 max-w-screen-xl mx-auto">
        <Card
          head="PILATES"
          descripion="Pilates es un sistema de ejercicios diseñado para fortalecer, alargar y equilibrar el cuerpo. Ofrecemos clases de Pilates Mat a través de nuestro Programa de Fitness Grupal y sesiones con aparatos a través de nuestro programa de Pilates."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Mind_Body_0352.jpg?length=1024&name=191117_OL_SS_Mind_Body_0352.jpg"
          btnText=""
          pathNativation=""
        />
        <Card
          head="yoga"
          descripion="El yoga te ayudará a mantener y mejorar el equilibrio, la fuerza y ​​la flexibilidad mediante una secuencia de posturas de yoga o asanas. Si te concentras no solo en la postura sino también en las transiciones, sentarás las bases para comenzar o continuar con tu práctica de yoga."
          imageSide="right"
          imageUrl="https://img.freepik.com/fotos-premium/grupo-personas-haciendo-yoga-gimnasio_192217-1734.jpg"
          btnText=""
          pathNativation=""
        />

        <Card
          head="PILATES"
          descripion="Pilates es un sistema de ejercicios diseñado para fortalecer, alargar y equilibrar el cuerpo. Ofrecemos clases de Pilates Mat a través de nuestro Programa de Fitness Grupal y sesiones con aparatos a través de nuestro programa de Pilates."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Mind_Body_0352.jpg?length=1024&name=191117_OL_SS_Mind_Body_0352.jpg"
          btnText=""
          pathNativation=""
        />
        <Card
          head="yoga"
          descripion="El yoga te ayudará a mantener y mejorar el equilibrio, la fuerza y ​​la flexibilidad mediante una secuencia de posturas de yoga o asanas. Si te concentras no solo en la postura sino también en las transiciones, sentarás las bases para comenzar o continuar con tu práctica de yoga."
          imageSide="right"
          imageUrl="https://img.freepik.com/fotos-premium/grupo-personas-haciendo-yoga-gimnasio_192217-1734.jpg"
          btnText=""
          pathNativation=""
        />
        <Card
          head="PILATES"
          descripion="Pilates es un sistema de ejercicios diseñado para fortalecer, alargar y equilibrar el cuerpo. Ofrecemos clases de Pilates Mat a través de nuestro Programa de Fitness Grupal y sesiones con aparatos a través de nuestro programa de Pilates."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Mind_Body_0352.jpg?length=1024&name=191117_OL_SS_Mind_Body_0352.jpg"
          btnText=""
          pathNativation=""
        />
        <Card
          head="yoga"
          descripion="El yoga te ayudará a mantener y mejorar el equilibrio, la fuerza y ​​la flexibilidad mediante una secuencia de posturas de yoga o asanas. Si te concentras no solo en la postura sino también en las transiciones, sentarás las bases para comenzar o continuar con tu práctica de yoga."
          imageSide="right"
          imageUrl="https://img.freepik.com/fotos-premium/grupo-personas-haciendo-yoga-gimnasio_192217-1734.jpg"
          btnText=""
          pathNativation=""
        />
      </div>
    </div>
  );
};

export default page;
