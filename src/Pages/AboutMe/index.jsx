// AboutMePage.js
import React from "react";
import HomeImage from "../../assets/PNG/surafelmain.png";
import AboutMe from "./AboutMeText";

export default function Index() {
  return (
    <div id="AboutMe" className="min-h-screen">
      <div className="container mx-auto p-8 lg:flex lg:items-center">
        {/* Image section */}
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img
            src={HomeImage}
            alt="Your Profile"
            className="w-45 h-45 object-cover rounded-lg"
          />
        </div>

        {/* Text section */}
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
