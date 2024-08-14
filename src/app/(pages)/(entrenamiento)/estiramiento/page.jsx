"use client";

import Card from "@/components/cards/Card";
import CardsList from "@/components/cards/CardsList";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import { zusPages } from "@/zustand/pages/zusPages";
import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";

const page = () => {
  const { domain, pageEstiramiento } = zusPages();

  useEffect(() => {
    console.warn(pageEstiramiento);
  }, [pageEstiramiento]);

  return (
    <div>
      <ImagesMain
        img={
          pageEstiramiento.backgroundImage &&
          domain + pageEstiramiento.backgroundImage.url
        }
        text={pageEstiramiento.imageTitle}
      />

      <MainText
        text={
          <div>
            <MainTextHead text={pageEstiramiento.title} />

            <Text
              text={
                <>
                  {pageEstiramiento.subtitle &&
                    pageEstiramiento.subtitle.map((text, i) => (
                      <>
                        <span>{text.children[0].text}</span>
                        {i + 1 < pageEstiramiento.subtitle.length && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </>
                    ))}
                  {/* <span>
                    Mejore su estado físico con estiramientos asistidos
                    personalizados. A diferencia de los estiramientos por su
                    cuenta, nuestros especialistas certificados tienen
                    experiencia, herramientas de última generación y un enfoque
                    personalizado que lo ayudarán a lograr el mejor estiramiento
                    de manera segura y eficaz.
                  </span>
                  <br />
                  <br />
                  <span>
                    Relájese y experimente un estiramiento asistido
                    personalizado que aliviará sus puntos tensos y liberará el
                    potencial de su cuerpo. Nuestros especialistas certificados
                    en estiramientos y recuperación están capacitados para
                    ayudarlo a alcanzar sus objetivos.
                  </span> */}
                </>
              }
            />
            <Button>
              Obten una sesión de estiramiento y recuperación gratuita
            </Button>
          </div>
        }
        padding="120px 40px"
      />

      <CardsList>
        {pageEstiramiento.estiramientoCards &&
          pageEstiramiento.estiramientoCards.map((card, i) => (
            <Card
              key={card.id}
              head={card.title}
              descripion={card.subtitle}
              imageSide={(i + 1) % 2 == 0 ? "right" : "left"}
              imageUrl={domain + card.imageCard.url}
              btnText=""
              pathNativation=""
            />
          ))}
      </CardsList>
      {/* <div className="py-24 px-3">
        <Card
          head="PERFORMANCE"
          descripion="Independientemente de cómo te guste mantenerte en forma, tu rutina no estará completa sin un buen estiramiento. Nuestro método puede ayudarte a mejorar tu recuperación y a liberar la tensión muscular para que puedas rendir al máximo."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Stretch-website-belt-1600x1067.png?length=1024&name=Stretch-website-belt-1600x1067.png"
          btnText=""
          pathNativation=""
        />
        <Card
          head="Restaurativa"
          descripion="La recuperación es una parte esencial de cualquier actividad física. Los estiramientos ayudan a aliviar la tensión muscular para que puedan recuperarse, lo que ayuda a prevenir lesiones y dolor."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Stretch-website-belt-1600x1067.png?length=1024&name=Stretch-website-belt-1600x1067.png"
          btnText=""
          pathNativation=""
        />
        <Card
          head="movilidad"
          descripion="Independientemente de cómo te guste mantenerte en forma, tu rutina no estará completa sin un buen estiramiento. Nuestro método puede ayudarte a mejorar tu recuperación y a liberar la tensión muscular para que puedas rendir al máximo."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Stretch-website-belt-1600x1067.png?length=1024&name=Stretch-website-belt-1600x1067.png"
          btnText=""
          pathNativation=""
        />
      </div> */}
    </div>
  );
};

export default page;
