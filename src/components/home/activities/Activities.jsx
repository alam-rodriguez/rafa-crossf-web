import React from "react";
import { Icon } from "@iconify/react";
import Activity from "./Activity";
import { Button } from "@nextui-org/react";

const Activities = () => {
  return (
    <div
      className="bg-black my-14 py-40 text-white mx-auto"
      style={{ maxWidth: "1400px" }}
    >
      <div className="text-center mb-16">
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
        <p className="py-4 text-lg font-bold tracking-widest">
          AMAZING AMENITIES
        </p>
        <hr
          className="w-14 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
      </div>

      <div className="flex flex-wrap mb-32 justify-center">
        <Activity
          icon="solar:swimming-outline"
          activity="SWIMMING"
          description="Who knew fun and fitness could be so refreshing?"
        />
        <Activity
          icon="solar:swimming-outline"
          activity="SWIMMING"
          description="Who knew fun and fitness could be so refreshing?"
        />
        <Activity
          icon="solar:swimming-outline"
          activity="SWIMMING"
          description="Who knew fun and fitness could be so refreshing?"
        />
        <Activity
          icon="solar:swimming-outline"
          activity="SWIMMING"
          description="Who knew fun and fitness could be so refreshing?"
        />
        <Activity
          icon="solar:swimming-outline"
          activity="SWIMMING"
          description="Who knew fun and fitness could be so refreshing?"
        />
        <Activity
          icon="solar:swimming-outline"
          activity="SWIMMING"
          description="Who knew fun and fitness could be so refreshing?"
        />
      </div>

      <div className="text-center ">
        <p className="text-lg mb-7" style={{ letterSpacing: ".2em" }}>
          ALL OF THIS AND SO MUCH MORE STARTING AT ONLY
        </p>
        <p className="mb-7">
          <span className="text-8xl">$29.99</span>{" "}
          <span className="text-5xl tracking-wider">/MONTH</span>
        </p>
        {/* <button>JOIN NOW</button> */}
        <Button
          variant="bordered"
          className="text-white text-sm font-semibold tracking-widest py-3 px-12"
          style={{ borderRadius: 3, border: "1px solid #fff" }}
        >
          JOIN NOW
        </Button>
      </div>
    </div>
  );
};

export default Activities;
