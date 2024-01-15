// HomePage.js
import React from "react";
import HomeImage from "../../assets/PNG/image.svg";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <div
      id="Home"
      className="flex items-center justify-center min-h-screen bg-[#040720b1]"
    >
      <div className="container mx-auto flex items-center justify-between p-4 lg:w-3/4">
        {/* Text on the left */}
        <div className="text-[#A7A7A7] lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            <TypeAnimation
              sequence={[`Hello, I'm Surafel Kifle,`]}
              wrapper="div"
              speed="1"
            ></TypeAnimation>
          </h1>
          <p className="text-lg">
            a passionate frontend developer with a flair for creating engaging
            and intuitive user experiences. I thrive on turning ideas into
            beautifully crafted, responsive web applications.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={HomeImage}
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
