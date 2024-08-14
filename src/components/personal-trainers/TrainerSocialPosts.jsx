import Link from "next/link";
import React from "react";

const TrainerSocialPosts = ({ name, instagram }) => {
  return (
    <div className="text-center py-14">
      <div className="mb-7 ">
        <hr
          className="w-28 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
        <Link href="/" target="_blank">
          <p
            className="text-xs-sm:text-base text-base md:text-3xl py-6 font-normal uppercase"
            style={{ letterSpacing: ".4em" }}
          >
            @{instagram}
          </p>
        </Link>
        <hr
          className="w-28 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
      </div>
      <p className="text-sm leading-6">
        {/* Tienes una vida para vivir, ¡así que haz que valga la pena! Etiquétanos
        usando #rafacrossfgym en tus fotos en Instagram para tener la
        oportunidad de aparecer en nuestras páginas sociales. */}
        Soy {name}, tu entrenador personal. Sígueme en Instagram para consejos
        de fitness, rutinas de ejercicio y más. ¡Únete a nuestra comunidad y
        transforma tu vida!
      </p>
    </div>
  );
};

export default TrainerSocialPosts;
