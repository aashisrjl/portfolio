import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Calendar, Plus, Facebook, Instagram, Youtube } from 'lucide-react';
import me from '../assets/bgimg.png'; // Adjust the path to your profile picture

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Backend Developer', 'Node.js Developer', 'Full Stack Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isDeleting, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/aashis.rijal.92",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      title: "Facebook",
      delay: "0s"
    },
    {
      href: "https://www.instagram.com/aashisrjl/",
      icon: Instagram,
      color: "bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800",
      title: "Instagram",
      delay: "0.2s"
    },
    {
      href: "https://www.linkedin.com/in/aashisrjl/",
      icon: Linkedin,
      color: "bg-blue-600 hover:bg-blue-700",
      title: "LinkedIn",
      delay: "0.4s"
    },
    {
      href: "https://github.com/aashisrjl",
      icon: Github,
      color: "bg-gray-700 hover:bg-gray-600",
      title: "GitHub",
      delay: "0.6s"
    },
    {
      href: "https://www.youtube.com/@aashis.dev252",
      icon: Youtube,
      color: "bg-red-600 hover:bg-red-700",
      title: "YouTube",
      delay: "0.8s"
    }
  ];

  return (
    <section id="home" className="pt-16 bg-gray-900">
      {/* LinkedIn-style Cover Photo with Animated Social Links */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/90 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-32 h-32 bg-white/5 rounded-full animate-float blur-sm"></div>
          <div className="absolute top-32 right-24 w-24 h-24 bg-white/3 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute bottom-16 left-32 w-40 h-40 bg-white/4 rounded-full animate-pulse blur-lg"></div>
        </div>

        {/* Animated Social Media Links in Cover */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-6 md:space-x-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 md:w-20 md:h-20 ${social.color} rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm border border-white/20 animate-slideInUp`}
                  style={{ 
                    animationDelay: social.delay,
                    animationFillMode: 'both'
                  }}
                  title={social.title}
                >
                  <Icon size={24} className="text-white md:w-8 md:h-8" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Animated Connecting Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex space-x-6 md:space-x-8">
            {socialLinks.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 md:w-20 md:h-20 relative"
              >
                <div 
                  className="absolute top-1/2 -right-3 md:-right-4 w-6 md:w-8 h-0.5 bg-gradient-to-r from-white/40 to-transparent animate-slideInRight"
                  style={{ 
                    animationDelay: `${0.2 + (index * 0.2)}s`,
                    animationFillMode: 'both'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Social Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-8 left-8 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
            <Github size={32} className="text-white" />
          </div>
          <div className="absolute top-12 right-16 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
            <Linkedin size={28} className="text-white" />
          </div>
          <div className="absolute bottom-12 left-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
            <Instagram size={30} className="text-white" />
          </div>
          <div className="absolute bottom-8 right-8 opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>
            <Youtube size={26} className="text-white" />
          </div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
            <Facebook size={24} className="text-white" />
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-lg shadow-gray-900/20 -mt-16 relative z-10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center overflow-hidden">
                    <img 
                      src={me}
                      alt="Aashish Rijal"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-800"></div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="mb-4 md:mb-0">
                    {/* Name */}
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Aashish Rijal
                    </h1>
                    
                    <div className="h-8 mb-3">
                      <p className="text-xl text-gray-300 font-medium">
                        {displayText}
                        <span className="animate-pulse text-blue-400">|</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>Kathmandu,Nepal</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>1+ years experience</span>
                      </span>
                      <span className="text-blue-400 font-medium">500+ connections</span>
                    </div>
                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                      Backend Developer specializing in Node.js and Express.js. Passionate about creating scalable web applications and learning new technologies. Open to new opportunities and collaborations.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Connect
                    </button>
                    <button 
                      onClick={() => scrollToSection('projects')}
                      className="border border-blue-400 text-blue-400 px-6 py-2 rounded-lg font-medium hover:bg-blue-900/30 transition-all duration-200"
                    >
                      Projects
                    </button>
                    <button className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
                    //onclick directly send mesage to whatsapp
                    onClick={()=>{
                      scrollToSection('contact')
                    }}
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-700">
              <div className="text-center p-4 hover:bg-gray-700 rounded-lg transition-all duration-200 cursor-pointer" onClick={()=>{scrollToSection('projects')}}>
                <div className="text-2xl font-bold text-blue-400">13+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 hover:bg-gray-700 rounded-lg transition-all duration-200 cursor-pointer" onClick={()=>{scrollToSection('skills')}}>
                <div className="text-2xl font-bold text-green-400">8+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 hover:bg-gray-700 rounded-lg transition-all duration-200 cursor-pointer" onClick={()=>{scrollToSection('skills')}}>
                <div className="text-2xl font-bold text-purple-400">1+</div>
                <div className="text-sm text-gray-400">Years Exp.</div>
              </div>
              <div className="text-center p-4 hover:bg-gray-700 rounded-lg transition-all duration-200 cursor-pointer" onClick={()=>{window.location.href='/blogs'}}>
                <div className="text-2xl font-bold text-orange-400">4</div>
                <div className="text-sm text-gray-400">Articles</div>
              </div>
            </div>
          </div>

          {/* LinkedIn-style Activity Feed Preview */}
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Preview */}
              <div className="bg-gray-800 rounded-lg shadow-md shadow-gray-900/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">About</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Passionate Backend Developer with expertise in Node.js, Express.js, and modern web technologies. 
                  I love building scalable applications and solving complex problems. Currently exploring new 
                  opportunities in full-stack development.
                </p>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-blue-400 font-medium mt-3 hover:underline"
                >
                  Show more
                </button>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-800 rounded-lg shadow-md shadow-gray-900/20 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 hover:bg-gray-700 rounded-lg transition-all duration-200">
                    <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Plus size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-200">Launched LetsTalk - Language Practice Community</p>
                      <p className="text-sm text-gray-400">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 hover:bg-gray-700 rounded-lg transition-all duration-200">
                    <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center">
                      <Plus size={16} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-200">Completed Sewa-Sathi: E-Government Services Platform</p>
                      <p className="text-sm text-gray-400">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills Preview */}
              <div className="bg-gray-800 rounded-lg shadow-md shadow-gray-900/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Top Skills</h3>
                <div className="space-y-3">
                  {['Node.js', 'Express.js', 'MongoDB', 'React.js'].map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-16 h-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-full bg-blue-500 rounded-full" 
                          style={{ width: `${85 - index * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-blue-400 font-medium mt-4 hover:underline"
                >
                  Show all skills
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-800 rounded-lg shadow-md shadow-gray-900/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <a href="mailto:aashisrijal252@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    <Mail size={16} />
                    <span>aashisrijal252@gmail.com</span>
                  </a>
                  <a href="https://github.com/aashisrjl" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    <Github size={16} />
                    <span>GitHub Profile</span>
                  </a>
                  <a href="https://www.linkedin.com/in/aashisrjl/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    <Linkedin size={16} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12 pb-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <span>Explore more</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;