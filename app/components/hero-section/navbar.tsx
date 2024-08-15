import React from "react";
import AkLogo from "../../assets/ak-logo.gif";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full font-medium">
      <Image src={AkLogo} alt={""} className="w-28 h-28 rounded-full" />
      <ul className="flex text-lg lg:gap-14 gap-7 md:inline-flex hidden">
        <Link href={"/"}>Home</Link>
        <Link href={"/#About"}>About</Link>
        <Link href={"/#Skills"}>Skills</Link>
        <Link href={"/#Projects"}>Projects</Link>
        <Link href={"/#Contact"}>Contact</Link>
      </ul>{" "}
    </div>
  );
};
