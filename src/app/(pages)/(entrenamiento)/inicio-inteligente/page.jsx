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
        img="https://www.onelifefitness.com/hubfs/smartstartheader.png"
        text="INICIO INTELIGENTE Y EVALUACIÓN DE COMPOSICIÓN CORPORAL"
      />
      <MainText
        text={
          <div>
            <MainTextHead text="SmartStart gratuito y análisis de composición corporal" />

            <Text text="En Rafa Crossf Gym, tu salud y bienestar son nuestra máxima prioridad. Por eso, ofrecemos la visita gratuita Smart Start con un entrenador personal certificado para revisar tus objetivos, tu historial médico y tu salud general. Juntos, trabajamos en un plan de acondicionamiento físico que te ayudará a alcanzar tus objetivos y aprovechar al máximo tus visitas. Nuestro análisis de composición corporal te permitirá hacer un seguimiento de las fortalezas y debilidades de las diferentes áreas de tu cuerpo." />
            <Button>AGENDAR SESION</Button>
          </div>
        }
        padding="120px 40px"
      />

      <div className="py-24 px-3 max-w-screen-xl mx-auto">
        <Card
          head="GET RESULTS"
          descripion="We work with many different types of bodies, fitness levels, and fitness goals. Have you just started your fitness journey? Do you have a big life event coming up that you’d like to lose some weight for? Do you need to train for a sports event? Are you trying to bulk up in muscle or tone up? Do your kids need training or a summer camp? We can work with all of that and more! We’ll discuss your short and long-term fitness goals and develop a fitness plan for RESULTS!"
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/24-PT-Photo2.png?length=1024&name=24-PT-Photo2.png"
          btnText="SCHEDULE A SESSION"
          pathNativation="/"
        />
        <Card
          head="GET RESULTS"
          descripion="We work with many different types of bodies, fitness levels, and fitness goals. Have you just started your fitness journey? Do you have a big life event coming up that you’d like to lose some weight for? Do you need to train for a sports event? Are you trying to bulk up in muscle or tone up? Do your kids need training or a summer camp? We can work with all of that and more! We’ll discuss your short and long-term fitness goals and develop a fitness plan for RESULTS!"
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/20OL_Work%20Smarter_1000x1000.png?length=1024&name=20OL_Work%20Smarter_1000x1000.png"
          btnText="SCHEDULE A SESSION"
          pathNativation="/"
        />
        <Card
          head="GET RESULTS"
          descripion="We work with many different types of bodies, fitness levels, and fitness goals. Have you just started your fitness journey? Do you have a big life event coming up that you’d like to lose some weight for? Do you need to train for a sports event? Are you trying to bulk up in muscle or tone up? Do your kids need training or a summer camp? We can work with all of that and more! We’ll discuss your short and long-term fitness goals and develop a fitness plan for RESULTS!"
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/24-PT-Photo2.png?length=1024&name=24-PT-Photo2.png"
          btnText="SCHEDULE A SESSION"
          pathNativation="/"
        />
        <div className="flex justify-center">
          <Button className="">SESIÓN DE GIMNASIO SMART START GRATUITA</Button>
        </div>
      </div>
      <MainText
        text={
          <div>
            <MainTextHead text="empieza" />

            <Text text="Para comenzar a lograr tus objetivos y para obtener más información sobre nuestro entrenamiento personal con SmartStart, comunícate con nosotros completando el formulario de contacto que se encuentra más arriba. Para encontrarnos ve a la seccio 'UBICACION' de la web en tu dispositivo móvil. ¡Uno de los miembros de nuestro personal estará encantado de guiarte en el proceso de comenzar con una sesión de gimnasio SmartStart con un entrenador personal hoy mismo!" />
            <Button>EMPEZAR</Button>
          </div>
        }
        padding="120px 40px"
      />
    </div>
  );
};

export default page;
