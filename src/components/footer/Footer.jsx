import React from "react";
import FooterItem from "./FooterItem";
import CustomHr from "../CustomHr";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="bg-black p-16 text-white block lg:flex uppercase">
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
            { text: "Class Schedules", path: "/" },
            { text: "Class Descriptions", path: "/" },
          ]}
        />
        <FooterItem
          title="Training + Sports"
          links={[
            { text: "Smart Start", path: "/" },
            { text: "Personal Training", path: "/" },
            { text: "Explosive Performance", path: "/" },
            { text: "Zone4", path: "/" },
            { text: "Mind & Body", path: "/" },
            { text: "Swimming", path: "/" },
            { text: "Racquet", path: "/" },
            { text: "Basketball", path: "/" },
          ]}
        />
        <FooterItem
          title="Support"
          links={[
            { text: "Contact Us", path: "/" },
            { text: "Member Login", path: "/" },
            { text: "Corporate Login", path: "/" },
            { text: "Careers", path: "/" },
            { text: "Blog", path: "/" },
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
            CONNECT
          </p>
          <CustomHr mxcenter={false} />
        </div>
        <div className="mb-14 flex gap-4 ">
          <Icon className="text-4xl" icon="ri:facebook-fill" />
          <Icon className="text-4xl" icon="mdi:youtube" />
          <Icon className="text-4xl" icon="mdi:instagram" />
          <Icon className="text-4xl" icon="ri:linkedin-fill" />
        </div>

        <img
          className="h-20 mb-3"
          src="https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg"
          alt=""
        />
        <p className="text-sm tracking-widest">© 2024 Onelife Fitness</p>
      </div>
    </div>
  );
};

export default Footer;
