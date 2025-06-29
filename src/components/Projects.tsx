import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Code, Database, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'LetsTalk',
      description: 'A language practice community platform with real-time video chat, peer matching, and interactive learning features.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'React.js', 'WebRTC', 'TailwindCSS', 'Express.js'],
      category: 'fullstack',
      liveLink: '#',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    },
    {
      id: 2,
      title: 'Sewa-Sathi',
      description: 'E-government platform providing information about government services, processes, required documents, and complaint management system.',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'React.js', 'MongoDB', 'Express.js', 'TailwindCSS'],
      category: 'fullstack',
      liveLink: '#',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    },
    {
      id: 3,
      title: 'Future Learning Hub',
      description: 'Professional consultancy website frontend with modern design, responsive layout, and optimized user experience for educational services.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TailwindCSS', 'JavaScript', 'HTML5', 'CSS3'],
      category: 'frontend',
      liveLink: 'https://futurelearninghub.com.np',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    },
    {
      id: 4,
      title: 'NepTour',
      description: 'A comprehensive tourism platform for Nepal with booking system and tour management.',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'React.js', 'MySQL', 'Express'],
      category: 'fullstack',
      liveLink: '#',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    },
    {
      id: 5,
      title: 'Chatting Web App',
      description: 'Real-time chat application with socket.io for instant messaging and group chats.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Socket.io', 'MySQL', 'React'],
      category: 'fullstack',
      liveLink: '#',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    },
    {
      id: 6,
      title: 'SathiShare',
      description: 'Social sharing platform built with server-side rendering using EJS templates.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'EJS', 'Express'],
      category: 'backend',
      liveLink: 'https://sathishare.aashishrijal.com.np',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    },
    {
      id: 7,
      title: 'Ecommerce Backend',
      description: 'Complete e-commerce backend with authentication, payment integration, and admin panel.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'MySQL', 'Express', 'Postman'],
      category: 'backend',
      liveLink: '#',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    },
    {
      id: 8,
      title: 'Nepali Grocery Store',
      description: 'Full-stack grocery store application with inventory management and online ordering.',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'MySQL', 'Express', 'React'],
      category: 'fullstack',
      liveLink: '#',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    },
    {
      id: 9,
      title: 'BondBook Mobile App',
      description: 'Mobile social networking app built with React Native and modern UI components.',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'MongoDB', 'Express', 'React Native', 'TailwindCSS'],
      category: 'mobile',
      liveLink: '#',
      githubLink: 'https://github.com/aashisrjl',
      featured: true
    }
  ];

  const otherProjects = [
    {
      title: 'Portfolio Management',
      description: 'Can create a new portfolio of new user by filling the form',
      technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'SQL']
    },
    {
      title: 'Car Website Backend',
      description: 'Backend of car website, admin portion of the real project',
      technologies: ['React.js', 'MongoDB', 'Node.js', 'Express']
    },
    {
      title: 'Organizations (Multitenant)',
      description: 'Creating new organization for new user with multitenant architecture',
      technologies: ['EJS', 'MySQL', 'Node.js', 'Express']
    },
    {
      title: 'Blog Management',
      description: 'Blog management of user with all necessary operations',
      technologies: ['EJS', 'MySQL', 'Node.js', 'JWT']
    },
    {
      title: 'Programming Jokes',
      description: 'Generate random programming jokes using free APIs',
      technologies: ['React.js', 'MongoDB', 'Node.js', 'LocalStorage']
    },
    {
      title: 'Quote Generator',
      description: 'Generate random quotes using free APIs',
      technologies: ['React.js', 'MongoDB', 'Node.js', 'Firebase']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="text-blue-400 font-semibold text-lg">04.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Visit my portfolio and keep your feedback
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 animate-fadeInUp">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      filter === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                        title="View Live Site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                      title="View Source Code"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Other Noteworthy Projects</h3>
              <button className="text-blue-400 hover:text-blue-300 font-medium">View the archive</button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;