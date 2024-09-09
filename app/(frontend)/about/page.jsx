import Campaigns from "@/components/Campaigns/Campaigns";
import UpcomingCampaign from "@/components/UpcomingCampaign/UpcomingCampaign";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="mb-10">
        <div className="relative bg-black h-[20vh] lg:h-[30vh]">
          <div className="absolute inset-0">
            <Image
              src="/assets/imgs/vote.png"
              alt="logo"
              // height={1000}
              // width={1000}
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-white text-3xl lg:text-5xl font-bold">
              About Us
            </h1>
          </div>
        </div>

        {/* Bawumi */}
        <div className="mt-[10rem]">
          <div className="flex flex-col lg:flex-row space-y-10 items-center container mx-auto space-x-10">
            <Image
              src="/assets/imgs/bawu-1.jpg"
              alt="logo"
              height={1000}
              width={1000}
              className="w-full lg:w-1/2 h-[55vh] lg:h-[65vh]"
            />

            {/* Mission & Vision statements */}
            <div className="space-y-5">
              <h1 className=" text-red-500 capitalize font-semibold text-2xl ">
                about candidate
              </h1>
              <p className="container mx-auto md:px-10 lg:px-20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                officia aperiam tempore reprehenderit dolore, odio porro
                repellendus! Illo, totam ipsum aliquid distinctio culpa aut! Non
                vel expedita ipsam quibusdam repellat?
              </p>

              {/* Mission statements */}
              <div className="space-y-5">
                <h className=" text-red-600 capitalize font-semibold text-2xl">
                  mission
                </h>

                <p className="container mx-auto  md:px-10 lg:px-20">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto labore harum, modi sint laborum velit.
                </p>
              </div>

              {/* Mission statements */}
              <div className="space-y-5">
                <h className=" text-red-600 capitalize font-semibold text-2xl">
                  vision
                </h>

                <p className="container mx-auto  md:px-10 lg:px-20">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto labore harum, modi sint laborum velit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sammi */}
        <div className="mt-[10rem] order-1">
          <div className="">
            <div className="flex flex-col order-1 lg:flex-row space-y-10 items-center container mx-auto space-x-10">
              <Image
                src="/assets/imgs/Sammi-Awuku-2.jpg"
                alt="logo"
                height={1000}
                width={1000}
                className="w-full lg:w-1/2 h-[55vh] lg:h-[65vh]"
              />

              {/* Mission & Vision statements */}
              <div className="space-y-5">
                <h1 className=" text-red-500 capitalize font-semibold text-2xl ">
                  about candidate
                </h1>
                <p className="container mx-auto md:px-10 lg:px-20">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque officia aperiam tempore reprehenderit dolore, odio porro
                  repellendus! Illo, totam ipsum aliquid distinctio culpa aut!
                  Non vel expedita ipsam quibusdam repellat?
                </p>

                {/* Mission statements */}
                <div className="space-y-5">
                  <h className=" text-red-600 capitalize font-semibold text-2xl">
                    mission
                  </h>

                  <p className="container mx-auto  md:px-10 lg:px-20">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iusto labore harum, modi sint laborum velit.
                  </p>
                </div>

                {/* Mission statements */}
                <div className="space-y-5">
                  <h className=" text-red-600 capitalize font-semibold text-2xl">
                    vision
                  </h>

                  <p className="container mx-auto md:px-10 lg:px-20">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iusto labore harum, modi sint laborum velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming campaign */}
        <div className="mt-[5rem]">
          <UpcomingCampaign />
        </div>

        {/* chairman */}
        <div className="mt-[10rem] order-1">
          <div className="">
            <div className="flex flex-col order-1 lg:flex-row space-y-10 items-center container mx-auto space-x-10">
              <Image
                src="/assets/imgs/reg-1.jpg"
                alt="logo"
                height={1000}
                width={1000}
                className="w-full lg:w-1/2 h-[55vh] lg:h-[65vh] rounded-md"
              />

              {/* Mission & Vision statements */}
              <div className="space-y-5">
                <h1 className=" text-red-500 capitalize font-semibold text-2xl ">
                  about regional chairman
                </h1>
                <p className="container mx-auto md:px-10 lg:px-20">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque officia aperiam tempore reprehenderit dolore, odio porro
                  repellendus! Illo, totam ipsum aliquid distinctio culpa aut!
                  Non vel expedita ipsam quibusdam repellat?
                </p>

                {/* Mission statements */}
                <div className="space-y-5">
                  <h className=" text-red-600 capitalize font-semibold text-2xl">
                    mission
                  </h>

                  <p className="container mx-auto  md:px-10 lg:px-20">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iusto labore harum, modi sint laborum velit.
                  </p>
                </div>

                {/* Mission statements */}
                <div className="space-y-5">
                  <h className=" text-red-600 capitalize font-semibold text-2xl">
                    vision
                  </h>

                  <p className="container mx-auto md:px-10 lg:px-20">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iusto labore harum, modi sint laborum velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
