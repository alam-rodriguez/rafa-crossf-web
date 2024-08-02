import React from "react";

const SocialPosts = () => {
  return (
    <div className="text-center py-14">
      <div className="mb-7 ">
        <hr
          className="w-28 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
        <p
          className="text-xs sm:text-base md:text-3xl py-6 font-normal uppercase"
          style={{ letterSpacing: ".4em" }}
        >
          #rafacrossfgym
        </p>
        <hr
          className="w-28 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
      </div>
      <p className="text-sm leading-6">
        Tienes una vida para vivir, ¡así que haz que valga la pena! Etiquétanos
        usando #rafacrossfgym en tus fotos en Instagram para tener la
        oportunidad de aparecer en nuestras páginas sociales.
      </p>
    </div>
  );
};

export default SocialPosts;
