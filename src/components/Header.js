"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";
import useWidth from "@/hooks/useWidth/useWidth";
import Link from "next/link";
import { useRouter } from "next/navigation";

import logo from "../assets/images/logo.jpeg";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";

const beneficios = [
  { name: "Comodidades", path: "/comodidades" },
  { name: "Club de ninos", path: "/" },
  { name: "Membresia", path: "/" },
  { name: "Limpio y seguro", path: "/" },
  { name: "Casos de exito", path: "/casos-de-exito" },
];
const clases = [
  { name: "Horarios", path: "/horarios" },
  { name: "Descripcion", path: "/descripcion" },
  { name: "Registro de clase", path: "/clases" },
];
const entrenamientos = [
  { name: "Inicio inteligente", path: "/" },
  { name: "Entrenador personal", path: "/" },
  { name: "Estirar y recuperar", path: "/" },
  { name: "Inicio inteligente", path: "/" },
  { name: "Mente y cuerpo", path: "/" },
  { name: "Relajacion y recuperacion", path: "/" },
  { name: "Estudio de boxeo", path: "/" },
];

const conexiones = [
  { name: "Blogs y noticias", path: "/blogs-y-noticias" },
  { name: "whassap", path: "/" },
  { name: "Instagram", path: "/" },
  { name: "Facebook", path: "/" },
  { name: "TikTok", path: "/" },
  { name: "Linkedin", path: "/" },
];

const Header = () => {
  const router = useRouter();

  const handleClicGoHome = () => router.push("/");

  const { width } = useWidth();

  useEffect(() => {
    console.log(width);
  }, [width]);

  const [showMenu, setShowMenu] = useState(false);

  const handleClickShowMenu = () => {
    setShowMenu(!showMenu);
  };

  if (width < 1137) {
    return (
      <nav className="fixed w-full z-10">
        <div className="bg-black flex justify-between items-center text-white px-12  z-20">
          <div className="">
            <Image
              className="h-20 w-auto"
              // src="https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg"
              src={logo}
              alt=""
            />
          </div>
          <Icon
            onClick={handleClickShowMenu}
            icon={
              !showMenu ? "hugeicons:menu-09" : "material-symbols-light:close"
            }
            className="text-2xl"
          />
        </div>
        {showMenu ? (
          <div
            className="z-10 absolute py-5 h-screen w-full text-white flex flex-col items-center animate__animated animate__fadeInDown"
            style={{ background: "rgba(0, 0, 0, .9)" }}
          >
            <div className="flex gap-4">
              <Button className="rounded-md font-medium text-xs h-7">
                FREE PASS
              </Button>
              <Button className="rounded-md font-medium text-xs h-7 bg-blue-600 text-white">
                JOIN ONLINE
              </Button>
            </div>
            <div className=" flex- text-base gap-4- font-semibold text-center">
              <p className="text-xs py-7">UBICACION</p>
              <p className="text-xs py-7">BENEFITS</p>
              <p className="text-xs py-7">CLASSES</p>
              <p className="text-xs py-7">SPORTS</p>
              <p className="text-xs py-7">MEMBER LOGIN</p>
              <p className="text-xs py-7">CONNECT</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav>
    );
  }

  return (
    <nav className="bg-black flex justify-between items-center text-white px-12 fixed w-full z-10">
      <div>
        <Image
          onClick={handleClicGoHome}
          className="h-20 w-auto"
          // src="https://th.bing.com/th/id/OIG4.o_N6LZyHBKYgLGNeF6di?pid=ImgGn"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex text-base gap-4- font-semibold">
        <Link className="text-sm py-8 px-2" href="/ubicacion">
          UBICACION
        </Link>

        <Dropdown>
          <DropdownTrigger>
            <p className="text-sm py-8 px-2">BENEFICIOS</p>
            {/* <Button variant="bordered">Open Menu</Button> */}
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {beneficios.map((beneficio) => (
              <DropdownItem key={beneficio.name}>
                <Link className="" href={beneficio.path}>
                  {beneficio.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger>
            <p className="text-sm py-8 px-2">CLASSES</p>
            {/* <Button variant="bordered">Open Menu</Button> */}
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {clases.map((beneficio) => (
              <DropdownItem key={beneficio.name}>
                <Link className="" href={beneficio.path}>
                  {beneficio.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <p className="text-sm py-8 px-2">ENTRENAMIENTOS</p>
            {/* <Button variant="bordered">Open Menu</Button> */}
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {entrenamientos.map((beneficio) => (
              <DropdownItem key={beneficio.name}>
                <Link className="" href={beneficio.path}>
                  {beneficio.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Link className="text-sm py-8 px-2" href="/entrenadores-personales">
          ENTRENADORES
        </Link>

        {/* <Link className="text-sm py-8 px-2" href="/">
          INICIAR SESION
        </Link> */}

        <Dropdown>
          <DropdownTrigger>
            <p className="text-sm py-8 px-2">CONECTAR</p>
            {/* <Button variant="bordered">Open Menu</Button> */}
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {conexiones.map((beneficio) => (
              <DropdownItem key={beneficio.name}>
                <Link className="" href={beneficio.path}>
                  {beneficio.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {/* <p>Locations</p>
        <p>BENEFITS</p>
        <p>CLASSES</p>
        <p>TRAINING</p>
        <p>SPORTS</p>
        <p>MEMBER LOGIN</p>
        <p>CONNECT</p> */}
      </div>
      <div className="flex gap-4">
        <Button className="rounded-md font-medium text-xs h-7">
          FREE PASS
        </Button>
        <Button className="rounded-md font-medium text-xs h-7 bg-blue-600 text-white">
          JOIN ONLINE
        </Button>
      </div>
    </nav>
  );
};

export default Header;
