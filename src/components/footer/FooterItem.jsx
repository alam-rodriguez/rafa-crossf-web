import React from "react";
import CustomHr from "../CustomHr";
import Link from "next/link";

const FooterItem = ({ title, links }) => {
  return (
    <div className="mb-16 sm:mb-0 basis-0- basis-1/4">
      <div className="mb-5">
        <CustomHr mxcenter={false} />
        <p className="text-sm py-3 font-bold" style={{ letterSpacing: ".2em" }}>
          {title}
        </p>
        <CustomHr mxcenter={false} />
      </div>
      <div>
        {links.map((link, i) => (
          <Link
            key={i}
            className="text-sm tracking-widest py-1 block"
            href={link.path}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;
