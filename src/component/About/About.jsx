import React from "react";
import Container from "../Container/Container";
import { FaCode } from "react-icons/fa";
import aashis from "../../assets/bgimg.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container
      id={"About"}
      className={
        "py-20 flex flex-col lg:px-0 md:px-24 md:flex-row items-start text-lg space-y-6 lg:mx-20"
      }
    >
      <div className="md:w-2/3 md:pr-8">
        <h1 className="text-xl lg:text-2xl font-semibold text-lightColor mb-3">
          <span className="mr-2 text-designColor">01.</span> About me
          ______________
        </h1>
        <p className="text-lightColor mb-4">
          I am a Junior Backend Developer with a strong foundation in HTML,
          CSS, and Node.js. I specialize in creating interactive and
          user-friendly web applications, and I'm currently expanding my skills
          in Next.js and TypeScript. Passionate about seamless user experiences
          and web performance, I use Tailwind CSS for responsive design and
          integrate various libraries to enhance functionality. I stay updated
          with industry trends to deliver modern, cutting-edge solutions.
        </p>
        <p className="text-lightColor mb-4">
          Fast-forward to today, and I had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Odio rem accusantium fugiat veritatis, quidem repellat ab natus
          possimus? Sint, accusamus!
        </p>
        <div className="flex flex-wrap gap-8">
          <div>
            <SkillItem text="Javascript" />
            <SkillItem text="React.js" />
            <SkillItem text="TypeScript" />
            <SkillItem text="MongoDB" />
          </div>
          <div>
            <SkillItem text="Express.js" />
            <SkillItem text="Node.js" />
            <SkillItem text="MySql" />
            <SkillItem text="Rest/Restful" />
          </div>
        </div>
      </div>
      <motion.img
        src={aashis}
        alt="Aashis Rijal"
        className="w-full md:w-96 rounded-full hover:rotate-[5deg] duration-300 hover:border-8 border-designColor hover:bg-cyan-300 shadow-2xl hover:shadow-designColor border-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </Container>
  );
};

const SkillItem = ({ text }) => (
  <div className="flex gap-2 items-center my-3 transition-transform transform hover:scale-110 hover:text-designColor">
    <FaCode className="text-designColor" />
    {text}
  </div>
);

export default About;
