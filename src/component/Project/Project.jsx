import img2 from "../../assets/chatapp.PNG";
import img1 from "../../assets/neptour.PNG";
import img3 from "../../assets/bookstore.png";
import img4 from "../../assets/sathishare.PNG";
import img5 from "../../assets/grocery.png";
import img6 from "../../assets/image.png";

import { motion } from "framer-motion";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Project = () => {
  const project = [
    {
      img: img1,
      title: "NepTour",
      tech: ["Node.js", "React.js", "sql", "Express"],
      liveLink: "https://Neptour",
      githubLink: "https://github.com/aashisrjl/NepTour",
    },
    {
      img: img2,
      title: "Chatting Web App",
      tech: ["Node.js", "socket", "sql", "React"],
      liveLink: "https://github.com/aashisrjl/frontend_chat_socket_io",
      githubLink: "https://github.com/aashisrjl/backend_chat_socket_io",
    },
    {
      img: img4,
      title: "SathiShare",
      tech: ["Node js", "EJS", "Express"],
      liveLink: "https://sathishare.onrender.com",
      githubLink: "https://github.com/aashisrjl/sathiShare",
    },
    {
      img: img3,
      title: "Ecommerce-backend",
      tech: ["Node js", "sql", "Express", "Postman"],
      liveLink: "https://bookStore/",
      githubLink:"https://github.com/aashisrjl/project2Eco-mern-backend",
    },
    {
      img: img5,
      title: "Nepali Grocery Store",
      tech: ['Node js','mysql','Express','React'],
      livelink:'https://groceryStore',
      githubLink: 'https://github.com/aashisrjl/grocery_store'
    },
    {
      img: img6,
      title: "BondBook (Modile App)",
      tech: ['Node js','MongoDB','Express','React Native','TailwindCss'],
      livelink:'https://BondBook',
      githubLink: 'https://github.com/aashisrjl/BondBook'
    }
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
        <div className="grid md:grid-cols-4 lg:gap-32 gap-4 mb-4 place-items-center sm:place-items-center sm:justify-center">
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
