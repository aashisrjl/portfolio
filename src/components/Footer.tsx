import React from 'react';
import { Mail, Phone, Github, Linkedin, Heart, MapPin, Calendar, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/namelogo.png';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Profile Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className=" rounded-lg flex items-center justify-center">
                  {/* <span className="text-white font-bold text-lg">AR</span> */}
                  <img height={120} width={120} src={logo} />

                  
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Aashish Rijal</div>
                  <div className="text-gray-400">Backend Developer</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Passionate Backend Developer specializing in Node.js and Express.js. 
                Building scalable web applications and always learning new technologies.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>Nepal</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>Available for opportunities</span>
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">About</a>
                <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Skills</a>
                <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Projects</a>
                <a href="/blogs" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Articles</a>
                <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:aashisrijal252@gmail.com" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  <span>aashisrijal252@gmail.com</span>
                </a>
                <a 
                  href="tel:9847749997" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group"
                >
                  <Phone size={16} className="group-hover:scale-110 transition-transform" />
                  <span>+977 9847749997</span>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3 pt-2">
                <a 
                  href="https://github.com/aashisrjl" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 hover:text-white transition-all duration-300 group"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform text-gray-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aashisrjl/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform text-gray-300" />
                </a>
                <a 
                  href="https://www.facebook.com/aashis.rijal.92" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <Facebook size={18} className="group-hover:scale-110 transition-transform text-gray-300" />
                </a>
                <a 
                  href="https://www.instagram.com/aashisrjl/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white transition-all duration-300 group"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform text-gray-300" />
                </a>
                <a 
                  href="https://www.youtube.com/@aashis.dev252" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group"
                >
                  <Youtube size={18} className="group-hover:scale-110 transition-transform text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <p className="flex items-center">
                  © {currentYear} Aashish Rijal. All rights reserved.
                </p>
                <span className="hidden md:block">•</span>
                <p className="flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> using React & Tailwind CSS
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={scrollToTop}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg text-sm font-medium"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>

          {/* Professional Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Open to new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;