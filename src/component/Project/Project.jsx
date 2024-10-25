import img1 from "../../assets/yt.png";
import img2 from "../../assets/shopping.png";
import img3 from "../../assets/bookstore.png";
import img4 from "../../assets/shofy.png";

import { motion } from "framer-motion";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Project = () => {
  const project = [
    {
      img: img1,
      title: "E-Commerce-Smartyt",
      tech: ["Next.js", "TypeScript", "Redux", "Next Auth"],
      liveLink: "https://e-commarce-smartyt.vercel.app",
      githubLink: "https://github.com/yeasinmiah1272001/e-commarceSmartyt",
    },
    {
      img: img2,
      title: "E-Commerce-Shopping",
      tech: ["Next.js", "REST API", "Redux", "Next Auth"],
      liveLink: "https://eid-shopping.vercel.app",
      githubLink: "https://github.com/yeasinmiah1272001/eid-shopping",
    },
    {
      img: img4,
      title: "E-Commarce-Shofy",
      tech: ["Next js", "Redux", "Next Auth"],
      liveLink: "https://shofyproject.vercel.app",
      githubLink: "https://github.com/yeasinmiah1272001/shofy-practice-main",
    },
    {
      img: img3,
      title: "Book Store",
      tech: ["React.js", "Mongodb", "Firebase", "Express"],
      liveLink: "https://book-client-five.vercel.app/",
      githubLink:
        "https://github.com/yeasinmiah1272001/backend/tree/main/Book-store",
    },
  ];

  return (
    <Container
      id="Project"
      className="py-16 text-lg lg:px-0 md:px-24 space-y-6"
    >
      <div className="w-5/6 mx-auto">
        <div className="text-center my-10 space-y-2">
          <motion.span className="text-3xl">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </motion.span>
          <motion.h1 className="text-xl">My Projects</motion.h1>
        </div>
        <div className="grid md:grid-cols-4  lg:gap-32 gap-4 mb-4">
          {project.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col w-64 border p-5 shadow-2xl  rounded-lg  bg-[#031E5B] transition duration-500 h-full"
            >
              <div className="overflow-hidden rounded-t-lg h-60">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80 object-cover object-top rounded-t-2xl hover:scale-95"
                  initial={{ y: 0 }}
                  whileHover={{ y: -80 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="flex-grow mt-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <ul className="flex text-start flex-wrap text-xs font-medium">
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
              <div className="flex justify-between items-center mt-4">
                <Link to={project.liveLink}>
                  <motion.button
                    className="text-white text-sm border border-gray-400  rounded-full px-3 py-1  hover:bg-slate-900 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Live Link
                  </motion.button>
                </Link>
                <Link to={project.githubLink}>
                  <motion.button
                    className="text-white border text-sm border-gray-400  rounded-full px-6 py-1  hover:bg-slate-900 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    GitHub
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Project;
