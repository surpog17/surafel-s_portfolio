import React from "react";
import { motion } from "framer-motion";
import Skill from "../../Components/Skill";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

const Skills = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  const skillsGridVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
  };

  const skillVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="myskills"
      className="flex items-center justify-center min-h-screen bg-white"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="p-4 sm:px-10 md:px-20 lg:px-32 xl:px-48">
        {/* Text on the left */}
        <motion.div className="text-black grid gap-5" variants={textVariants}>
          <h1 className="text-4xl mb-4 text-center">
            <div className="py-4">
              <span className="font-light mr-4">My</span>
              <span className="font-semibold mr-1">Skills</span>
            </div>
          </h1>
          <motion.div
            className="skills grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={skillsGridVariants}
          >
            {skillsData?.map((item, index) => (
              <motion.div key={index} variants={skillVariants}>
                <Skill icon={item.icon} title={item.title} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
