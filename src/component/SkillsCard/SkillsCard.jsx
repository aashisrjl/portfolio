import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdJavascript } from "react-icons/md";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiReact,
  SiNextdotjs 
} from "react-icons/si";
import Typewriter from "typewriter-effect";
import Container from "../Container/Container";

const SkillsCard = () => {
  const hoverAnimation = {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.5 },
  };

  const initialAnimation = {
    opacity: 0,
    y: 20,
  };

  const animate = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  };

  const skills = [
    { icon: FaHtml5, name: "HTML", level: "90%" },
    { icon: FaCss3Alt, name: "CSS", level: "80%" },
    { icon: MdJavascript, name: "JavaScript", level: "80%" },
    { icon: SiTailwindcss, name: "TailwindCSS", level: "85%" },
    { icon: FaReact, name: "React JS", level: "50%" },
    { icon: SiFirebase, name: "MySql", level: "85%" },
    { icon: SiVercel, name: "Vercel", level: "50%" },
    { icon: FaNode, name: "Node JS", level: "85%" },
    { icon: SiExpress, name: "Express JS", level: "80%" },
    { icon: SiMongodb, name: "MongoDB", level: "85%" },
    { icon: SiReact, name: "ReactNative", level: "60%" },
    { icon: SiNextdotjs , name: "Next", level: "60%" },
  ];

  return (
    <Container>
      <div className="w-5/6 mx-auto">
        <div>
          <div className="text-center border-b border-white my-8">
            <h1 className="mt-10 text-5xl text-designColor mb-5 font-extrabold">
              My Skills
            </h1>
            <div className="my-5 text-center">
              <span className="text-[#ff014f] font-extrabold text-4xl">
                <Typewriter
                  options={{
                    strings: skills.map((skill) => skill.name),
                    autoStart: true,
                    loop: true,
                    cursor: " 🔥",
                  }}
                />
              </span>
            </div>
            <p className="text-white mb-2">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 justify-center md:justify-between">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    className="text-center slider-container"
                    key={index}
                    initial={initialAnimation}
                    animate={animate}
                    whileHover={hoverAnimation}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-center h-44 lg:w-40     shadow-xl p-3 rounded-xl bg-slate-950 bg-opacity-50">
                      <IconComponent
                        size={80}
                        className=" p-3 font-extrabold mx-auto text-[#c4cfde] duration-700"
                      />
                      <h1 className="text-designColor text-3xl font-extrabold">
                        {skill.level}
                      </h1>
                    </div>
                    <h1 className="text-[#c4cfde] uppercase mt-2 md:text-xl lg:text-xl font-extrabold">
                      {skill.name}
                    </h1>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SkillsCard;
