import React from "react";
import AkLogo from "../../assets/ak-logo.gif";
import Image from "next/image";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react/dist/iconify.js";

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex justify-between items-center w-full font-medium px-10 ">
      <Image
        src={AkLogo}
        alt={"logo"}
        className="w-20 h-20 md:w-28 md:h-28 rounded-full"
      />
      <ul className="flex text-lg lg:gap-14 gap-3 md:inline-flex hidden">
        <Link
          to={"/"}
          smooth={true}
          className="group rounded-lg border border-transparent px-5 py-2 shadow transition-colors hover:border-gray-300 hover:bg-gray-100 cursor-pointer hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          Home
        </Link>
        <Link
          to={"About"}
          smooth={true}
          className="group rounded-lg border border-transparent px-5 py-2 shadow transition-colors hover:border-gray-300 hover:bg-gray-100 cursor-pointer hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          About
        </Link>
        <Link
          to={"Skills"}
          smooth={true}
          className="group rounded-lg border border-transparent px-5 py-2 shadow transition-colors hover:border-gray-300 hover:bg-gray-100 cursor-pointer hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          Skills
        </Link>
        <Link
          to={"Projects"}
          smooth={true}
          className="group rounded-lg border border-transparent px-5 py-2 shadow transition-colors hover:border-gray-300 hover:bg-gray-100 cursor-pointer hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          Projects
        </Link>
        <Link
          to={"Contact"}
          className="group rounded-lg border border-transparent px-5 py-2 shadow transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          Contact
        </Link>
      </ul>{" "}
      <div onClick={() => setOpen(true)} className="md:hidden">
        <Icon icon="mingcute:menu-fill" fontSize={30} />
      </div>
      {open && (
        <ul className="flex flex-col gap-5 p-10 sidebar ">
          <li
            className="w-[200px] text-[20px] text-end"
            onClick={() => setOpen(false)}
          >
            &#x2715;
          </li>
          <Link to={"/"} smooth={true} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to={"About"} smooth={true} onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to={"Skills"} smooth={true} onClick={() => setOpen(false)}>
            Skills
          </Link>
          <Link to={"Projects"} smooth={true} onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link to={"Contact"} smooth={true} onClick={() => setOpen(false)}>
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};
