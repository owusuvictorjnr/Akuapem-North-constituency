import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";

const UpcomingCampaign = () => {
  return (
    <div className="min-h-[30rem]  space-y-32 mt-52">
      <div className="container mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center">Upcoming Campaign</h1>

        <p className=" text-gray-400 px-20 lg:px-[20rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          quaerat iusto, corporis quasi earum nobis voluptatum facere veritatis
          debitis quibusdam.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 gap-10 lg:gap-0 container mx-auto">
        <div className="flex relative items-center justify-center">
          <Card className="min-h-[40vh] hover:scale-105 hover:duration-500 w-[20rem] bg-black">
            <Image
              src="/assets/imgs/camp-1.jpg"
              alt="campaign"
              height="1000"
              width={1000}
              className="h-[40vh]  bg-black opacity-30 hover:opacity-70 "
            />
          </Card>
          <div className="absolute mt-[14rem]">
            <h1 className=" text-red-500 text-xl hover:hidden font-bold">
              human right conference 2024
            </h1>

            <p className="flex gap-2">
              <CiLocationOn className="text-white font-semibold mt-1 " />
              <span className="text-gray-100 capitalize">accra-ghana</span>
            </p>

            <p className="flex gap-2">
              <FaRegCalendarCheck className="text-white font-semibold mt-1" />
              <span className="text-gray-100 capitalize">20th june 2024</span>
            </p>
          </div>
        </div>

        <div className="flex relative items-center justify-center">
          <Card className="min-h-[40vh] hover:scale-105 hover:duration-500 w-[20rem] bg-black">
            <Image
              src="/assets/imgs/camp-2.jpg"
              alt="campaign"
              height="1000"
              width={1000}
              className="h-[40vh]  bg-black opacity-30 hover:opacity-70 "
            />
          </Card>
          <div className="absolute mt-[14rem]">
            <h1 className=" text-red-500 text-xl hover:hidden font-bold">
              human right conference 2024
            </h1>

            <p className="flex gap-2">
              <CiLocationOn className="text-white font-semibold mt-1 " />
              <span className="text-gray-100 capitalize">accra-ghana</span>
            </p>

            <p className="flex gap-2">
              <FaRegCalendarCheck className="text-white font-semibold mt-1" />
              <span className="text-gray-100 capitalize">20th june 2024</span>
            </p>
          </div>
        </div>

        <div className="flex relative items-center justify-center">
          <Card className="min-h-[40vh] hover:scale-105 hover:duration-500 w-[20rem] bg-black">
            <Image
              src="/assets/imgs/sam-camp.jpg"
              alt="campaign"
              height="1000"
              width={1000}
              className="h-[40vh]  bg-black opacity-30 hover:opacity-70 "
            />
          </Card>
          <div className="absolute mt-[14rem]">
            <h1 className=" text-red-500 text-xl hover:hidden font-bold">
              human right conference 2024
            </h1>

            <p className="flex gap-2">
              <CiLocationOn className="text-white font-semibold mt-1 " />
              <span className="text-gray-100 capitalize">accra-ghana</span>
            </p>

            <p className="flex gap-2">
              <FaRegCalendarCheck className="text-white font-semibold mt-1" />
              <span className="text-gray-100 capitalize">20th june 2024</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCampaign;
