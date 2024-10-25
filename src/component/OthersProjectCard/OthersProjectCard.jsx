import { useState } from "react";
import { GoFileDirectory } from "react-icons/go";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Container from "../Container/Container";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const OthersProjectCard = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Todo",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["Next js", "Redux"],
      link: "https://todo-form-ten.vercel.app",
    },
    {
      title: "Car-Doctor",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://car-doctor-practice-9032d.web.app/",
    },
    {
      title: "job-Portal",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://vast-science.surge.sh/",
    },
    {
      title: "Doctor-AppointMent",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://medisure-healthcare.web.app/",
    },
    {
      title: "Travel-Agency",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://festive-vacation.surge.sh/",
    },
    {
      title: "Match-Box",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://thundering-competition.surge.sh/",
    },
    {
      title: "Home-Repaire",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://assinment-11-44acd.web.app/",
    },
    {
      title: "Birthday-Celebration",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://assinment9.web.app/",
    },
    {
      title: "Car-Doctor",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://car-doctor-practice-9032d.web.app/",
    },
    {
      title: "Car-Doctor",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://car-doctor-practice-9032d.web.app/",
    },
    {
      title: "Car-Doctor",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://car-doctor-practice-9032d.web.app/",
    },
    {
      title: "Car-Doctor",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://car-doctor-practice-9032d.web.app/",
    },
    // Add more projects as needed
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const projectsToShow = showAll ? projects : projects.slice(0, 6);

  return (
    <Container className={"lg:px-0 md:px-24 "}>
      <div>
        <div className="text-center justify-center font-bold">
          <h1 className="text-3xl">Other Noteworthy Projects</h1>
          <p className="text-designColor"> View the archive</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-5 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto font-bodyFont mt-10">
          {projectsToShow.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-slate-950 bg-opacity-45 text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }} // Initial animation properties
              animate={{ opacity: 1, scale: 1 }} // Animation properties on hover
              whileHover={{ scale: 1.05 }} // Animation properties on hover
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <GoFileDirectory className="w-8 h-8 text-designColor" />
                  <BsBoxArrowInUpRight className="w-6 h-6 text-designColor" />
                </div>
                <h1 className="text-2xl font-semibold mb-2 hover:text-designColor">
                  {project.title}
                </h1>
                <p className="mb-4 text-sm hover:text-designColor">
                  {project.description}
                </p>
                <ul className="flex flex-wrap justify-around text-xs font-medium">
                  {project.tech.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="bg-slate-950 bg-opacity-45 px-2 py-1 rounded-md m-1 transition-transform transform hover:scale-110 hover:text-designColor"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={toggleShowAll}
            className="text-designColor border border-designColor px-6 py-2 rounded-md text-center items-center duration-300 hover:bg-slate-700"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OthersProjectCard;
