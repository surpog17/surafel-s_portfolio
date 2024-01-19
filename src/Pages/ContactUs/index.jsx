import React from "react";
import { motion } from "framer-motion";
import Info from "./Info";
import Talk from "./Talk";

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Index = () => {
  return (
    <motion.div
      id="projects"
      className="bg-white min-h-screen px-4 md:px-8 lg:px-16 xl:px-32"
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
    >
      <div className="flex flex-col-reverse md:flex-row justify-evenly gap-10">
        <Info />
        <Talk />
      </div>
    </motion.div>
  );
};

export default Index;
