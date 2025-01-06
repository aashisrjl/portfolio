import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftSideNavbar = () => {
  const hoverAnimation = {
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  const initialAnimation = {
    opacity: 0,
    y: -20,
  };

  const animate = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  };

  const icons = [
    { icon: FaGithub,link: "https://github.com/aashisrjl",},
    { icon: FaFacebook, link: "https://www.facebook.com/aashis.rijal.92" },
    { icon: FaYoutube, link: "/https://www.youtube.com/@rule_the_life" },
    { icon: FaLinkedin, link: "/https://www.linkedin.com/in/aashisrjl/" },
    { icon: FaInstagram, link: "/https://www.instagram.com/aashisrjl/" },
  ];

  return (
    <div className="fixed hidden md:block mt-20">
      <ul className="m-8 space-y-8">
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <li key={index} className="relative group">
              <motion.div
                initial={initialAnimation}
                animate={{
                  ...animate,
                  transition: { delay: index * 0.2, duration: 0.5 },
                }}
                whileHover={hoverAnimation}
              >
                <Link to={item.link} className="hover:text-designColor">
                  <IconComponent className="w-6 h-6 rounded-full" />
                </Link>
              </motion.div>
            </li>
          );
        })}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-24 bg-designColor group-hover:bg-designColor transition duration-300"></div>
      </ul>
    </div>
  );
};

export default LeftSideNavbar;
