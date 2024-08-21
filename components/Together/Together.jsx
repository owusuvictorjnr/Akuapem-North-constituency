"use client";

import React from "react";
import Campaigns from "../Campaigns/Campaigns";
import Mission from "../Mission/Mission";
import Election from "../Election/Election";

const Together = () => {
  return (
    <>
      <div className="min-h-[30rem] mb-10 space-y-10">
        <div className=" mx-auto mt-52">
          <h1 className="font-bold text-4xl capitalize text-center my-5">
            together we are stronger
          </h1>

          <p className="text-center text-gray-400 container">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias et
            optio veniam quos <br /> ea odit dolorem, nulla accusamus asperiores
            voluptate perspiciatis ut quis quam sit suscipit, dolores sint!
            Optio, unde.
          </p>
        </div>

        <div className="lg:flex container lg:container mx-auto text-center px-10 space-x-5">
          {/* Campaign */}
          <div className="">
            <Campaigns />
          </div>

          <div className="">
            <Mission />
          </div>

          <div className="">
            <Election />
          </div>
        </div>
      </div>
    </>
  );
};

export default Together;

// black heater

// brown fan
