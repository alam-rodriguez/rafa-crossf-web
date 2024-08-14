"use client";

import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import { zusPages } from "@/zustand/pages/zusPages";
import React, { useEffect } from "react";

const page = () => {
  const { domain, pageRelajacion } = zusPages();

  useEffect(() => {
    console.log(pageRelajacion);
  }, [pageRelajacion]);

  return (
    <div>
      <ImagesMain
        img={
          pageRelajacion.backgroundImage &&
          domain + pageRelajacion.backgroundImage.url
        }
        text={pageRelajacion.imageTitle}
      />
      <MainText
        text={
          <div>
            <MainTextHead text={pageRelajacion.title} />

            <Text
              text={
                <>
                  {pageRelajacion.subtitle &&
                    pageRelajacion.subtitle.map((text, i) => (
                      <>
                        <span>{text.children[0].text}</span>
                        {i + 1 < pageRelajacion.subtitle.length && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </>
                    ))}
                  {/* <span>
                    Los masajes en nuestro gimnasio son el complemento perfecto
                    para tu rutina de entrenamiento. Ayudan a relajar los
                    músculos, reducir el estrés y acelerar la recuperación
                    después de un ejercicio intenso. Nuestros terapeutas
                    profesionales están aquí para proporcionarte un alivio
                    rejuvenecedor, mejorando tu bienestar físico y mental. ¡Ven
                    y disfruta de una experiencia de masaje revitalizante en
                    nuestro gimnasio!
                  </span>
                  <br />
                  <br />
                  <span>
                    Además, los masajes mejoran la circulación y la
                    flexibilidad, ayudándote a prevenir lesiones. Disfruta de
                    una sesión revitalizante y siente la diferencia en tu
                    rendimiento y bienestar. ¡Dale a tu cuerpo el cuidado que
                    merece!
                  </span> */}
                </>
              }
            />
          </div>
        }
        padding="120px 40px"
      />
    </div>
  );
};

export default page;
