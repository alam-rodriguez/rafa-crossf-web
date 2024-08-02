import React from "react";
import BenefitsItem from "./BenefitsItem";
import Card from "@/components/cards/Card";

const BenefitsList = () => {
  return (
    <div className="py-24 px-3 max-w-screen-xl mx-auto">
      {/* <BenefitsItem
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="left"
        btnText="EXPLORAR"
      /> */}
      <Card
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="left"
        imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg?length=1024&name=191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg"
        btnText="EXPLORAR"
        pathNativation=""
      />

      {/* <Card
        head="STUDIO EXPERIENCE"
        descripion="We have classes for every goal and everybody. Refresh your routine with our energizing studio classes and achieve more from your workout with the camaraderie and support of others."
        imageSide="right"
        imageUrl="https://2094550.fs1.hubspotusercontent-na1.net/hub/2094550/hubfs/191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg?length=1024&name=191117_OL_SS_Cycle_0218-EDITED-noalarm.jpg"
        btnText="EXPLORAR"
        pathNativation=""
      /> */}
    </div>
  );
};

export default BenefitsList;
