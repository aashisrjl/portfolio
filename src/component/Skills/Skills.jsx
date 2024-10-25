import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Container from "../Container/Container";

const Skills = () => {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Container>
      <div
        id={"Skills"}
        className=" text-center  font-medium text-designColor rounded-lg shadow-lg"
      >
        <Marquee gradient={false}>
          <div className="text-4xl">
            <ul>
              {[
                "HTML-CSS",
                "JavaScript",
                "React js",
                "TailwindCSS",
                "Bootstrap",
                "MySql",
                "NodeJS",
                "ExpressJS",
                "MongoDB",
                "PostMan",
                "Vercel",
              ].map((skill, index) => (
                <motion.li
                  key={index}
                  className="inline-block px-6 py-2 mx-4 my-2 border-2 border-white rounded-lg text-text-1 font-medium hover:bg-lightColor/20 hover:text-lightColor transition-colors duration-300 "
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default Skills;
