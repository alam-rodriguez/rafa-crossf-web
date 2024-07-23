import React from "react";
import { Icon } from "@iconify/react";

const Activity = ({ icon, activity, description }) => {
  return (
    <div className="text-center p-20 basis-4/12">
      <Icon className="mx-auto mb-7 text-7xl" icon={icon} />
      <div className="mb-7">
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 1.8 }}
        />
        <h3 className="py-2 text-lg " style={{ letterSpacing: ".2em" }}>
          {activity}
        </h3>
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 1.8 }}
        />
      </div>
      <p className="text-sm font-medium leading-6">{description}</p>
    </div>
  );
};

export default Activity;
