"use client";

import Card from "@/components/cards/Card";
import CardsList from "@/components/cards/CardsList";
import ImagesMain from "@/components/ImagesMain";
import { zusPages } from "@/zustand/pages/zusPages";
import React, { useEffect } from "react";

const page = () => {
  const { pageBlogsYNoticias, domain } = zusPages();

  useEffect(() => {
    console.log(pageBlogsYNoticias);
  }, [pageBlogsYNoticias]);

  return (
    <div>
      <ImagesMain
        img={
          pageBlogsYNoticias.backgroundImage &&
          domain + pageBlogsYNoticias.backgroundImage.url
        }
        text={pageBlogsYNoticias.imageTitle}
      />

      <CardsList>
        {pageBlogsYNoticias.blogsYNoticias &&
          pageBlogsYNoticias.blogsYNoticias.map((blog, i) => (
            <Card
              key={blog.id}
              head={blog.title}
              descripion={blog.subtitle}
              imageSide={(i + 1) % 2 == 0 ? "right" : "left"}
              imageUrl={domain + blog.imageBlog.url}
              btnText="LEER MAS"
              pathNativation={`/blogs/${blog.title.split(" ").join("-")}`}
            />
          ))}
        {/* <Card
          head="CELEBRATE THE FOURTH OF JULY WITH ONELIFE FITNESS!"
          descripion="As we gear up to celebrate Independence Day, Onelife Fitness wants to ensure you have all the information you need to make the most of your holiday workout schedule. This year, we have special hours to accommodate your festive plans and help you stay on track with your fitness goals."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg?length=1024&name=Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg"
          btnText="LEER MAS"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="CELEBRATE THE FOURTH OF JULY WITH ONELIFE FITNESS!"
          descripion="As we gear up to celebrate Independence Day, Onelife Fitness wants to ensure you have all the information you need to make the most of your holiday workout schedule. This year, we have special hours to accommodate your festive plans and help you stay on track with your fitness goals."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg?length=1024&name=Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg"
          btnText="LEER MAS"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="CELEBRATE THE FOURTH OF JULY WITH ONELIFE FITNESS!"
          descripion="As we gear up to celebrate Independence Day, Onelife Fitness wants to ensure you have all the information you need to make the most of your holiday workout schedule. This year, we have special hours to accommodate your festive plans and help you stay on track with your fitness goals."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg?length=1024&name=Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg"
          btnText="LEER MAS"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="CELEBRATE THE FOURTH OF JULY WITH ONELIFE FITNESS!"
          descripion="As we gear up to celebrate Independence Day, Onelife Fitness wants to ensure you have all the information you need to make the most of your holiday workout schedule. This year, we have special hours to accommodate your festive plans and help you stay on track with your fitness goals."
          imageSide="right"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg?length=1024&name=Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg"
          btnText="LEER MAS"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="CELEBRATE THE FOURTH OF JULY WITH ONELIFE FITNESS!"
          descripion="As we gear up to celebrate Independence Day, Onelife Fitness wants to ensure you have all the information you need to make the most of your holiday workout schedule. This year, we have special hours to accommodate your festive plans and help you stay on track with your fitness goals."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg?length=1024&name=Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg"
          btnText="LEER MAS"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="CELEBRATE THE FOURTH OF JULY WITH ONELIFE FITNESS!"
          descripion="As we gear up to celebrate Independence Day, Onelife Fitness wants to ensure you have all the information you need to make the most of your holiday workout schedule. This year, we have special hours to accommodate your festive plans and help you stay on track with your fitness goals."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg?length=1024&name=Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg"
          btnText="LEER MAS"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        />
        <Card
          head="CELEBRATE THE FOURTH OF JULY WITH ONELIFE FITNESS!"
          descripion="As we gear up to celebrate Independence Day, Onelife Fitness wants to ensure you have all the information you need to make the most of your holiday workout schedule. This year, we have special hours to accommodate your festive plans and help you stay on track with your fitness goals."
          imageSide="left"
          imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg?length=1024&name=Five%20bursts%20of%20blue%20and%20white%20fireworks%20with%20white-hot%20cores%20above%20three%20glittery%20rocket%20trails.jpeg"
          btnText="LEER MAS"
          pathNativation="/entrenadores-personales/alam-rodriguez"
        /> */}
      </CardsList>
    </div>
  );
};

export default page;
