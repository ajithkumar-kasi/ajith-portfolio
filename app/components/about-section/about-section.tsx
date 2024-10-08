import React from "react";
import MyPhoto from "../../assets/ak-image.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../animated-text";
import { Link } from "react-scroll";

export const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-4 items-center md:p-24 p-10" id="About">
        <div className="md:text-6xl font-bold  text-3xl">
          {" "}
          <AnimatedTextCharacter text="About Me" />
        </div>
        <div className="flex justify-between md:items-center gap-10 md:gap-20 lg:flex-row flex-col py-20">
          <div className="relative">
            <div className="h-60 bg-[#8d898945] w-60 md:w-[400px] md:h-[400px] "></div>
            <Image
              src={MyPhoto}
              alt={""}
              className="absolute left-10 -top-10 h-60 w-60 md:w-[400px] md:h-[400px] object-cover object-top"
            />
          </div>
          <div className="lg:w-[60%] md:w-full flex flex-col gap-5 justify-center">
            <div className="md:text-lg">
              Hello! I’m Ajith Kumar, a front end developer dedicated to
              crafting seamless digital experiences. With a strong background in
              React, HTML, CSS, and JavaScript, I build responsive and
              user-friendly websites that meet the needs of clients and users
              alike.I have one year of experience at Codesirpi Software LLP. In
              this role, I worked on developing and maintaining responsive
              websites, ensuring optimal performance and user experience. I’ve
              gained hands-on experience with front-end technologies, I’m
              constantly learning and adapting to new technologies to stay ahead
              of the curve.
            </div>
            <div>
              <Link
                to="Contact"
                smooth={true}
                type="button"
                className="download"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
