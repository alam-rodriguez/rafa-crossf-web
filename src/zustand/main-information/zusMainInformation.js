import { create } from "zustand";

export const zusMainInformation = create((set) => ({
  nameApp: "",
  motivationalText: "",
  monthlyPrice: 0,
  imageApp: "",
  mainVideo: "",
  secondVideo: "",
  imageTeam: "",
  redes: {},

  setMainInformation: (info) =>
    set(() => {
      console.log(info);
      const domain =
        "https://rafa-crossf-gym-payloadcms-4e8559a.payloadcms.app";
      // const domain = "http://localhost:3000";
      return {
        nameApp: info.appName,
        motivationalText: info.MotivationalText,
        monthlyPrice: info.price,
        imageApp: domain + info.imageLogo.url,
        mainVideo: domain + info.mainVideo.url,
        secondVideo: domain + info.secondVideo.url,
        imageTeam: domain + info.imageTeam.url,
        redes: info.redes,
      };
    }),
  cards: [],
  setCards: (cards) => set(() => ({ cards: cards })),
}));
