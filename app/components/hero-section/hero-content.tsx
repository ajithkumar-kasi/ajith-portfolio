import React from "react";
import { NavBar } from "./navbar";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SocialMedia } from "../contact-section/social-media";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="w-full  hero-section bg-cover h-screen">
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="flex h-full justify-center md:items-center w-full lg:px-28 pt-20  p-10 ">
          <div className=" md:w-full flex flex-col gap-5 justify-center pb-60 items-center h-full">
            <small className="text-[grey]">NICE TO MEET YOU</small>
            <div
              className={`md:text-5xl lg:text-[80px] font-semibold  text-3xl `}
            >
              Hi ! I&#39;m Ajith Kumar
            </div>
            <div className="md:text-4xl text-xl font-semibold">
              Front-End Developer
            </div>
            <div className="md:text-xl lg:w-[60%] text-center">
              I build beautiful, functional websites with a focus on clean
              design and seamless user experiences. If you&#39;re looking for a
              developer to elevate your brand and grow your business, let’s
              shake hands and get started!
            </div>
            <a
              className="hire-button "
              href="mailto:ajithkumarkasi555@gmail.com"
            >
              Hire me
            </a>

            <div className="absolute md:bottom-40 md:-left-20 md:-rotate-90 bottom-0">
              <div className="flex items-start gap-3">
                <SocialMedia />
                <div className="border-t-2 border-black mt-3">
                  <span className="invisible">-----------------------</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
