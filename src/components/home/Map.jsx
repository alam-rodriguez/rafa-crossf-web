import React from "react";
import CustomHr from "../CustomHr";

const Map = () => {
  return (
    <div className="my-28 bg-white m-5">
      <div className="p-10 pb-5 text-center mb-5">
        <CustomHr />
        <p
          className="text-lg font-semibold py-3"
          style={{ letterSpacing: ".2em" }}
        >
          ENCUENTRA RAFA CROOSF GYM EN EL MAPA
        </p>
        <CustomHr />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9530.952632944638!2d-69.70051988613892!3d18.557786887377354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf83e97432cac5%3A0x8a724bd5353ddb1d!2sRaFa%20CROSSF%20GYM!5e0!3m2!1ses!2sdo!4v1720932977736!5m2!1ses!2sdo"
        className="w-full"
        style={{ height: 700 }}
        // width="600"
        // height="450"
        // style="border:0;"
        // allowfullscreen=""
        // loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
