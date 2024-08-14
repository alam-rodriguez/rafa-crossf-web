import { create } from "zustand";

export const zusPages = create((set) => ({
  // domain: "http://localhost:3000",
  domain: "https://rafa-crossf-gym-payloadcms-4e8559a.payloadcms.app",
  pageComodidades: {},
  setPageComodidades: (pageInfo) => set(() => ({ pageComodidades: pageInfo })),
  pageLimpieza: {},
  setPageLimpieza: (pageInfo) => set(() => ({ pageLimpieza: pageInfo })),
  personalsTrainers: [],
  setPersonalsTrainers: (trainers) =>
    set(() => ({ personalsTrainers: trainers })),
  pageCasosExito: {},
  setPageCasosExito: (pageInfo) => set(() => ({ pageCasosExito: pageInfo })),
  pageBlogsYNoticias: {},
  setPageBlogsYNoticias: (pageInfo) =>
    set(() => ({ pageBlogsYNoticias: pageInfo })),
  pageInicioInteligente: {},
  setPageInicioInteligente: (pageInfo) =>
    set(() => ({ pageInicioInteligente: pageInfo })),
  pageEstiramiento: {},
  setPageEstiramiento: (pageInfo) =>
    set(() => ({ pageEstiramiento: pageInfo })),
  pageMenteYCuerpo: {},
  setPageMenteYCuerpo: (pageInfo) =>
    set(() => ({ pageMenteYCuerpo: pageInfo })),
  pageRelajacion: {},
  setPageRelajacion: (pageInfo) => set(() => ({ pageRelajacion: pageInfo })),
}));
