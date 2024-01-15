import React from "react";
import Skill from "../../Components/Skill";
import { TiHtml5 } from "react-icons/ti";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function index() {
  const skillsData = [
    { icon: <FaFacebook />, title: "Facebook" },
    { icon: <FaInstagram />, title: "Instagram" },
    { icon: <FaLinkedin />, title: "LinkedIn" },
    { icon: <FaTimes />, title: "Some " },
    { icon: <FaTwitter />, title: "Twitter" },
    { icon: <FaXTwitter />, title: "Another " },
    { icon: <FaLinkedin />, title: "LinkedIn" },
    { icon: <FaTimes />, title: "Some " },
    { icon: <FaTwitter />, title: "Twitter" },
    { icon: <FaXTwitter />, title: "Another " },
  ];

  return (
    <div
      id="myskills"
      className="flex items-center justify-center min-h-screen bg-white "
    >
      <div className="  items-center justify-between p-4  gap-10">
        {/* Text on the left */}
        <div className="text-black  grid gap-5">
          <h1 className="text-4xl  mb-4 text-center">
            <div className="py-4">
              <span className="font-light mr-4">My</span>
              <span className="font-semibold mr-1">Skills</span>
            </div>
          </h1>
          <div className="skills">
            {skillsData?.map((item) => (
              <Skill icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
