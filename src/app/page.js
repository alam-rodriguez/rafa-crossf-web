import React from "react";

import Cards from "@/components/home/cards/Cards";
import { Icon } from "@iconify/react";
import Video from "@/components/home/Video";
import MainText from "@/components/main-text/MainText";
import ImageTeam from "@/components/home/ImageTeam";
import Map from "@/components/home/Map";
import VideoSecundary from "@/components/home/VideoSecundary";
import Activities from "@/components/home/activities/Activities";
import SocialPosts from "@/components/home/SocialPosts";

export default function Home() {
  return (
    <main className="bg-gray-100 -bg-red-800">
      <Video />
      <MainText
        text={
          <p className="text-lg">
            Cada día es una nueva oportunidad para superar tus límites y
            descubrir de qué estás hecho. En nuestro gimnasio, no solo
            entrenamos cuerpos, sino también mentes y espíritus. Recuerda, cada
            gota de sudor es un paso más hacia una versión más fuerte, más
            saludable y más feliz de ti mismo. No se trata solo de llegar a la
            meta, sino de disfrutar cada paso del camino.
            <span
              className="inline-flex items-center text-blue-400 cursor-pointer"
              // onClick={handleClickJoinUs}
            >
              unete a nosotros
              <Icon className="" icon="teenyicons:right-solid" />
            </span>
          </p>
        }
      />
      <Cards />
      <ImageTeam />
      <Map />
      <VideoSecundary />
      <Activities />
      <SocialPosts />
    </main>
  );
}
