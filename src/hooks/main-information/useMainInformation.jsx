import fetchImage from "@/requests/image/image";
import {
  fetchCards,
  fetchMainInformation,
} from "@/requests/main-information/mainInformation";
import { zusMainInformation } from "@/zustand/main-information/zusMainInformation";
import React, { useEffect } from "react";

const useMainInformation = () => {
  const { setMainInformation, setCards } = zusMainInformation();

  const getMainInformation = async () => {
    const res = await fetchMainInformation();
    console.log(res);
    // const imageUrl = await fetchImage(res.imageLogo);
    console.log(res);
    setMainInformation(res);
    // setMainInformation(res, imageUrl);

    // console.log(imageUrl);
    console.log(res);
  };

  const getCards = async () => {
    const cards = await fetchCards();
    setCards(cards);
  };
  useEffect(() => {
    getMainInformation();
    getCards();
  }, []);

  return {};
};

export default useMainInformation;
