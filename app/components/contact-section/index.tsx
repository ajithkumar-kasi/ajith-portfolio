import React from "react";
import { SocialMedia } from "./social-media";
import Image from "next/image";
import AkLogo from "../../assets/ak-logo.gif";

export const Contact = () => {
  return (
    <div
      className="border-t w-full md:px-10 px-5 lg:px-20 py-2 flex justify-between items-center"
      id="Contact"
    >
      <Image
        src={AkLogo}
        alt={""}
        className="w-20 h-20 md:w-28 md-h-28 rounded-full"
      />

      <div className="flex md:items-center items-end md:flex-row flex-col gap-2 font-semibold md:text-lg text-sm">
        Contact:
        <a
          href="mailto:ajithkumarkasi555@gmail.com"
          className="hover:text-[blue] "
        >
          ajithkumarkasi555@gmail.com
        </a>
        <span className="hidden md:block">|</span>
        <SocialMedia />
      </div>
    </div>
  );
};
