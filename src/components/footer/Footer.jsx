"use client";

import React, { useEffect } from "react";
import FooterItem from "./FooterItem";
import CustomHr from "../CustomHr";
import { Icon } from "@iconify/react";
import IconFooter from "./IconFooter";
import logo from "@/assets/images/logo.jpeg";
import Image from "next/image";
import { zusMainInformation } from "@/zustand/main-information/zusMainInformation";

const Footer = () => {
  const { nameApp, imageApp, redes } = zusMainInformation();

  useEffect(() => {
    console.log(redes);
  }, [redes]);

  return (
    <footer
      className="bg-black p-16-p-24 text-white block lg:flex uppercase"
      style={{ padding: "70px" }}
    >
      <nav className="mb-7 block sm:flex basis-4/5">
        <FooterItem
          title="gimnacion"
          links={[
            { text: "ubicacion", path: "/ubicacion" },
            { text: "comodidades", path: "/comodidades" },
            { text: "casos de exito", path: "/casos-de-exito" },
          ]}
        />
        <FooterItem
          title="Classes"
          links={[
            { text: "horarios", path: "/" },
            { text: "descripcion de clases", path: "/" },
          ]}
        />
        <FooterItem
          title="entrenamiento"
          links={[
            { text: "inicio inteligente", path: "/inicio-inteligente" },
            { text: "entrenador personal", path: "/entrenadores-personales" },
            { text: "mente y cuerpo", path: "/mente-y-cuerpo" },
          ]}
        />
        <FooterItem
          title="apoyo"
          links={[
            { text: "contactanos", path: "/" },
            { text: "Blog", path: "/blogs-y-noticias" },
            { text: "Privacy Policy", path: "/" },
          ]}
        />
      </nav>

      <div className="flex-none lg:basis-1/5">
        <div className="mb-5">
          <CustomHr mxcenter={false} />
          <p
            className="text-sm py-3 font-bold"
            style={{ letterSpacing: ".2em" }}
          >
            connecion
          </p>
          <CustomHr mxcenter={false} />
        </div>
        <div className="mb-14 flex gap-4 ">
          <IconFooter
            icon="ri:facebook-fill"
            link={`https://www.facebook.com/${redes.facebook}`}
          />
          <IconFooter
            icon="mdi:instagram"
            link={`https://www.instagram.com/${redes.instagram}`}
          />
          <IconFooter
            icon="mdi:youtube"
            link={`https://www.youtube.com/@${redes.youtube}`}
          />
          <IconFooter
            icon="ic:baseline-whatsapp"
            link={`https://wa.me/${redes.whatsapp}?text=deseo%20inscribirme%20en%20rafa%20crossf%20gym`}
          />
        </div>

        <img className="h-20 w-auto mb-3" src={imageApp} alt="" />
        {/* <img
          className="h-20 mb-3"
          src="https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg"
          alt=""
        /> */}
        <p className="text-sm tracking-widest">© 2024 {nameApp}</p>
      </div>
    </footer>
  );
};

export default Footer;
