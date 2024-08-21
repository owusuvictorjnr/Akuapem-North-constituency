"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "../ui/button";

const ImageListData = {
  images: [
    {
      image: "/assets/imgs/bawu-1.jpg",
      aosDelay: "500",
      name: "Alhaji Bawumia",
      aosData: "fade-up", // Animation for the name
      aspiring: "Aspiring President of Ghana",
    },
    {
      image: "/assets/imgs/SAMMI-1.jpg",
      aosDelay: "800",
      name: "Sammi Awuku",
      aosData: "zoom-in", // Or any other desired animation
      aspiring: "Aspiring MP of Akuapem North",
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // Ensure only one item slides at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = ({ deviceType }) => {
  return (
    <div className="w-full">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        rewind={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={800}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        className=""
      >
        {ImageListData.images.map((item, index) => (
          <div key={index} className="relative w-screen min-h-screen">
            {/* Background Image with Dark Overlay */}
            <Image
              src={"/assets/logo/npp-1.jpg"}
              alt="background"
              width={1000}
              height={1000}
              className="w-full h-[100vh] object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Foreground Content */}
            <div className="absolute inset-0 container mx-auto px-10 lg:grid lg:grid-cols-2">
              <div
                data-aos={item.aosData}
                data-aos-duration={item.aosDelay}
                className="text-white lg:place-items-center flex  text-center mb-8"
              >
                <div className="">
                  <h1 className="text-[4rem] lg:text-[7rem] font-bold flex mt-10 items-center">
                    {item.name}
                  </h1>

                  <p data-aos="slide-right" className="">
                    {item.aspiring}
                  </p>

                  <div className="mt-10">
                    <Button className="bg-rose-500 capitalize">
                      become a volunteer
                    </Button>
                  </div>
                </div>
              </div>
              <div
                data-aos={item.aosData}
                data-aos-duration={item.aosDelay}
                className="flex place-items-center items-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={1000}
                  width={1000}
                  className="w-[35rem] h-[45vh] lg:h-[70vh] mt-10 transition flex duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// flex flex-col items-center justify-center

export default Hero;
