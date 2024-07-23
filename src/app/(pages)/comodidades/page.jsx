"use client";

import CustomHr from "@/components/CustomHr";
import useWidth from "@/hooks/useWidth/useWidth";
import React, { useEffect } from "react";

import ImageBenefits from "@/components/benefits/ImageBenefits";
import TextMainBenefits from "./TextMainBenefits";
import BenefitsList from "./benefits-list/BenefitsList";

const page = () => {
  const { width } = useWidth();

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div>
      <ImageBenefits />

      <TextMainBenefits />

      <BenefitsList />
    </div>
  );
};

export default page;
