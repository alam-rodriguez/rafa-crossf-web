"use client";

import CardBig from "@/components/cards/Card";
import CardsList from "@/components/cards/CardsList";
// import Card from "@/components/cards/Card";
import CustomHr from "@/components/CustomHr";
import Card from "@/components/home/cards/Card";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import useWidth from "@/hooks/useWidth/useWidth";
// import { Card } from "@nextui-org/react";
import React from "react";

const page = () => {
  const { width } = useWidth();

  return (
    <div>
      <ImagesMain
        img="https://st4.depositphotos.com/16122460/41166/i/450/depositphotos_411666682-stock-photo-woman-cleaning-dumbbells-disinfectant-spray.jpg"
        text="lo que hacemos para mantenerte seguro"
      />

      <MainText
        text={
          <div>
            <MainTextHead text="¡Estamos ansiosos por verte en el club!" />
            <Text text="Ahora más que nunca, sabemos lo importante que es nuestra salud física y mental. El ejercicio fortalece el sistema inmunológico y te ayudará a sentirte más feliz y a vivir de manera más saludable. Estamos aquí para ayudarte a retomar tu rutina de ejercicios y esperamos poder servirte." />
            <Text text="Consulta nuestras últimas pautas de limpieza y seguridad a continuación." />
          </div>
        }
        padding="120px 40px"
      />

      <div className="pt-28 pb-20">
        <div className="">
          <div className="p-10 pb-5 text-center">
            <CustomHr />
            <p
              className="text-lg font-semibold py-3"
              style={{ letterSpacing: ".2em" }}
            >
              Esto es lo que estamos haciendo para mantenerte seguro
            </p>
            <CustomHr />
          </div>
          <p className="text-lg leading-9 mb-12 text-center">
            Continuamente limpiamos y preparamos nuestras instalaciones con los
            más completos sistemas de desinfección y protocolos de saneamiento,
            junto con el desarrollo de nuestras Directrices y Protocolos para
            los Equipos del gym.
          </p>
        </div>

        <div className="px-2 w-full mx-auto " style={{ maxWidth: 1400 }}>
          <div
            className={`flex flex-wrap flex-col- ${
              width < 848 ? " flex-col " : "flex-row"
            }`}
          >
            <Card
              img="https://www.onelifefitness.com/hubfs/Clean-Stairclimber.png"
              title="A trained Team"
              subTitle="Team members are fully trained and mobilized into a cleaning force to disinfect the high-touch and high traffic areas so your club is always sparkling clean."
              link=""
            />
            <Card
              img="https://www.onelifefitness.com/hubfs/Clean-Stairclimber.png"
              title="Daily Deep Cleaning"
              subTitle={
                <>
                  <span>
                    We are utilizing industrial deep cleaning systems including
                    for daily deep-cleaning of all surfaces throughout the club
                    on a continuous basis
                  </span>
                  <br />
                  <br />
                  <span>
                    We are utilizing industrial deep cleaning systems including
                    for daily deep-cleaning of all surfaces throughout the club
                    on a continuous basis
                  </span>
                </>
              }
              link=""
            />
            <Card
              img="https://www.onelifefitness.com/hubfs/Clean-Stairclimber.png"
              title="More Sanitation Stations and Hand Sanitizer Pumps"
              subTitle={
                <>
                  <span>
                    We have dramatically increased the number of sanitation
                    stations throughout the clubs, which include hospital-grade
                    disinfectants for members to wipe down the equipment before
                    and after use
                  </span>
                  <br />
                  <br />
                  <span>
                    We have dramatically increased the number of sanitation
                    stations throughout the clubs, which include hospital-grade
                    disinfectants for members to wipe down the equipment before
                    and after use
                  </span>
                </>
              }
              link=""
            />
            <Card
              img="https://www.onelifefitness.com/hubfs/Clean-Stairclimber.png"
              title="AirPHX Air and Surface Disinfectant"
              subTitle={
                <>
                  <span>
                    We have dramatically increased the number of sanitation
                    stations throughout the clubs, which include hospital-grade
                    disinfectants for members to wipe down the equipment before
                    and after use
                  </span>
                  <br />
                  <br />
                  <span>
                    We have dramatically increased the number of sanitation
                    stations throughout the clubs, which include hospital-grade
                    disinfectants for members to wipe down the equipment before
                    and after use
                  </span>
                </>
              }
              link=""
            />
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="p-10 pb-5 text-center mb-16-">
          <CustomHr />
          <p
            className="text-lg font-semibold py-3 uppercase"
            style={{ letterSpacing: ".2em" }}
          >
            Medidas de seguridad en el gym
          </p>
          <CustomHr />
        </div>

        <CardsList>
          <CardBig
            head="Volviendo a tu rutina"
            descripion="Ahora, más que nunca, sabemos lo importante que es nuestra salud física y mental. Hable con el equipo de acondicionamiento físico para obtener su sesión de entrenamiento personal 'Re-Start' gratuita para ayudarlo a establecer sus nuevas metas y el camino hacia el éxito."
            imageSide="right"
            imageUrl="https://th.bing.com/th/id/OIP.KTwvGQCyYBDZisC0MQky6wHaE6?rs=1&pid=ImgDetMain"
            btnText=""
            pathNativation="/entrenadores-personales/alam-rodriguez"
          />
        </CardsList>
      </div>
    </div>
  );
};

export default page;
