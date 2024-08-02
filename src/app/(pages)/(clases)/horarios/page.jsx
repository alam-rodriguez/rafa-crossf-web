import CustomHr from "@/components/CustomHr";
import ImagesMain from "@/components/ImagesMain";
import { Button } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <div>
      <ImagesMain
        img="https://www.onelifefitness.com/hubfs/shutterstock_793611454.png"
        text="HORARIOS DE CLASES"
      />

      <div className="py-28 text-center">
        <div className="p-10 pb-5 text-center">
          <CustomHr />
          <p
            className="text-lg font-semibold py-3"
            style={{ letterSpacing: ".2em" }}
          >
            ONELIFE FITNESS CLASSES
          </p>
          <CustomHr />
        </div>

        <p className="text-lg leading-9 mb-7">
          ¿Estás listo para transformar tu vida y alcanzar tus objetivos de
          fitness? Te invitamos a unirte a Rafa CrossFit Gym, donde te ofrecemos
          un ambiente dinámico y motivador para que te superes cada día. Nuestro
          equipo de entrenadores altamente capacitados está aquí para guiarte en
          cada paso de tu viaje, asegurándose de que cada entrenamiento sea
          desafiante y emocionante.
        </p>
        <p className="text-lg leading-9 mb-7">
          En Rafa CrossFit Gym, creemos en el poder del entrenamiento funcional
          y en la construcción de una comunidad fuerte y solidaria. Ya sea que
          estés buscando mejorar tu resistencia, aumentar tu fuerza o
          simplemente mantenerte en forma, nuestro gimnasio está equipado con lo
          último en equipos y recursos para ayudarte a lograr tus metas. ¡Ven y
          forma parte de nuestra familia fitness y experimenta la diferencia de
          entrenar en un lugar donde tu progreso es nuestra prioridad!
        </p>
        <Button className="mt-7">GET A FREE GUEST PASS</Button>
      </div>
    </div>
  );
};

export default page;
