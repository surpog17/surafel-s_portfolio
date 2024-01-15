import React from "react";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "../Home/SocialMedia";
import Skill from "../../Components/Skill";

export default function index() {
  return (
    <div
      id="myskills"
      className="flex items-center justify-center min-h-screen bg-white "
    >
      <div className=" mx-auto items-center justify-between p-4  gap-10">
        {/* Text on the left */}
        <div className="text-black  grid gap-5">
          <h1 className="text-4xl  mb-4 text-center">
            <div className="py-4">
              <span className="font-semibold mr-4">My Skills</span>
            </div>
          </h1>
          <Skill />
        </div>
      </div>
    </div>
  );
}
