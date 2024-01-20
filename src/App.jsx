import Navbar from "./Components/NavBar";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import HomePage from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import MySkills from "./Pages/MySkills";
import MyExperience from "./Pages/MyExperience";
import MyProjects from "./Pages/MyProjects";
import MyTestimonial from "./Pages/MyTestimonial";
import ContactMe from "./Pages/ContactUs";
import Footer from "./Components/Footer";

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
      <Navbar />
      <HomePage />
      <MySkills />
      <MyExperience />
      <AboutMe />
      <MyProjects />
      <MyTestimonial />
      {showScrollButton && (
        <button
          title="Scroll UP"
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 border-2 border-black bg-transparent hover:bg-black text-black hover:text-white p-2 rounded-full transition duration-1000 ease-in-out z-10"
          style={{ mixBlendMode: "screen" }}
        >
          <FaArrowUp />
        </button>
      )}

      <Footer />
    </div>
  );
}
