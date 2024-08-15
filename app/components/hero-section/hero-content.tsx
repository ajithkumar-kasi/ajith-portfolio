import React from "react";
import { NavBar } from "./navbar";
import Person from "../../images.jpeg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="w-full max-w-[1500px] md:p-24 p-10">
      <NavBar />
      <div className="flex justify-between items-center  gap-20 lg:flex-row flex-col-reverse lg:py-44 py-20">
        <div className="relative">
          <div className="h-60 bg-[#4b4b4b] w-60 md:w-[400px] md:h-[400px] "></div>
          <Image
            src={Person}
            alt={""}
            className="absolute left-10 -top-10 h-60 w-60 md:w-[400px] md:h-[400px]"
          />
        </div>
        <div className="lg:w-[60%] md:w-full flex flex-col gap-5 justify-center">
          <div className="md:text-5xl font-semibold  text-3xl">
            Hi ! <br /> I&#39;m Ajith Kumar
          </div>
          <div className="md:text-2xl text-xl font-medium">
            Front-End Developer
          </div>
          <div className="md:text-lg">
            I build beautiful, functional websites with a focus on clean design
            and seamless user experiences. Let&#39;s create something great
            together. Whether you&#39;re looking to create a new website or
            improve an existing one, I’m here to help make your online presence
            stand out.
          </div>
        </div>
      </div>
    </div>
  );
};
