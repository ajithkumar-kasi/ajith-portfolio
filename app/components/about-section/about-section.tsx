import { motion } from "framer-motion";
import React from "react";
import Person from "../../images.jpeg";
import MyPhoto from "../../assets/ak-image.jpg";
import Image from "next/image";

export const AboutSection = () => {
  const text = "Framer Motion is a really cool tool".split(" ");
  return (
    <div className="flex flex-col gap-4 items-center md:p-24 p-10" id="About">
      {/* {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))} */}
      <div className="md:text-5xl lg:text-[120px] font-semibold  text-3xl">
        About Me
      </div>
      <div className="flex justify-between md:items-center gap-10 md:gap-20 lg:flex-row flex-col py-20">
        <div className="relative">
          <div className="h-60 bg-[#4b4b4b] w-60 md:w-[400px] md:h-[400px] "></div>
          <Image
            src={MyPhoto}
            alt={""}
            className="absolute left-10 -top-10 h-60 w-60 md:w-[400px] md:h-[400px] object-cover object-top"
          />
        </div>
        <div className="lg:w-[60%] md:w-full flex flex-col gap-5 justify-center">
          <div className="md:text-lg">
            Hello! I’m Ajith Kumar, a front end developer dedicated to crafting
            seamless digital experiences. With a strong background in React,
            HTML, CSS, and JavaScript, I build responsive and user-friendly
            websites that meet the needs of clients and users alike.I have one
            year of experience at Codesirpi Software LLP. In this role, I worked
            on developing and maintaining responsive websites, ensuring optimal
            performance and user experience. I’ve gained hands-on experience
            with front-end technologies, I’m constantly learning and adapting to
            new technologies to stay ahead of the curve.
          </div>
          <div>
            <a href={"../../images.jpeg"} download>
              <button type="button" className="download">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
