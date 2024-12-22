import { useState } from "react";
import { GoFileDirectory } from "react-icons/go";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Container from "../Container/Container";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const OthersProjectCard = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "PortFolio management",
      description:
        "can create a new portfolio of new user by filling the form",
      tech: ["js","html/css", "php","sql"],
      link: "https://github.com/aashisrjl/portfolio-management",
    },
    {
      title: "Car Website",
      description:
        "backend of car website, admin portion of the real project",
      tech: ["React.js", "Mongodb", "Node.js", "Express"],
      link: "https://github.com/aashisrjl/car",
    },
    {
      title: "Organizations(multitenant)",
      description:
        "creating new organization for new user with multitinent architecture",
      tech: ["ejs", "mySql", "Node.js", "Express"],
      link: "https://github.com/aashisrjl/multitenant_node",
    },
    {
      title: "Blog Management",
      description:
        "Blog management of user with all necessary operation  ",
      tech: ["ejs", "mySql", "Node.js", "jwt"],
      link: "https://github.com/aashisrjl/node_BLOG",
    },
    {
      title: "Ecommerce-backend",
      description:
        "all e-commerce apis and payment integration with authentication using jwt ",
      tech: ["Express", "MySql", "Node.js", "postman"],
      link: "https://github.com/aashisrjl/project2Eco-mern-backend",
    },
    {
      title: "Programming Jokes",
      description:
        "generate random programming jokes using free apis ",
      tech: ["React.js", "Mongodb", "Node.js", "localstorage"],
      link: "https://github.com/aashisrjl/programming-jokes",
    },
    {
      title: "Quote-Generator",
      description:
        "generate random quotes using  using free apis ",
      tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
      link: "https://github.com/aashisrjl/quotegenerator",
    },
    {
      title: "QR generator",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["js", "css", "html"],
      link: "https://github.com/aashisrjl/Qr-generator",
    },
    {
      title: "TO-DO",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["js", "localstorage", "css", "html"],
      link: "https://github.com/aashisrjl/todo",
    },
    {
      title: "weather",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      tech: ["js", "css","html", "free api",],
      link: "https://github.com/aashisrjl/weather",
    }
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
