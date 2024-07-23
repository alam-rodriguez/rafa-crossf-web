import React from "react";

const SocialPosts = () => {
  return (
    <div className="text-center py-14">
      <div className="mb-7 ">
        <hr
          className="w-28 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
        <p
          className="text-3xl py-6 font-normal"
          style={{ letterSpacing: ".4em" }}
        >
          #ONELIFEFIT
        </p>
        <hr
          className="w-28 border-0 bg-gray-300 mx-auto"
          style={{ height: 2 }}
        />
      </div>
      <p className="text-sm leading-6">
        You have one life to live, so make it count! Tag us using #OnelifeFit in
        your pics on Instagram for a chance to be featured on our social pages.
      </p>
    </div>
  );
};

export default SocialPosts;
