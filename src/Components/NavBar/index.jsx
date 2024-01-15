import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, animateScroll as scroll } from "react-scroll";
import ButtonWithIcon from "../Inputs/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import SKLogo from "../../assets/PNG/sk-favicon-black.png";
import SKLogoName from "../../assets/PNG/sk-logo-black-transparent.png";

export default function Index() {
  const [openNav, setOpenNav] = React.useState(false);
  const [hovered, setHovered] = useState(false);
  const [showTwitterIcon, setShowTwitterIcon] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTwitterIcon(false);
    }, 3000);

    // Clear the timeout if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, []);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1   font-medium font-sora "
      >
        <Link
          to="AboutMe"
          className="flex items-center"
          smooth={true}
          duration={1500}
        >
          About Me
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1  font-medium font-sora"
      >
        <Link
          href="#"
          to="myskills"
          smooth={true}
          className="flex items-center"
        >
          Skills
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1  font-medium font-sora"
      >
        <Link
          href="#"
          to="Experience"
          smooth={true}
          className="flex items-center"
        >
          Experience
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1  font-medium font-sora"
      >
        <Link
          href="#"
          to="projects"
          smooth={true}
          className="flex items-center"
        >
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1  font-medium font-sora"
      >
        <Link href="#" className="flex items-center">
          Contacts
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="bg-white text-black  w-screen-xl px-4 py-0 border-none lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-evenly text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="w-[6rem] h-[3rem] cursor-pointer py-1.5  font-medium font-sora"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            className={hovered ? "w-[4rem]" : "w-[3rem]"}
            src={hovered ? SKLogoName : SKLogo}
          />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <ButtonWithIcon
          className=" lg:w-30 h-10 mt-4 lg:mt-0 font-sora bg-black text-white text-sm lg:text-base rounded-md px-5 py-2"
          text="Resume"
          icon={<MdOutlineFileDownload size={24} />}
        />
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-[transparent] focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
