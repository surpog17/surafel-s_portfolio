import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  return (
    <motion.div
      className="container mx-auto p-4 max-w-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p className="mb-4" variants={textVariants}>
        Hello, I'm Surafel Kifle, a passionate front-end developer with a flair
        for creating engaging and intuitive user experiences. I thrive on
        turning ideas into beautifully crafted, responsive web applications.
      </motion.p>

      <motion.section className="mb-6" variants={textVariants}>
        <h2 className="text-2xl font-bold mb-2">What I Bring to the Table:</h2>
        <motion.ul className="list-disc pl-" variants={listVariants}>
          <motion.li>
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Frontend Mastery: With expertise in HTML, CSS, and JavaScript, I
            specialize in crafting seamless and visually appealing interfaces.
            I'm adept at leveraging modern front-end frameworks such as React to
            build dynamic and interactive applications.
          </motion.li>
          {/* ... (Repeat for other points) */}
        </motion.ul>
      </motion.section>

      {showFullText && (
        <>
          <motion.section className="mb-6" variants={textVariants}>
            <h2 className="text-2xl font-bold mb-2">My Tech Stack:</h2>
            <p>
              Languages: HTML, CSS, JavaScript
              <br />
              Frameworks: React.js, Laravel, Express
              <br />
              Tools: Git, Webpack, npm
              <br />
              Design: Figma, Adobe XD
            </p>
          </motion.section>

          <motion.div className="mb-6" variants={textVariants}>
            <p className="mb-4">
              I am always excited about new challenges and collaborations.
              Whether you're looking for a creative front-end developer or
              someone with a knack for bridging the gap between frontend and
              backend technologies, I'm here for it!
            </p>

            {/* ... (Repeat for other points) */}

            <p className="mb-4">
              Connect with me on{" "}
              <a
                href="your-linkedin-profile"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="your-github-profile"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </p>

            <p>Looking forward to the possibility of working together!</p>
          </motion.div>
        </>
      )}

      <motion.button
        onClick={handleReadMore}
        className="text-sm bg-transparent hover:bg-black border-black border-2 rounded-md text-black hover:text-white px-4 py-1  focus:outline-none transition duration-1000 ease-in-out"
        variants={textVariants}
      >
        {showFullText ? "Read Less" : "Read More"}
      </motion.button>
    </motion.div>
  );
};

export default AboutMe;
