import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Skill() {
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
    <ul className=" flex list-inside justify-start lg:justify-start gap-5">
      <a
        href="#!"
        className="px-2 rounded-md border-[3px] p-2 border-black bg-transparent hover:bg-black transition duration-1000 ease-in-out  hover:text-blue-700"
      >
        <FaLinkedin size={24} />
      </a>
    </ul>
  );
}
