import React from "react";
import { motion } from "framer-motion";
import HomeImage from "../../assets/PNG/surafelmain.png";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "./SocialMedia";

const HomePage = () => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="Home"
      className="flex items-center justify-center min-h-screen bg-white"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <div className="mx-auto flex flex-col-reverse lg:flex-row items-center justify-between p-4 lg:w-3/4 gap-10">
        {/* Text on the left */}
        <motion.div
          className={`text-black lg:w-1/2 lg:pr-8 grid gap-5`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl mb-4">
            <div className="py-4">
              <span className="font-light mr-4">Hello, I'm</span>
              <span className="font-bold">Surafel Kifle.</span>
            </div>
            <TypeAnimation
              sequence={[
                `A Front-end Developer.`,
                `A Back-end Developer.`,
                `Experienced in DevOps practices.`,
              ]}
              wrapper="div"
              speed="100"
            ></TypeAnimation>
          </h1>
          <p className="text-lg font-light text-gray-600">
            A passionate frontend developer with a flair for creating engaging
            and intuitive user experiences. I thrive on turning ideas into
            beautifully crafted, responsive web applications.
          </p>
          <SocialMedia />
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={HomeImage}
            alt="Surafel Kifle"
            className="w-full h-full object-cover border-white border border-b-5 rounded-bl-[50%] rounded-br-[50%]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
