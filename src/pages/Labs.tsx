import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, ArrowLeft, Download, FileCode, Calendar, BookOpen, FileArchive } from 'lucide-react';
import { csitSemesters, getZipFilePath } from '../data/csitData';

const Labs = () => {
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);

  const selectedSemesterData = selectedSemester
    ? csitSemesters.find(s => s.id.toString() === selectedSemester)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/csit"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to CSIT</span>
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Laboratory Works</h1>
              <p className="text-gray-400 mt-2">All semester lab assignments and projects</p>
            </div>
          </div>
        </div>

        {/* Semester Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {csitSemesters.map((semester) => (
            <button
              key={semester.id}
              onClick={() => setSelectedSemester(selectedSemester === semester.id.toString() ? null : semester.id.toString())}
              className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                selectedSemester === semester.id.toString()
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-gray-800'
              }`}
            >
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold text-sm md:text-base">{semester.name}</div>
                <div className="text-xs mt-1 opacity-75">
                  {semester.courses.length} courses
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lab Content */}
        {selectedSemester && selectedSemesterData ? (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">
              {selectedSemesterData.name} - Laboratory Works
            </h2>
            
            {selectedSemesterData.courses.length === 0 ? (
              <div className="text-center py-12">
                <FileCode className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No labs available for this semester yet.</p>
                <p className="text-gray-500 text-sm mt-2">Check back soon for updates!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedSemesterData.courses.map((course) => {
                  const zipPath = getZipFilePath(selectedSemesterData.id, 'labs', course.code, course.title);
                  
                  return (
                    <a
                      key={course.code}
                      href={zipPath}
                      download
                      className="group bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <FileArchive className="w-6 h-6 text-blue-400" />
                        </div>
                        <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>
                      
                      <div className="mb-2">
                        <div className="text-sm font-mono text-blue-400 mb-1">{course.code}</div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {course.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                        <div className="flex items-center text-xs text-gray-400">
                          <FileCode className="w-3 h-3 mr-1" />
                          <span>Lab Files</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {course.creditHrs} Credits
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700 text-center">
            <FlaskConical className="w-20 h-20 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Select a Semester</h3>
            <p className="text-gray-400">
              Choose a semester from above to view available laboratory works and assignments.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
          <div className="flex items-start">
            <BookOpen className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-300 mb-2">
                <span className="text-blue-400 font-semibold">Note:</span> All lab materials are shared for educational purposes. 
                Feel free to download and use them for your studies!
              </p>
              <p className="text-gray-400 text-sm">
                Each course has a zip file containing all laboratory assignments and projects. 
                Click on any course card to download the lab files.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labs;
