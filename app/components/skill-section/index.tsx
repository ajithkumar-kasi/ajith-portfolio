import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const SkilsSection = () => {
  const skills = [
    { src: "html5", title: "HTML" },
    { src: "css3", title: "CSS" },
    { src: "javascript", title: "Javascript" },
    { src: "react", title: "React" },
    { src: "java", title: "Java" },
    { src: "mysql", title: "MySQL" },
    { src: "typescript", title: "Typescript" },
    { src: "git", title: "Git" },
    { src: "github", title: "Github" },
    { src: "materialui", title: "Material UI" },
    { src: "tailwindcss", title: "Tailwind CSS" },
    { src: "framermotion", title: "Framer" },
    { src: "nextjs", title: "Next.js" },
  ];
  return (
    <div
      className="h-full relative min-h-screen w-full skill-conatiner md:pt-20 pt-10"
      id="Skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="md:text-3xl lg:text-4xl font-bold  text-center md:px-20 text-xl">
          What I Bring to the Table
        </div>
        <div className="flex w-full justify-center lg:p-20 py-16">
          <div className="flex gap-5  flex-wrap justify-evenly gap-12 items-center w-[80%]">
            {skills.map((dt, index) => {
              return (
                <div
                  key={index}
                  className="relative group hover:bg-transparent md:h-40 md:w-40 w-28 h-28 rounded-bl-xl rounded-tr-xl p-5 shadow"
                >
                  <Icon
                    icon={`devicon:${dt.src}`}
                    className="text-8xl absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
                  />
                  <div className="absolute hidden group-hover:block duration-300 delay-150  transition linear bottom-0 left-[50%] group-hover:bg-[#000000b5] w-full text-white -translate-x-[50%] text-center h-8 md:h-10 pt-1 md:pt-2">
                    {dt.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white-wave w-full h-16 bg-cover absolute bottom-0"></div>
      </motion.div>
    </div>
  );
};
