import React from "react";
import BenefitsItem from "./BenefitsItem";

const BenefitsList = () => {
  return (
    <div className="py-24 px-3 max-w-screen-xl mx-auto">
      <BenefitsItem
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="left"
        btnText="EXPLORAR"
      />
      <BenefitsItem
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="right"
        btnText="EXPLORAR"
      />
      <BenefitsItem
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="left"
        btnText="EXPLORAR"
      />
      <BenefitsItem
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="right"
        btnText="EXPLORAR"
      />
      <BenefitsItem
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="left"
        btnText="EXPLORAR"
      />
      <BenefitsItem
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="right"
        btnText={false}
      />
    </div>
  );
};

export default BenefitsList;
