import React from "react";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import { Button } from "@nextui-org/react";
import Card from "@/components/cards/Card";
import Activity from "@/components/home/activities/Activity";
import CardsList from "@/components/cards/CardsList";

const page = () => {
  return (
    <>
      <ImagesMain
        img="https://koacenter.es/wp-content/uploads/2018/04/Entrenador-personal-barcelona.jpg"
        text="entrenadores personales"
      />
      <MainText
        text={
          <div>
            <MainTextHead text="¡Obtén una sesión de entrenamiento gratuita y renueva tu rutina de ejercicios hoy mismo!" />

            <Text text="Disfruta de una sesión de entrenamiento gratuita con uno de nuestros increíbles entrenadores personales para sacar lo mejor de ti con un entrenamiento divertido y lleno de energía que te ayudará a alcanzar tus objetivos. Ya sea que quieras perder peso, aumentar tu fuerza, entrenar para un evento de año nuevo o simplemente obtener ese empujón adicional para renovar tu rutina, estamos aquí para ayudarte." />
            <Button className="text-wrap">
              Obten una sesión de formación gratuita
            </Button>
          </div>
        }
        padding="120px 40px"
      />

      <CardsList>
        <Card
          head="Alam Rodriguez"
          descripion="Alam Rodríguez es un entrenador personal altamente respetado y reconocido en la industria del fitness. Con más de una década de experiencia, Alam ha dedicado su vida a ayudar a personas de todas las edades y niveles de condición física a alcanzar sus objetivos de salud y bienestar."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/20OL_A%20Proven%20Formula_1000x1000.png?length=1024&name=20OL_A%20Proven%20Formula_1000x1000.png"
          btnText="OBTENER SESION"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="Alam Rodriguez"
          descripion="Alam Rodríguez es un entrenador personal altamente respetado y reconocido en la industria del fitness. Con más de una década de experiencia, Alam ha dedicado su vida a ayudar a personas de todas las edades y niveles de condición física a alcanzar sus objetivos de salud y bienestar."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/20OL_Benefits_1000x1000.png?length=1024&name=20OL_Benefits_1000x1000.png"
          btnText="OBTENER SESION"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="Alam Rodriguez"
          descripion="Alam Rodríguez es un entrenador personal altamente respetado y reconocido en la industria del fitness. Con más de una década de experiencia, Alam ha dedicado su vida a ayudar a personas de todas las edades y niveles de condición física a alcanzar sus objetivos de salud y bienestar."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/20OL_A%20Proven%20Formula_1000x1000.png?length=1024&name=20OL_A%20Proven%20Formula_1000x1000.png"
          btnText="OBTENER SESION"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
      </CardsList>

      <div className="my-14 py-40 bg-black text-white">
        <MainTextHead text="Las clientes reciben" />
        <div className="flex flex-wrap mb-32">
          <Activity
            icon="icon-park-outline:notepad"
            activity="entrenamiento personalizado"
            description="Diseñado para tu presupuesto y agenda."
          />
          <Activity
            icon="tabler:run"
            activity="Entrenamiento de resistencia"
            description=""
          />
          <Activity
            icon="lucide:biceps-flexed"
            activity="ENTRENAMIENTO DE FUERZA"
            description=""
          />
          <Activity
            icon="iconoir:learning"
            activity="capacitacion"
            description=""
          />
          <Activity
            icon="ion:body-outline"
            activity="flexibilidad"
            description=""
          />
          <Activity
            icon="carbon:apple-dash"
            activity="Orientación nutricional"
            description=""
          />
        </div>
        <div className="flex justify-center">
          <Button className="">
            Obten una sesión de entrenamiento personal gratuita
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
