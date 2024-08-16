import Image from "next/image";
import React from "react";
import CodeSirpi from "../../assets/codesirpi.png";
import Sample from "../../assets/sample.png";
import Totalqsr from "../../assets/totalqsr.png";
import MobileApp from "../../assets/mobile-app.png";
import KioskApp from "../../assets/kiosk-app.png";
import WebApp from "../../assets/web-app.png";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const ownProject = [
    {
      id: 1,
      image: Totalqsr,
      alternateText: "TotalQSR Website",
      description: "TotalQSR Website",
      url: "https://totalqsr-website.web.app/",
    },
    {
      id: 2,
      image: Sample,
      alternateText: "Sample Portfolio Website ",
      description: "Sample Portfolio Website ",
      url: "https://codesirpi.github.io/portfolio-website-sample/",
    },
    {
      id: 3,
      image: CodeSirpi,
      alternateText: "Codesirpi Website",
      description: "Codesirpi Website",
      url: "https://codesirpi.github.io/landing-site/",
    },
  ];
  const collabratedProject = [
    {
      id: 1,
      image: MobileApp,
      alternateText: "MobileApp",
      description: "TotalQSR Mobile App",
    },
    {
      id: 2,
      image: KioskApp,
      alternateText: "KioskApp",
      description: "TotalQSR Kiosk App",
    },
    {
      id: 3,
      image: WebApp,
      alternateText: "WebApp",
      description: "TotalQSR Web App",
    },
  ];
  return (
    <div className="min-h-screen bg-white w-full md:p-20 py-20" id="Projects">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="text-center text-5xl  font-bold pb-5">My Projects</div>
        <div className="flex flex-col gap-5 items-center">
          <div className="text-3xl font-semibold">Own Websites</div>
          <div className="flex gap-10 flex-wrap justify-center">
            {ownProject.map((dt) => {
              return (
                <a key={dt.id} href={dt.url} target="_blank">
                  <div className="w-60 h-100 shadow rounded-md">
                    <Image
                      src={dt.image}
                      alt={dt.alternateText}
                      className="w-full rounded-t-md h-full"
                    />
                    <div className="lg:text-md text-sm p-5 text-center">
                      {dt.description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="text-3xl font-semibold mt-5 ">
            Collaborate with team
          </div>
          <div className="flex gap-10 flex-wrap justify-center">
            {collabratedProject.map((dt) => {
              return (
                <div
                  className="w-60 h-[170px] overflow-hidden shadow rounded-md relative"
                  key={dt.id}
                >
                  <Image
                    src={dt.image}
                    alt={dt.alternateText}
                    className="w-full rounded-t-md "
                  />
                  <div className="text-md p-5 text-center absolute bottom-0 bg-white w-full">
                    {dt.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
