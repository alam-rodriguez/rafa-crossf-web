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
// import dynamic from "next/dynamic";

// const Icon = dynamic(() => import("@iconify/react"), { ssr: false });

const beneficios = [
  { name: "Comodidades", path: "/comodidades" },
  // { name: "Club de ninos", path: "/" },
  // { name: "Membresia", path: "/" },
  { name: "Limpio y seguro", path: "/limpieza-seguridad" },
  { name: "Casos de exito", path: "/casos-de-exito" },
];
const clases = [
  { name: "Horarios", path: "/horarios" },
  { name: "Descripcion", path: "/descripcion" },
  { name: "Registro de clase", path: "/clases" },
];
const entrenamientos = [
  { name: "Inicio inteligente", path: "/inicio-inteligente" },
  { name: "Estirar y recuperar", path: "/estiramiento" },
  { name: "Mente y cuerpo", path: "/mente-y-cuerpo" },
  { name: "Relajacion y recuperacion", path: "/relajacion" },
];

const conexiones = [
  { name: "Blogs y noticias", path: "/blogs-y-noticias" },
  {
    name: "whassap",
    path: "https://www.facebook.com/Activecrossf",
    target: "_blank",
  },
  {
    name: "Instagram",
    path: "https://www.facebook.com/Activecrossf",
    target: "_blank",
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/Activecrossf",
    target: "_blank",
  },
  {
    name: "TikTok",
    path: "https://www.facebook.com/Activecrossf",
    target: "_blank",
  },
  {
    name: "Linkedin",
    path: "https://www.facebook.com/Activecrossf",
    target: "_blank",
  },
];

const Header = () => {
  const router = useRouter();

  const handleClicGoHome = () => router.push("/");

  const { width } = useWidth();

  useEffect(() => {
    console.log(width);
  }, [width]);

  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleClickShowSubMenu = (e) => {
    if (showSubMenu == e.target.innerText) {
      setShowSubMenu(false);
      return;
    }
    if (e.target.innerText == "UBICACION") {
      setShowMenu(false);
      router.push("/ubicacion");
    } else if (e.target.innerText == "ENTRENADORES") {
      setShowMenu(false);
      router.push("/entrenadores-personales");
    } else {
      setShowSubMenu(e.target.innerText);
    }

    console.log(e.target.innerText == "UBICACION");
  };

  const handleClickShowMenu = () => setShowMenu(!showMenu);

  const setMenusFalse = () => {
    setShowMenu(false);
    setShowSubMenu(false);
  };

  if (width < 1050) {
    return (
      <nav className="fixed w-full z-10">
        <div className="bg-black flex justify-between items-center text-white px-6  z-20">
          <Image
            onClick={handleClicGoHome}
            className="h-20 w-auto"
            // src="https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg"
            src={logo}
            alt=""
          />

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
            <div className=" flex- text-base gap-4- font-semibold text-center w-full">
              <p className="text-xs py-7" onClick={handleClickShowSubMenu}>
                UBICACION
              </p>
              <p className="text-xs py-7" onClick={handleClickShowSubMenu}>
                BENEFICIOS
              </p>
              {showSubMenu == "BENEFICIOS" ? (
                <SubManu items={beneficios} setMenusFalse={setMenusFalse} />
              ) : null}
              <p className="text-xs py-7" onClick={handleClickShowSubMenu}>
                CLASES
              </p>
              {showSubMenu == "CLASES" && (
                <SubManu items={clases} setMenusFalse={setMenusFalse} />
              )}
              <p className="text-xs py-7" onClick={handleClickShowSubMenu}>
                ENTRENAMIENTOS
              </p>
              {showSubMenu == "ENTRENAMIENTOS" && (
                <SubManu items={entrenamientos} setMenusFalse={setMenusFalse} />
              )}
              <p className="text-xs py-7" onClick={handleClickShowSubMenu}>
                ENTRENADORES
              </p>
              <p className="text-xs py-7" onClick={handleClickShowSubMenu}>
                CONECTAR
              </p>
              {showSubMenu == "CONECTAR" && (
                <SubManu items={conexiones} setMenusFalse={setMenusFalse} />
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav>
    );
  } else {
    return (
      <nav className="bg-black flex justify-between items-center text-white px-6 fixed w-full z-10">
        <div>
          <Image
            onClick={handleClicGoHome}
            className="h-20 w-auto"
            // src="https://th.bing.com/th/id/OIG4.o_N6LZyHBKYgLGNeF6di?pid=ImgGn"
            src={logo}
            alt=""
          />
        </div>
        <div
          className="flex text-base- gap-4- font-semibold"
          style={{ letterSpacing: ".01em" }}
        >
          <Link
            className="text-xs"
            style={{ padding: "33px 10px" }}
            href="/ubicacion"
          >
            UBICACION
          </Link>

          <Dropdown>
            <DropdownTrigger>
              <p className="text-xs" style={{ padding: "33px 10px" }}>
                BENEFICIOS
              </p>
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
              <p className="text-xs" style={{ padding: "33px 10px" }}>
                CLASSES
              </p>
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
              <p className="text-xs " style={{ padding: "33px 10px" }}>
                ENTRENAMIENTOS
              </p>
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

          <Link
            className="text-xs"
            style={{ padding: "33px 10px" }}
            href="/entrenadores-personales"
          >
            ENTRENADORES
          </Link>

          {/* <Link className="text-sm py-8 px-2" href="/">
          INICIAR SESION
        </Link> */}

          <Dropdown>
            <DropdownTrigger>
              <p className="text-xs" style={{ padding: "33px 10px" }}>
                CONECTAR
              </p>
              {/* <Button variant="bordered">Open Menu</Button> */}
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              {conexiones.map((beneficio) => (
                <DropdownItem key={beneficio.name}>
                  <Link
                    className=""
                    href={beneficio.path}
                    target={beneficio.target}
                  >
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
          <Button
            className=" font-medium- text-xs h-7- p-3 font-bold tracking-widest"
            style={{ borderRadius: 3 }}
          >
            FREE PASS
          </Button>
          <Button
            className="rounded-md font-medium- tracking-widest font-bold text-xs h-7- p-3 bg-blue-600 text-white"
            style={{ borderRadius: 3 }}
          >
            JOIN ONLINE
          </Button>
        </div>
      </nav>
    );
  }
};

export default Header;

const SubManu = ({ items, setMenusFalse }) => {
  return (
    <div className="w-full text-start" style={{ background: "#424548" }}>
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.path}
          className="block text-sm font-medium tracking-widest"
          style={{ padding: "25px 15px" }}
          onClick={setMenusFalse}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
