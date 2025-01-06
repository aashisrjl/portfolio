import React from "react";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import LeftSideNavbar from "../LeftSideNavbar/LeftSideNavbar";
import RightSideNavbar from "../RightSideNavbar/RightSideNavbar";
import img1 from "../../assets/about.png";

const Banner = () => {
  const stringValue = ["Backend Developer","CSIT STUDENT","BUILD THINGS FOR WEB"];

  return (
    <div className="relative min-h-screen flex items-center">
      <LeftSideNavbar />
      <Container
        id="Home"
        className="lg:mx-24 px-6 w-full py-12 flex flex-col lg:flex-row justify-between items-center"
      >
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg lg:text-2xl font-semibold text-designColor mb-2"
          >
            Hi, My name is
          </motion.h1>

          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl lg:text-6xl font-bold leading-tight text-white"
          >
            <span>Aashish Rijal</span>
          </motion.h1>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="block text-2xl lg:text-4xl font-semibold text-designColor mt-4"
          >
            <Typewriter
              options={{
                strings: stringValue,
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base lg:text-lg text-gray-300 leading-relaxed mt-8"
          >
            I am a web developer with 1 years of experience in NOdeJs. I have a
            strong foundation in back-end & little in frontend-end development, skilled in
            creating user-friendly and responsive, authentic web applications using Node 
            and its ecosystem.
          </motion.p>

          <motion.a
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            href="#projects"
            className="inline-block mt-8 text-designColor border border-designColor px-6 py-3 rounded-md text-center items-center duration-300 hover:bg-designColor hover:text-white hover:shadow-lg"
          >
            Check out my projects
          </motion.a>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center w-full lg:w-1/2 mt-8 lg:mt-0"
        >
          <img
            src={img1}
            alt="About"
            className="w-full max-w-sm lg:max-w-lg object-contain"
          />
        </motion.div>
      </Container>
      <RightSideNavbar />
    </div>
  );
};

export default Banner;
