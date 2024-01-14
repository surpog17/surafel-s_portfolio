import Navbars from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbars />
      <Home />
      <AboutMe />
      {showScrollButton && (
        <button
          title="Scroll UP"
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full transition-opacity duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
