import resume from "../../assets/Resume.pdf";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/namelogo.png";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName, "pathename");
  const navigation = [
    { title: "Home", path: "Home", value: "" },
    { title: "About", path: "About", value: "01", delay: 0.1 },
    { title: "Skills", path: "Skills", value: "02", delay: 0.2 },
    //  { title: "Experience", path: "Experience", value: "03", delay: 0.3 },
    { title: "Project", path: "Project", value: "04", delay: 0.4 },
    { title: "Contact", path: "Contact", value: "05", delay: 0.5 },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 cursor-pointer bg-gray-900 bg-opacity-35 shadow-lg shadow-designColor/10 lg:px-0 sticky top-0 z-50">
      <div className="flex justify-between items-center h-full lg:px-6">
        <img
          className="lg:w-[150px] lg:mr-0 rounded-lg h-24 opacity-80 hover:opacity-100"
          src={logo}
          alt="Logo"
        />
        <div className="hidden lg:flex gap-7 items-center">
          <ul className="flex gap-7 uppercase">
            {navigation.map((item) => (
              <li key={item.title}>
                <Link
                  smooth={true}
                  duration={700}
                  to={item.path}
                  className="hover:text-designColor duration-300 font-medium"
                >
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: item.delay }}
                    className="flex items-center"
                  >
                    {item.value && (
                      <span className="mr-1 text-designColor">
                        {item.value}.
                      </span>
                    )}
                    <span>{item.title}</span>
                  </motion.p>
                </Link>
              </li>
            ))}
          </ul>
          <motion.a
            href={resume}
            download={resume}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="text-designColor border border-designColor px-6 py-2 rounded-md text-center items-center duration-300 hover:bg-slate-700"
          >
            Resume
          </motion.a>
        </div>
        <button
          className="lg:hidden focus:outline-none lg:mr-0 mr-6"
          onClick={toggleMenu}
        >
          {/* Mobile menu icon */}
          <svg
            className="w-6 h-6 text-designColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-primaryColor shadow-lg py-4 px-6">
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    smooth={true}
                    duration={700}
                    to={item.path}
                    className="hover:text-designColor duration-300 font-medium"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <a
                href={resume}
                download={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-designColor border border-designColor px-6 py-2 rounded-md text-center items-center duration-300 hover:bg-slate-700"
                onClick={toggleMenu}
              >
                Resume
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
