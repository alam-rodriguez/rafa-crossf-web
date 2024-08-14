"use client";

import CardBig from "@/components/cards/Card";
import CardsFlexList from "@/components/cards/CardsFlexList";
import CardsList from "@/components/cards/CardsList";
// import Card from "@/components/cards/Card";
import CustomHr from "@/components/CustomHr";
import Card from "@/components/home/cards/Card";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import usePages from "@/hooks/usePages/usePages";
import useWidth from "@/hooks/useWidth/useWidth";
import { zusPages } from "@/zustand/pages/zusPages";
// import { Card } from "@nextui-org/react";
import React, { useEffect } from "react";

const page = () => {
  const { pageLimpieza, domain } = zusPages();

  useEffect(() => {
    console.log(pageLimpieza);
  }, [pageLimpieza]);

  const { width } = useWidth();

  return (
    <div>
      <ImagesMain
        img={
          pageLimpieza.backgroundImage &&
          domain + pageLimpieza.backgroundImage.url
        }
        text={pageLimpieza.imageTitle}
      />

      <MainText
        text={
          <div>
            <MainTextHead text={pageLimpieza.title} />
            <Text text={pageLimpieza.subtitle} />
            {/* <Text text="Consulta nuestras últimas pautas de limpieza y seguridad a continuación." /> */}
          </div>
        }
        padding="120px 40px"
      />

      <CardsFlexList
        hasHead={true}
        listTitle={pageLimpieza.cardtitle}
        listSubtitle={pageLimpieza.cardsubtitle}
      >
        {pageLimpieza.limpiezaCards &&
          pageLimpieza.limpiezaCards.map((card) => (
            <Card
              key={card.id}
              img={domain + card.imageCard.url}
              title={card.title}
              subTitle={card.subtitle}
              link=""
            />
          ))}
      </CardsFlexList>

      {/* <div className="pt-28 pb-20">
        <div className="">
          <div className="p-10 pb-5 text-center">
            <CustomHr />
            <p
              className="text-lg font-semibold py-3"
              style={{ letterSpacing: ".2em" }}
            >
              {pageLimpieza.cardtitle}
            </p>
            <CustomHr />
          </div>
          <p className="text-lg leading-9 mb-12 text-center">
            {pageLimpieza.cardsubtitle}
          </p>
        </div>

        <div className="px-2 w-full mx-auto " style={{ maxWidth: 1400 }}>
          <div
            className={`flex flex-wrap flex-col- ${
              width < 848 ? " flex-col " : "flex-row"
            }`}
          >
            {pageLimpieza.limpieza &&
              pageLimpieza.limpieza[0].cards.map((card) => (
                <Card
                  key={card.id}
                  img={"http://localhost:3000" + card.imageCard.url}
                  title={card.title}
                  subTitle={card.subtitle}
                  link=""
                />
              ))}
            <Card
              img="https://www.onelifefitness.com/hubfs/Clean-Stairclimber.png"
              title="A trained Team"
              subTitle="Team me9mbers are fully trained and mobilized into a cleaning force to disinfect the high-touch and high traffic areas so your club is always sparkling clean."
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
      </div> */}

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
          {pageLimpieza.medidadesDeSeguridad &&
            pageLimpieza.medidadesDeSeguridad.map((card) => (
              <CardBig
                key={card.id}
                head={card.title}
                descripion={card.subtitle}
                imageSide="right"
                imageUrl={domain + card.imageCard.url}
                btnText=""
                pathNativation=""
              />
            ))}
          {/* <CardBig
            head="Volviendo a tu rutina"
            descripion="Ahora, más que nunca, sabemos lo importante que es nuestra salud física y mental. Hable con el equipo de acondicionamiento físico para obtener su sesión de entrenamiento personal 'Re-Start' gratuita para ayudarlo a establecer sus nuevas metas y el camino hacia el éxito."
            imageSide="right"
            imageUrl="https://th.bing.com/th/id/OIP.KTwvGQCyYBDZisC0MQky6wHaE6?rs=1&pid=ImgDetMain"
            btnText=""
            pathNativation="/entrenadores-personales/alam-rodriguez"
          /> */}
        </CardsList>
      </div>
    </div>
  );
};

export default page;
