import fetchPages from "@/requests/pages/pages";
import { zusPages } from "@/zustand/pages/zusPages";
import React, { useEffect } from "react";

const usePages = () => {
  const {
    setPageComodidades,
    setPageLimpieza,
    setPersonalsTrainers,
    setPageCasosExito,
    setPageBlogsYNoticias,
    setPageInicioInteligente,
    setPageEstiramiento,
    setPageMenteYCuerpo,
    setPageRelajacion,
  } = zusPages();

  const getPageComodidades = async () => {
    const res = await fetchPages("/api/globals/comodidades-page");
    setPageComodidades(res);
  };

  const getPageLimpieza = async () => {
    const res = await fetchPages("/api/globals/limpieza-y-seguridad-page");
    console.log(res);
    setPageLimpieza(res);
  };

  const getPageCasosDeExito = async () => {
    const res = await fetchPages("/api/globals/casos-de-exito-page");
    setPageCasosExito(res);
  };

  const getPageEntrenadoresPersonales = async () => {
    const res = await fetchPages("/api/entrenadores-personales");
    setPersonalsTrainers(res.docs);
  };

  const getPageBlogsYNoticias = async () => {
    const res = await fetchPages("/api/globals/blogs-y-noticias-page");
    setPageBlogsYNoticias(res);
  };
  const getPageInicioInteligente = async () => {
    const res = await fetchPages("/api/globals/inicio-inteligente-page");
    setPageInicioInteligente(res);
  };
  const getPageEstiramiento = async () => {
    const res = await fetchPages("/api/globals/estiramiento-page");
    setPageEstiramiento(res);
  };
  const getPageMenteYCuerpo = async () => {
    const res = await fetchPages("/api/globals/mente-y-cuerpo-page");
    setPageMenteYCuerpo(res);
  };

  const getPageRelajacion = async () => {
    const res = await fetchPages("/api/globals/relajamiento-page");
    setPageRelajacion(res);
  };

  useEffect(() => {
    getPageComodidades();
    getPageLimpieza();
    getPageCasosDeExito();
    getPageEntrenadoresPersonales();
    getPageBlogsYNoticias();
    getPageInicioInteligente();
    getPageEstiramiento();
    getPageMenteYCuerpo();
    getPageRelajacion();
  }, []);

  return {};
};

export default usePages;
