"use client";

import Card from "@/components/cards/Card";
import CardsList from "@/components/cards/CardsList";
// import Card from "@/components/home/cards/Card";
import ImagesMain from "@/components/ImagesMain";
import MainText from "@/components/main-text/MainText";
import MainTextHead from "@/components/main-text/MainTextHead";
import Text from "@/components/main-text/Text";
import { zusPages } from "@/zustand/pages/zusPages";
import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";

const page = () => {
  const { pageInicioInteligente, domain } = zusPages();

  useEffect(() => {
    console.log(pageInicioInteligente);
  }, [pageInicioInteligente]);

  return (
    <div>
      <ImagesMain
        img={
          pageInicioInteligente.backgroundImage &&
          domain + pageInicioInteligente.backgroundImage.url
        }
        text={pageInicioInteligente.imageTitle}
      />
      <MainText
        text={
          <div>
            <MainTextHead text={pageInicioInteligente.title} />

            <Text text={pageInicioInteligente.subtitle} />
            <Button>AGENDAR SESION</Button>
          </div>
        }
        padding="120px 40px"
      />

      <CardsList>
        {pageInicioInteligente.inicioInteligenteCards &&
          pageInicioInteligente.inicioInteligenteCards.map((card, i) => (
            <Card
              key={card.id}
              head={card.title}
              descripion={card.subtitle}
              imageSide={(i + 1) % 2 == 0 ? "right" : "left"}
              imageUrl={domain + card.imageCard.url}
              btnText="SCHEDULE A SESSION"
              pathNativation="/"
            />
          ))}
        {/* <Card
          head="GET RESULTS"
          descripion="We work with many different types of bodies, fitness levels, and fitness goals. Have you just started your fitness journey? Do you have a big life event coming up that you’d like to lose some weight for? Do you need to train for a sports event? Are you trying to bulk up in muscle or tone up? Do your kids need training or a summer camp? We can work with all of that and more! We’ll discuss your short and long-term fitness goals and develop a fitness plan for RESULTS!"
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/24-PT-Photo2.png?length=1024&name=24-PT-Photo2.png"
          btnText="SCHEDULE A SESSION"
          pathNativation="/"
        />
        <Card
          head="GET RESULTS"
          descripion="We work with many different types of bodies, fitness levels, and fitness goals. Have you just started your fitness journey? Do you have a big life event coming up that you’d like to lose some weight for? Do you need to train for a sports event? Are you trying to bulk up in muscle or tone up? Do your kids need training or a summer camp? We can work with all of that and more! We’ll discuss your short and long-term fitness goals and develop a fitness plan for RESULTS!"
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/20OL_Work%20Smarter_1000x1000.png?length=1024&name=20OL_Work%20Smarter_1000x1000.png"
          btnText="SCHEDULE A SESSION"
          pathNativation="/"
        />
        <Card
          head="GET RESULTS"
          descripion="We work with many different types of bodies, fitness levels, and fitness goals. Have you just started your fitness journey? Do you have a big life event coming up that you’d like to lose some weight for? Do you need to train for a sports event? Are you trying to bulk up in muscle or tone up? Do your kids need training or a summer camp? We can work with all of that and more! We’ll discuss your short and long-term fitness goals and develop a fitness plan for RESULTS!"
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/24-PT-Photo2.png?length=1024&name=24-PT-Photo2.png"
          btnText="SCHEDULE A SESSION"
          pathNativation="/"
        /> */}
        <div className="flex justify-center">
          <Button className="">SESIÓN DE GIMNASIO SMART START GRATUITA</Button>
        </div>
      </CardsList>

      <MainText
        text={
          <div>
            <MainTextHead text={pageInicioInteligente.titleFooterPage} />

            <Text text={pageInicioInteligente.subtitleFooterPage} />
            <Button>EMPEZAR</Button>
          </div>
        }
        padding="120px 40px"
      />
    </div>
  );
};

export default page;
