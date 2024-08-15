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
      <Image src={AkLogo} alt={""} className="w-24 h-24 rounded-full" />

      <div className="flex md:items-center items-end md:flex-row flex-col gap-2 font-semibold text-lg">
        Contact:
        <a
          href="mailto:ajithkumarkasi555@gmail.com"
          className="hover:text-[blue]"
        >
          ajithkumarkasi555@gmail.com
        </a>
        <span className="hidden md:block">|</span>
        <SocialMedia />
      </div>
    </div>
  );
};
