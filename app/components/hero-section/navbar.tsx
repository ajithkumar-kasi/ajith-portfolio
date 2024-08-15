import React from "react";

export const NavBar = () => {
  return (
    <div className="flex justify-between w-full font-medium">
      <div className="text-2xl font-semibold hidden lg:block">Ajith Kumar</div>
      <div className="text-2xl font-semibold lg:hidden ">AK</div>
      <ul className="flex text-lg lg:gap-14 gap-7">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>{" "}
    </div>
  );
};
