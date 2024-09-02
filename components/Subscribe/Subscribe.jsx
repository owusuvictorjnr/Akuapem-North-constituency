import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Subscribe() {
  return (
    <>
      <div className="bg-black min-h-[50vh] mb-10">
        <div className="w-full absolute opacity-25">
          <div className=" w-full">
            <Image
              src="/assets/logo/npp-1.jpg"
              alt="logo"
              height={500}
              width={500}
              className="w-full h-[50vh]"
            />
          </div>
        </div>
        <div className="text-white text-center pt-10 space-y-5">
          <h1 className="text-4xl capitalize font-bold px-10">
            Subscribe to our newsletter
          </h1>

          <p className="px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            debitis repudiandae officia veniam atque ipsa?
          </p>
        </div>
        <div className="relative px-10 flex-col items-center pt-[5rem] space-y-5">
          <form className="flex justify-center">
            <Input
              type="text"
              className=" px-2 py-1 rounded-md bg-transparent text-white capitalize lg:w-1/2"
              placeholder="Enter your email here"
            />
          </form>
          <div className="flex justify-center font-bold   px-10 mb-5">
            <Button
              type="email"
              className="w-full lg:w-1/4 bg-rose-500 uppercase "
            >
              Subscribe now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
