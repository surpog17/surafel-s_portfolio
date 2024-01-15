import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Skill({ icon, title = "title" }) {
  const [hovered, setHovered] = useState(false);
  const [showTwitterIcon, setShowTwitterIcon] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTwitterIcon(false);
    }, 3000);

    // Clear the timeout if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <ul className=" justify-start lg:justify-start items-center ">
      <div className=" flex flex-col justify-center items-center w-[170px] h-[170px] rounded-md border-[3px]  border-black bg-transparent hover:bg-black transition duration-1000 ease-in-out  hover:text-white">
        <div className="flex justify-center  text-3xl "> {icon}</div>
        <div className="pt-5 text-xl text-center"> {title}</div>
      </div>
    </ul>
  );
}
