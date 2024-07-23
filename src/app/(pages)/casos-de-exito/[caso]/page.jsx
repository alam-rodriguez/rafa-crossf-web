"use client";

import React, { useEffect } from "react";

const page = ({ params }) => {
  useEffect(() => {
    console.log(params);
  }, []);
  return <div>hola</div>;
};

export default page;
