import React from "react";
import SKLogo from "../assets/PNG/sk-favicon-white.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <img className="w-11" src={SKLogo} />
        <p>&copy; {currentYear} Surafel Kifle(ASK)</p>
      </div>
    </footer>
  );
};

export default Footer;
