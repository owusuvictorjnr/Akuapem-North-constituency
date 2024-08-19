import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative">
        <Image
          src={"/assets/logo/npp-1.jpg"}
          alt="background"
          width={1000}
          height={1000}
          className="blur-sm w-full h-[50vh] object-cover"
        />
      </div>

      {/* Foreground Image */}
      <div className="absolute inset-0">
        <Image
          src={"/assets/imgs/Sammi-Awuku-2.jpg"}
          alt="hero"
          width={500}
          height={500}
          className="h-[50vh] w-1/2"
        />
      </div>
    </div>
  );
};

export default Hero;
