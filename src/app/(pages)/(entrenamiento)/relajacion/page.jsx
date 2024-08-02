import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import React from "react";

const page = () => {
  return (
    <div>
      <ImagesMain
        img="https://www.onelifefitness.com/hubfs/24OL-hydrowebsite1440x600.png"
        text="Relajación y recuperación"
      />
      <MainText
        text={
          <div>
            <MainTextHead text="camas y masajes" />

            <Text
              text={
                <>
                  <span>
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
                  </span>
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
