"use client";

import React, { useEffect, useState } from "react";
import ImagesMain from "@/components/ImagesMain";

const page = ({ params }) => {
  const [entrenadorName, setEntrenadorName] = useState(
    params.entrenador.split("-").join(" ")
  );

  useEffect(() => {
    console.log(entrenadorName);
  }, []);
  return (
    <div>
      <ImagesMain
        img="https://www.onelifefitness.com/hubfs/shutterstock_793611454.png"
        text={entrenadorName}
      />
    </div>
  );
};

export default page;
