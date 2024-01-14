import React, { useState } from "react";

const AboutMe = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio!</h1>

      <p className="mb-4">
        Hello, I'm Surafel Kifle, a passionate front-end developer with a flair
        for creating engaging and intuitive user experiences. I thrive on
        turning ideas into beautifully crafted, responsive web applications.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">What I Bring to the Table:</h2>
        <ul className="list-disc pl-6">
          <li>
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Frontend Mastery: With expertise in HTML, CSS, and JavaScript, I
            specialize in crafting seamless and visually appealing interfaces.
            I'm adept at leveraging modern front-end frameworks such as React to
            build dynamic and interactive applications.
          </li>
          {/* ... (Repeat for other points) */}
        </ul>
      </section>

      <section className="mb-6">
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
      </section>

      {showFullText && (
        <div className="mb-6">
          <p className="mb-4">
            I am always excited about new challenges and collaborations. Whether
            you're looking for a creative front-end developer or someone with a
            knack for bridging the gap between frontend and backend
            technologies, I'm here for it!
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
        </div>
      )}

      <button
        onClick={handleReadMore}
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
      >
        {showFullText ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default AboutMe;
