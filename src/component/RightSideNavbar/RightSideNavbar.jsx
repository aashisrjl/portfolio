import React from "react";
import { motion } from "framer-motion";

const RightSideNavbar = () => {
  const initialAnimation = {
    opacity: 0,
    x: 20,
  };

  const animate = {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  };

  return (
    <div className="fixed top-0 lg:flex  -right-32 mt-96 transform rotate-90 z-30 hidden md:block">
      <motion.div
        initial={initialAnimation}
        animate={animate}
        className="relative"
      >
        <a href="#" className="block text-designColor py-2 px-4 rounded-lg">
          <p className="text-sm tracking-widest items-center text-center">
            <span>aashisrijal252@gmail.com</span>

            <span className="">____________</span>
          </p>
        </a>
      </motion.div>
    </div>
  );
};

export default RightSideNavbar;
