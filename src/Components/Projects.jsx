import React from "react";
import { motion } from "framer-motion";
import ButtonWithIcon from "./Inputs/Button";

const Projects = ({ projectImage, projectName, description, date, index }) => {
  const projectNumber = `0${index + 1}`;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={
        index % 2 === 0
          ? "flex flex-col-reverse md:flex-row items-center mb-8 px-0 py-5 md:px-5 gap-14"
          : "flex flex-col-reverse md:flex-row-reverse items-center mb-8 px-0 py-5 md:px-5 gap-14"
      }
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full md:w-1/2 grid gap-3"
        variants={textVariants}
      >
        <motion.p className="text-white text-4xl">{projectNumber}</motion.p>
        <motion.h3 className="text-lg text-white font-bold">
          {projectName}
        </motion.h3>
        <motion.p className="text-[#D4D4D8] mt-2">{description}</motion.p>
        <ButtonWithIcon
          className="text-white"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              {/* Your path elements here */}
            </svg>
          }
        />
      </motion.div>
      <motion.img
        src={projectImage}
        alt={projectName}
        className="h-[20rem] w-full md:w-[23rem] mt-4 md:mt-0"
        variants={imageVariants}
      />
    </motion.div>
  );
};

export default Projects;
