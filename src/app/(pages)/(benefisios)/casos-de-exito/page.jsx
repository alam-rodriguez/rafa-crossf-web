"use client";

import Card from "@/components/cards/Card";
import CardsList from "@/components/cards/CardsList";
import ImagesMain from "@/components/ImagesMain";
import { zusPages } from "@/zustand/pages/zusPages";
import React, { useEffect } from "react";

const page = () => {
  const { pageCasosExito, domain } = zusPages();

  useEffect(() => {
    if (pageCasosExito.casosDeExito == undefined) return;
    console.log(pageCasosExito);
    console.log(pageCasosExito.casosDeExito.length);
  }, [pageCasosExito]);

  return (
    <div>
      <ImagesMain
        img={
          pageCasosExito.backgroundImage &&
          domain + pageCasosExito.backgroundImage.url
        }
        text={pageCasosExito.imageTitle}
      />

      <CardsList>
        {pageCasosExito.casosDeExito &&
          pageCasosExito.casosDeExito.map((caso, i) => (
            <Card
              key={caso.id}
              head={caso.title}
              descripion={caso.subtitle}
              imageSide={(i + 1) % 2 == 0 ? "right" : "left"}
              imageUrl={domain + caso.imageCaso.url}
              btnText="LEER MAS"
              pathNativation={`/casos-de-exito/${caso.name
                .split(" ")
                .join("-")}`}
            />
          ))}
        {/* <Card
          head="Meet Lydia Laws: Championing Excellence at Onelife FitnessWINCHESTER"
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="Meet Lydia Laws: Championing Excellence at Onelife FitnessWINCHESTER"
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="Meet Lydia Laws: Championing Excellence at Onelife FitnessWINCHESTER"
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="Meet Lydia Laws: Championing Excellence at Onelife FitnessWINCHESTER"
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="Meet Lydia Laws: Championing Excellence at Onelife FitnessWINCHESTER"
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="Meet Lydia Laws: Championing Excellence at Onelife FitnessWINCHESTER"
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        /> */}
      </CardsList>

      {/* <div className="py-24 px-3 max-w-screen-xl mx-auto">
        <Card
          head="MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTERFITNESSWINCHESTERFITNESSWINCHESTER "
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTERFITNESSWINCHESTERFITNESSWINCHESTER "
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTERFITNESSWINCHESTERFITNESSWINCHESTER "
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTERFITNESSWINCHESTERFITNESSWINCHESTER "
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTERFITNESSWINCHESTERFITNESSWINCHESTER "
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
        <Card
          head="MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTERFITNESSWINCHESTERFITNESSWINCHESTER "
          descripion="We're thrilled to introduce Lydia Laws, our esteemed Explosive Performance Coach at Onelife Fitness Winchester. Originally hailing from North Carolina, Lydia brings a deep passion for athletics and coaching to our community."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Canva%20images/Canva%20Design%20DAGKX5vdF6U.png?length=1024&name=Canva%20Design%20DAGKX5vdF6U.png"
          btnText="LEER MAS"
          pathNativation="/casos-de-exito/MEET LYDIA LAWS: CHAMPIONING EXCELLENCE AT ONELIFE FITNESSWINCHESTER"
        />
      </div> */}
    </div>
  );
};

export default page;
