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
            src={
              "https://d3da1k6uo8tbjf.cloudfront.net/4338f352-bff7-11ee-922d-1ab7a0b123c9?response-content-disposition=inline%3B%20filename%3D%22sura%20upwork.png%22%3B%20filename%2A%3DUTF-8%27%27sura%2520upwork.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS5PME4CTY5HJXGX6%2F20240131%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240131T192145Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0e8f58ecaae03bb3836ea9996401e11893169ea0a0b5a32ddc2b61d5faa2c4d3&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM2RhMWs2dW84dGJqZi5jbG91ZGZyb250Lm5ldC80MzM4ZjM1Mi1iZmY3LTExZWUtOTIyZC0xYWI3YTBiMTIzYzk~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IlMjBmaWxlbmFtZSUzRCUyMnN1cmElMjB1cHdvcmsucG5nJTIyJTNCJTIwZmlsZW5hbWUlMkElM0RVVEYtOCUyNyUyN3N1cmElMjUyMHVwd29yay5wbmdcdTAwMjZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmdcdTAwMjZYLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1Nlx1MDAyNlgtQW16LUNyZWRlbnRpYWw9QUtJQVM1UE1FNENUWTVISlhHWDYlMkYyMDI0MDEzMSUyRnVzLWVhc3QtMiUyRnMzJTJGYXdzNF9yZXF1ZXN0XHUwMDI2WC1BbXotRGF0ZT0yMDI0MDEzMVQxOTIxNDVaXHUwMDI2WC1BbXotRXhwaXJlcz04NjQwMFx1MDAyNlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdFx1MDAyNlgtQW16LVNpZ25hdHVyZT0wZThmNThlY2FhZTAzYmIzODM2ZWE5OTk2NDAxZTExODkzMTY5ZWEwYTBiNWEzMmRkYzJiNjFkNWZhYTJjNGQzIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA2ODE1MzA1fX19XX0_&Signature=EAiT3Ey60-UhGERehfLBmdfO5NkZiSZ3j8T1daRaxYBuTgKGBBwkCjqvAGFq253cXWSwljTd67KRUbk8JPPC~v4dKiA~Bub9msfE5kVLx9zRR4Xn8oUSiOVHDDjGGlbn9BIE3geJ25Hjxnw9eYSt1YH1fCFxvdXv29UIMwYABy5gXawy1RiTAUMcRPqinRyIY5sqkoTF~7iw1WLOJD5LsJYZcJbxyvEAK6O4Dt6RBfbzZPWX~xxxHXOE~uJu8ihOS4Kuj06g5BREKgCWIgagxbOpsMbeW34CimcY5djp-OgLPwt1bJoEfIjYglOJV08ZG6~AF6qQGTugkqrFrYfAGg__&Key-Pair-Id=K2BMZZDBFKKL41"
            }
            alt="Surafel Kifle"
            className="w-full h-full object-cover border-white border border-b-5 rounded-bl-[50%] rounded-br-[50%]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
