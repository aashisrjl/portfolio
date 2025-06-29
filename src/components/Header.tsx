import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Code, Briefcase, Mail, Download, BookOpen } from 'lucide-react';
import logo from '../assets/namelogo.png';
import resume from '../assets/AASHISH_CV.pdf'; // Adjust the path to your resume file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'about', label: 'About', icon: User, path: '/#about' },
    { id: 'skills', label: 'Skills', icon: Code, path: '/#skills' },
    { id: 'projects', label: 'Projects', icon: Briefcase, path: '/#projects' },
    { id: 'blogs', label: 'Articles', icon: BookOpen, path: '/blogs' },
    { id: 'contact', label: 'Contact', icon: Mail, path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item) => {
    if (item.path.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = item.path;
      } else {
        const sectionId = item.path.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (item) => {
    if (item.path === '/') {
      return location.pathname === '/';
    }
    if (item.path === '/blogs') {
      return location.pathname.startsWith('/blog');
    }
    return false;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-700' 
        : 'bg-gray-900/90 backdrop-blur-sm shadow-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LinkedIn-style Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-24 h-24 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              {/* <span className="text-white font-bold text-lg">AR</span> */}
              <img src={logo} />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-semibold text-white">Aashish Rijal</div>
              <div className="text-sm text-gray-300">Backend Developer</div>
            </div>
          </Link>

          {/* Desktop Navigation - LinkedIn Style */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item);
              
              if (item.path.startsWith('/#')) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-200 group ${
                      active
                        ? 'text-blue-400 bg-blue-900/30'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={20} className="mb-1" />
                    <span className="text-xs font-medium">{item.label}</span>
                    {active && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-400 rounded-full"></div>
                    )}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-200 group relative ${
                    active
                      ? 'text-blue-400 bg-blue-900/30'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                  }`}
                >
                  <Icon size={20} className="mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                  {active && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-400 rounded-full"></div>
                  )}
                </Link>
              );
            })}
            
            {/* Resume Button */}
            <div className="ml-6 pl-6 border-l border-gray-700 flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                //download resume 
              onClick={() => {
                const link = document.createElement('a');
                link.href = resume;
                link.download = 'AASHISH_RIJAL_CV.pdf'; // Specify the name for the downloaded file
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
              }
              >
                <Download size={16} />
                <span className="text-sm">Resume</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pt-4 space-y-2 bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2 border border-gray-700">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item);
              
              if (item.path.startsWith('/#')) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg mx-2 transition-all duration-200 ${
                      active
                        ? 'text-blue-400 bg-blue-900/30'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg mx-2 transition-all duration-200 ${
                    active
                      ? 'text-blue-400 bg-blue-900/30'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            
            <div className="px-2 pt-4 border-t border-gray-700">
              <button className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
              //download resume 
              onClick={() => {
                const link = document.createElement('a');
                link.href = resume;
                link.download = 'AASHISH-Rijal_CV.pdf'; // Specify the name for the downloaded file
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
              }>
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;