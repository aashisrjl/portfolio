import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  -useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-black text-designColor rounded-full shadow-lg hover:bg-designColor/10 focus:outline-none focus:ring focus:ring-designColor transition duration-300 border-designColor"
        >
          <FaArrowCircleUp size={30} />
        </button>
      )}
    </div>
  );
};

export default ScrollBar;
