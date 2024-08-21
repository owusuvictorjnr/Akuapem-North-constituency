import React from "react";
import { GoStack } from "react-icons/go";

const Election = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 mt-10">
      <GoStack
        size={90}
        color="white"
        className="bg-red-500 rounded-full py-2 px-2 hover:bg-blue-950"
      />

      <h1 className="capitalize font-semibold text-3xl">election</h1>
      <p className="text-center text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos impedit
        vero ea accusamus magnam beatae.
      </p>
    </div>
  );
};

export default Election;
