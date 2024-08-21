import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

const Donation = () => {
  return (
    <>
      <div className="min-h-[36rem] mb-10 bg-black">
        <div className="">
          <div className=" absolute bg-black opacity-40">
            <Image
              src="/assets/imgs/vote.png"
              alt="vote"
              height={1000}
              width={1000}
              className="lg:h-[36rem] md:h-[37rem] h-[39.5rem] w-screen"
            />
            {/* <div className="absolute inset-0 bg-black opacity-50" /> */}
          </div>
          <div className=" relative pt-[10rem] space-y-10">
            <div className="text-white space-y-5">
              <h1 className="capitalize text-4xl text-center font-bold tracking-widest">
                make a donation
              </h1>

              <p className="text-center text-gray-300 px-10 lg:container mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                magni animi temporibus reiciendis laboriosam eveniet debitis
                expedita minima quod nisi!
              </p>
            </div>

            <form className="flex flex-col items-center space-y-10 px-10">
              <Input
                type="name"
                name=""
                id=""
                className=" px-2 py-1 rounded-md bg-transparent text-white capitalize lg:w-1/2"
                placeholder="Full Name"
              />
              <Input
                type="email"
                name=""
                className=" px-2 py-1 rounded-md bg-transparent text-white capitalize lg:w-1/2"
                placeholder="Email"
              />
              <Input
                type="text"
                className=" px-2 py-1 rounded-md bg-transparent text-white capitalize lg:w-1/2"
                placeholder="Donation $"
              />
            </form>
            <div className="flex justify-center font-bold   px-10 pb-5">
              <Button className="w-full lg:w-1/4 bg-rose-500 uppercase ">
                donate now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;
