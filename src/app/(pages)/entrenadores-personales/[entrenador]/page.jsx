"use client";

import React, { useEffect, useState } from "react";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import { Icon } from "@iconify/react";
import Cards from "@/components/home/cards/Cards";
// import { Card } from "@nextui-org/react";
import CardsList from "@/components/cards/CardsList";
import CardsFlexList from "@/components/cards/CardsFlexList";
import Card from "@/components/home/cards/Card";
import ImageTeam from "@/components/home/ImageTeam";
import VideoSecundary from "@/components/home/VideoSecundary";
import Map from "@/components/home/Map";
import Activities from "@/components/home/activities/Activities";
import SocialPosts from "@/components/home/SocialPosts";
import useWidth from "@/hooks/useWidth/useWidth";
import PersonalTrainerVideo from "@/components/personal-trainers/PersonalTrainerVideo";
import Skills from "@/components/personal-trainers/Skills";
import CustomHr from "@/components/CustomHr";
import Achievements from "@/components/personal-trainers/Achievements";
import { zusPages } from "@/zustand/pages/zusPages";
import TrainerSocialPosts from "@/components/personal-trainers/TrainerSocialPosts";
// import Card from "@/components/home/cards/Card";
// import Card from "@/components/cards/Card";

const page = ({ params }) => {
  const { personalsTrainers, domain } = zusPages();

  const [entrenadorName, setEntrenadorName] = useState(
    params.entrenador.split("-").join(" ")
  );

  const [trainer, setTrainer] = useState({});

  useEffect(() => {
    personalsTrainers.map((trainer) => {
      if (trainer.name.toLowerCase() == entrenadorName.toLowerCase()) {
        setTrainer(trainer);
        return;
      }
    });
  }, [personalsTrainers]);

  useEffect(() => {
    console.log(trainer);
  }, [trainer]);

  useEffect(() => {
    // console.log(entrenadorName);
    console.log(personalsTrainers);
  }, [personalsTrainers]);
  return (
    <main className="bg-gray-100 -bg-red-800">
      <ImagesMain
        img={trainer.trainerImage && domain + trainer.trainerImage.url}
        text={entrenadorName}
      />
      {/* <Video /> */}
      <MainText
        text={
          <p className="text-lg">
            {trainer.description}{" "}
            <span
              className="inline-flex items-center text-blue-400 cursor-pointer"
              onClick={() => console.log(trainer.redes.instagram)}
            >
              ven a mi instagram
              <Icon className="" icon="teenyicons:right-solid" />
            </span>
          </p>
        }
      />
      <CardsFlexList
        hasHead={false}
        listTitle={"pageLimpieza.cardtitle"}
        listSubtitle={"pageLimpieza.cardsubtitle"}
      >
        {trainer.mainInformation &&
          trainer.mainInformation.map((card) => {
            console.log(card);
            return (
              <Card
                key={card.id}
                img={domain + card.image.url}
                title={card.title}
                subTitle={card.description[0].children[0].text}
                link=""
              />
            );
          })}
        {/* <Card
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
                We are utilizing industrial deep cleaning systems including for
                daily deep-cleaning of all surfaces throughout the club on a
                continuous basis
              </span>
              <br />
              <br />
              <span>
                We are utilizing industrial deep cleaning systems including for
                daily deep-cleaning of all surfaces throughout the club on a
                continuous basis
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
                We have dramatically increased the number of sanitation stations
                throughout the clubs, which include hospital-grade disinfectants
                for members to wipe down the equipment before and after use
              </span>
              <br />
              <br />
              <span>
                We have dramatically increased the number of sanitation stations
                throughout the clubs, which include hospital-grade disinfectants
                for members to wipe down the equipment before and after use
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
                We have dramatically increased the number of sanitation stations
                throughout the clubs, which include hospital-grade disinfectants
                for members to wipe down the equipment before and after use
              </span>
              <br />
              <br />
              <span>
                We have dramatically increased the number of sanitation stations
                throughout the clubs, which include hospital-grade disinfectants
                for members to wipe down the equipment before and after use
              </span>
            </>
          }
          link=""
        /> */}
        {/* {pageLimpieza.limpieza &&
          pageLimpieza.limpieza[0].cards.map((card) => (
            <Card
              key={card.id}
              img={"http://localhost:3000" + card.imageCard.url}
              title={card.title}
              subTitle={card.subtitle}
              link=""
            />
          ))} */}
      </CardsFlexList>
      {/* <ImageTeam /> */}
      <ImageTrainer
        image={
          trainer.secondTrainerImage && domain + trainer.secondTrainerImage.url
        }
      />
      {/* <Map /> */}
      <Spacer />

      {/* <VideoSecundary /> */}
      <PersonalTrainerVideo
        video={trainer.video && domain + trainer.video.url}
        text="TU VIAJE EMPIEZA AQUI"
      />
      {/* <Activities /> */}
      <Skills
        skills={trainer.skills && trainer.skills}
        whatsapp={trainer.redes && trainer.redes.whatsApp}
      />

      <Achievements
        title={"logros"}
        subtitle={"logros y certificaciones"}
        logros
        Achievements={trainer.logros}
      />

      <TrainerSocialPosts
        name={trainer.name}
        instagram={trainer.redes && trainer.redes.instagram}
      />
    </main>
  );
};

export default page;

const ImageTrainer = ({ image }) => (
  <img
    className="w-full h-auto object-cover object-center"
    style={{ maxHeight: "529px" }}
    src={image}
  />
);

const Spacer = () => <div className="my-28"></div>;
