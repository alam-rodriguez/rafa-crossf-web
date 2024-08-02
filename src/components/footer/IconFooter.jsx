"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const IconFooter = ({ icon, link }) => {
  return (
    <Link href={link} target="_blank">
      <Icon className="text-4xl" icon={icon} />
    </Link>
  );
};

export default IconFooter;
