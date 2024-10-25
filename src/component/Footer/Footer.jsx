import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../assets/namelogo.png"; // Update the path to your logo file

const Footer = () => {
  return (
    <footer className="text-gray-200 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <img src={logo} alt="Logo" className="w-20 h-14 mb-2" />
            <h2 className="text-2xl font-bold">Aashis Rijal</h2>
            <p>Backend Developer </p>
          </div>
          <div className="flex space-x-6 mb-6 lg:mb-0">
            <a
              href="https://www.facebook.com/aashis.rijal.92"
              className="text-gray-200 hover:text-designColor transition transform hover:scale-x-125 duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-200 hover:text-designColor transition transform hover:scale-x-125 duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aashis-rijal-190402276/"
              className="text-gray-200 hover:text-designColor transition transform hover:scale-x-125 duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/aashisrjl"
              className="text-gray-200 hover:text-designColor transition transform hover:scale-x-125 duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <div className="text-center lg:text-right">
            <p className="mb-2">Contact me:</p>
            <p>Email: aashisrijal252@gmail.com</p>
            <p>Phone: 9847749997</p>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} AashisRijal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
