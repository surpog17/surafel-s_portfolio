import React, { useEffect, useState } from "react";
import SKLogo from "../assets/PNG/sk-favicon-white.png";
import SKLogoName from "../assets/PNG/sk-logo-white-transparent.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hovered, setHovered] = useState(false);
  const [showTwitterIcon, setShowTwitterIcon] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTwitterIcon(false);
    }, 3000);

    // Clear the timeout if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <footer className="bg-black text-white p-4">
      <div className="flex h-[3rem] justify-between items-center">
        <img
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={hovered ? "w-[4rem]" : "w-[3rem]"}
          src={hovered ? SKLogoName : SKLogo}
        />
        <p>&copy; {currentYear} Surafel Kifle(ASK)</p>
      </div>
    </footer>
  );
};

export default Footer;
