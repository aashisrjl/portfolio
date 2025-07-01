import React from 'react';
import { Code, Database, Globe, Zap, Edit3, Plus, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Specialized in Node.js and Express.js for robust server-side applications',
      endorsements: 12
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Experience with MongoDB, MySQL, and database optimization',
      endorsements: 8
    },
    {
      icon: Globe,
      title: 'API Development',
      description: 'RESTful API design and implementation with proper authentication',
      endorsements: 15
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Committed to writing efficient, scalable, and maintainable code',
      endorsements: 6
    }
  ];

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Freelance',
      duration: '2024 - Present',
      location: 'Remote',
      description: 'Developing scalable web applications using Node.js, Express.js, and modern databases.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      duration: '2023 - 2024',
      location: 'Nepal',
      description: 'Built various web applications including e-commerce platforms and real-time chat applications.',
      skills: ['React.js', 'Node.js', 'Socket.io', 'TailwindCSS']
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* LinkedIn-style About Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">About</h2>
              <button className="text-blue-400 hover:bg-blue-900/30 p-2 rounded-lg transition-all duration-200">
                <Edit3 size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  I am a Backend Developer with a strong foundation in Node.js. 
                  I specialize in creating interactive and user-friendly web applications, and I'm currently 
                  expanding my skills in Next.js and TypeScript.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Passionate about seamless user experiences and web performance, I use Tailwind CSS for 
                  responsive design and integrate various libraries to enhance functionality. I stay updated 
                  with industry trends to deliver modern, cutting-edge solutions.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg">
                  Fast-forward to today, and I've had the privilege of working on various projects ranging 
                  from e-commerce platforms to real-time chat applications. I'm always eager to take on 
                  new challenges and collaborate with teams to build amazing digital experiences.
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies I work with:</h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'React.js', 'Next.js'].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium hover:bg-blue-900/50 transition-colors duration-200 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Experience</h2>
              <button className="flex items-center space-x-2 text-blue-400 hover:bg-blue-900/30 px-4 py-2 rounded-lg transition-all duration-200">
                <Plus size={16} />
                <span className="font-medium">Add experience</span>
              </button>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex space-x-4 p-4 hover:bg-gray-700 rounded-lg transition-all duration-200">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-2">{exp.duration} • {exp.location}</p>
                    <p className="text-gray-300 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Endorsements */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Skills & Endorsements</h2>
              <button className="flex items-center space-x-2 text-blue-400 hover:bg-blue-900/30 px-4 py-2 rounded-lg transition-all duration-200">
                <Plus size={16} />
                <span className="font-medium">Add skill</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-6 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all duration-300">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Users size={14} />
                          <span>{item.endorsements} endorsements</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;