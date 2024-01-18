import React from "react";
import { motion } from "framer-motion";
import HomeImage from "../../assets/PNG/surafelmain.png";
import AboutMe from "./AboutMeText";

const AboutMePage = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  const textVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      id="AboutMe"
      className="min-h-screen"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="container mx-auto p-8 lg:flex lg:items-center">
        {/* Image section */}
        <motion.div className="lg:w-1/2 mb-4 lg:mb-0" variants={imageVariants}>
          <img
            src={HomeImage}
            alt="Your Profile"
            className="w-45 h-45 object-cover rounded-lg border-2 border-black"
          />
        </motion.div>

        {/* Text section */}
        <motion.div className="lg:w-1/2 lg:pl-8" variants={textVariants}>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <AboutMe />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMePage;
