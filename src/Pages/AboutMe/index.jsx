// AboutMePage.js
import React from "react";
import Surafel from "../../assets/PNG/Surafel.jpeg";
import AboutMe from "./AboutMeText";

export default function Index() {
  return (
    <div id="AboutMe" className="bg-[#040720] min-h-screen">
      <div className="container mx-auto p-8 lg:flex lg:items-center">
        {/* Image section */}
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img
            src={Surafel}
            alt="Your Profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text section */}
        <div className="text-[#A7A7A7] lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
