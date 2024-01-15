// HomePage.js
import React from "react";
import HomeImage from "../../assets/PNG/surafelmain.png";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "./SocialMedia";

const HomePage = () => {
  return (
    <div
      id="Home"
      className="flex items-center justify-center min-h-screen bg-white gap-10"
    >
      <div className=" mx-auto flex items-center justify-between p-4 lg:w-3/4">
        {/* Text on the left */}
        <div className="text-black lg:w-1/2 grid gap-5">
          <h1 className="text-4xl  mb-4">
            <div className="py-4">
              <span className="font-light mr-4">Hello,I'm</span>
              <span className="font-bold">Surafel Kifle.</span>
            </div>
            <TypeAnimation
              sequence={[
                `A Front-end Developer.`,
                ` A Back-end Developer.`,
                `Experienced in DevOps practices.`,
              ]}
              wrapper="div"
              speed="100"
            ></TypeAnimation>
          </h1>
          <p className="text-lg font-light text-gray-600">
            a passionate frontend developer with a flair for creating engaging
            and intuitive user experiences. I thrive on turning ideas into
            beautifully crafted, responsive web applications.
          </p>
          <SocialMedia />
        </div>
        <div className="lg:w-1/2">
          <img
            src={HomeImage}
            alt="Your Image"
            className="w-full h-full object-cover border border-b-5 rounded-bl-[50%] rounded-br-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
