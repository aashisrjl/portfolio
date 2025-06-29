import React, { useState } from 'react';
import { TrendingUp, Award, Star, Briefcase, Calendar, MapPin } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const skillCategories = [
    { id: 'all', label: 'All Skills', count: 23 },
    { id: 'backend', label: 'Backend', count: 11 },
    { id: 'frontend', label: 'Frontend', count: 5 },
    { id: 'database', label: 'Database', count: 4 },
    { id: 'devops', label: 'DevOps', count: 3 }
  ];

  var skills = [
    { 
      name: 'Node.js', 
      level: 90, 
      endorsements: 32, 
      category: 'backend',
      verified: true,
      assessmentScore: 'Top 15%'
    },
    { 
      name: 'Express.js', 
      level: 85, 
      endorsements: 28, 
      category: 'backend',
      verified: true,
      assessmentScore: 'Top 20%'
    },
    { 
      name: 'JavaScript', 
      level: 88, 
      endorsements: 45, 
      category: 'frontend',
      verified: true,
      assessmentScore: 'Top 10%'
    },
    { 
      name: 'MongoDB', 
      level: 86, 
      endorsements: 22, 
      category: 'database',
      verified: false,
      assessmentScore: null
    },
    { 
      name: 'React.js', 
      level: 78, 
      endorsements: 35, 
      category: 'frontend',
      verified: true,
      assessmentScore: 'Top 25%'
    },
    { 
      name: 'MySQL', 
      level: 85, 
      endorsements: 18, 
      category: 'database',
      verified: false,
      assessmentScore: null
    },
    { 
      name: 'TypeScript', 
      level: 75, 
      endorsements: 15, 
      category: 'frontend',
      verified: false,
      assessmentScore: null
    },
    { 
      name: 'Socket.io', 
      level: 80, 
      endorsements: 12, 
      category: 'backend',
      verified: false,
      assessmentScore: null
    },
    { 
      name: 'Docker', 
      level: 65, 
      endorsements: 12, 
      category: 'devops',
      verified: false,
      assessmentScore: null
    },
    { 
      name: 'TailwindCSS', 
      level: 80, 
      endorsements: 20, 
      category: 'frontend',
      verified: false,
      assessmentScore: null
    },
    //next js
    { 
      name: 'Next.js', 
      level: 70, 
      endorsements: 15, 
      category: 'frontend',
      verified: false,
      assessmentScore: null
    }
    ,
    { 
      name: 'Git/GitHub/Gitlab', 
      level: 90, 
      endorsements: 12, 
      category: 'devops',
      verified: false,
      assessmentScore: null
    },
    //render/vercel deployment
    { 
      name: 'Render/Vercel', 
      level: 80, 
      endorsements: 12, 
      category: 'devops',
      verified: false,
      assessmentScore: null
    }
    ,
    { 
      name: 'PostMan', 
      level:95, 
      endorsements: 12, 
      category: 'backend',
      verified: false,
      assessmentScore: null
    },
    { 
      name: 'C/C++', 
      level: 80, 
      endorsements: 12, 
      category: 'backend',
      verified: false,
      assessmentScore: null
    },
    ,
    { 
      name: 'Asp .Net', 
      level: 80, 
      endorsements: 12, 
      category: 'backend',
      verified: false,
      assessmentScore: null
    },
    { 
      name: 'Python', 
      level: 60, 
      endorsements: 12, 
      category: 'backend',
      verified: false,
      assessmentScore: null
    },
    { 
      name: 'PHP', 
      level: 80, 
      endorsements: 12, 
      category: 'backend',
      verified: false,
      assessmentScore: null
    },
    //supabase
    { 
      name: 'Supabase', 
      level: 50, 
      endorsements: 12, 
      category: 'database',
      verified: false,
      assessmentScore: null
    },
  // database
    { 
      name: 'PostgreSQL', 
      level: 50, 
      endorsements: 12, 
      category: 'database',
      verified: false,
      assessmentScore: null
    },
 

    
  ];

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Freelance',
      duration: 'Jan 2024 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Developing scalable web applications using Node.js, Express.js, and modern databases. Working with clients to build custom solutions and APIs.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Socket.io']
    },
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      duration: 'Jun 2023 - Dec 2023',
      location: 'Nepal',
      type: 'Self-employed',
      description: 'Built various web applications including e-commerce platforms, real-time chat applications, and portfolio websites. Focused on learning modern web technologies.',
      skills: ['React.js', 'Node.js', 'TailwindCSS', 'JavaScript', 'MongoDB']
    },
    {
      title: 'Junior Developer',
      company: 'Learning Phase',
      duration: 'Jan 2023 - May 2023',
      location: 'Nepal',
      type: 'Education',
      description: 'Intensive learning period focusing on backend development fundamentals, database design, and web development best practices.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL']
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const topSkills = skills.sort((a, b) => b.endorsements - a.endorsements).slice(0, 3);

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Experience Section */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Experience</h2>
              <span className="text-sm text-gray-400">3 positions</span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex space-x-4 p-4 hover:bg-gray-700 rounded-lg transition-all duration-200">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company} • {exp.type}</p>
                      </div>
                      <div className="text-sm text-gray-400 mt-1 md:mt-0">
                        <div className="flex items-center space-x-1 mb-1">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-900/30 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
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

          {/* Skills Overview */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Skills</h2>
              <span className="text-sm text-gray-400">{skills.reduce((sum, skill) => sum + skill.endorsements, 0)} total endorsements</span>
            </div>

            {/* Top Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Top Skills</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {topSkills.map((skill, index) => (
                  <div key={index} className="p-4 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                      {skill.verified && (
                        <div className="flex items-center space-x-1 text-blue-400">
                          <Award size={16} />
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span className="font-medium">{skill.endorsements} endorsements</span>
                      {skill.assessmentScore && (
                        <span className="text-green-400 font-medium">{skill.assessmentScore}</span>
                      )}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Categories */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all duration-200">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                      {skill.verified && (
                        <div className="flex items-center space-x-1 text-blue-400">
                          <Award size={14} />
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                      {skill.assessmentScore && (
                        <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded-full">
                          {skill.assessmentScore}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="font-medium">{skill.endorsements} endorsements</span>
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-500 fill-current" />
                        <span>{(skill.level / 20).toFixed(1)}/5.0</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    {!skill.verified && (
                      <button className="text-gray-400 border border-gray-600 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-200">
                        Take Assessment
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Assessments */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Skill Assessments</h3>
              <button className="text-blue-400 hover:underline font-medium">View all</button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold text-white">JavaScript Assessment</h4>
                    <p className="text-sm text-gray-400">Scored in top 10% • 45 endorsements</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Demonstrated strong knowledge of JavaScript fundamentals, ES6+ features, and modern development practices.
                </p>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="font-semibold text-white">Node.js Assessment</h4>
                    <p className="text-sm text-gray-400">Scored in top 15% • 32 endorsements</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Excellent understanding of Node.js runtime, Express.js framework, and backend development best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;