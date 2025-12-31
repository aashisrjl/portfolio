import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, FlaskConical, ArrowRight, Code, Database, Network, Server } from 'lucide-react';

const CSIT = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6 animate-pulse">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            CSIT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Computer Science & Information Technology
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive program covering computer science fundamentals, software engineering, 
            database systems, networking, and cutting-edge technologies.
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Programming</h3>
            <p className="text-gray-400">Learn multiple programming languages and software development practices</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Database Systems</h3>
            <p className="text-gray-400">Master database design, SQL, and data management technologies</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Network className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Networking</h3>
            <p className="text-gray-400">Understand network protocols, security, and distributed systems</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">System Design</h3>
            <p className="text-gray-400">Build scalable systems and understand software architecture</p>
          </div>
        </div>

        {/* About CSIT Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">About CSIT Program</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Program Overview</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Bachelor of Science in Computer Science and Information Technology (BSc. CSIT) 
                is a four-year program designed to provide students with a strong foundation in 
                computer science and information technology.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The curriculum combines theoretical knowledge with practical skills, preparing 
                students for careers in software development, system administration, database 
                management, and more.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Comprehensive curriculum covering all aspects of computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Hands-on laboratory sessions and practical projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Industry-relevant courses and technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Research opportunities and thesis projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Preparation for professional certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Buttons with Animation */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Labs Button */}
          <Link
            to="/csit/labs"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Laboratory Works</h3>
              <p className="text-blue-100 mb-4">
                Access all semester laboratory assignments, projects, and practical implementations
              </p>
              <div className="flex items-center text-sm font-medium">
                <span>Explore Labs</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            {/* Animated background effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </Link>

          {/* Notes Button */}
          <Link
            to="/csit/notes"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Study Notes</h3>
              <p className="text-purple-100 mb-4">
                Browse comprehensive notes, summaries, and study materials for all semesters
              </p>
              <div className="flex items-center text-sm font-medium">
                <span>View Notes</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            {/* Animated background effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Sharing knowledge and resources to help fellow CSIT students succeed! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSIT;

