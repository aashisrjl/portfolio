// CSIT Course Data Structure
// This file contains all semester courses with their codes and titles
// Excludes elective courses

export interface Course {
  code: string;
  title: string;
  creditHrs: number;
  fullMarks: number;
}

export interface Semester {
  id: number;
  name: string;
  courses: Course[];
}

export const csitSemesters: Semester[] = [
  {
    id: 1,
    name: 'First Semester',
    courses: [
      { code: 'CSC109', title: 'Introduction to Information Technology', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC110', title: 'C Programming', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC111', title: 'Digital Logic', creditHrs: 3, fullMarks: 100 },
      { code: 'MTH112', title: 'Mathematics I', creditHrs: 3, fullMarks: 100 },
      { code: 'PHY113', title: 'Physics', creditHrs: 3, fullMarks: 100 },
    ]
  },
  {
    id: 2,
    name: 'Second Semester',
    courses: [
      { code: 'CSC160', title: 'Discrete Structure', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC161', title: 'Object-Oriented Programming', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC162', title: 'Microprocessor', creditHrs: 3, fullMarks: 100 },
      { code: 'MTH163', title: 'Mathematics II', creditHrs: 3, fullMarks: 100 },
      { code: 'STA164', title: 'Statistics I', creditHrs: 3, fullMarks: 100 },
    ]
  },
  {
    id: 3,
    name: 'Third Semester',
    courses: [
      { code: 'CSC206', title: 'Data Structure and Algorithm', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC207', title: 'Numerical Method', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC208', title: 'Computer Architecture', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC209', title: 'Computer Graphics', creditHrs: 3, fullMarks: 100 },
      { code: 'STA210', title: 'Statistics II', creditHrs: 3, fullMarks: 100 },
    ]
  },
  {
    id: 4,
    name: 'Fourth Semester',
    courses: [
      { code: 'CSC257', title: 'Theory of Computation', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC258', title: 'Computer Networks', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC259', title: 'Operating Systems', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC260', title: 'Database Management System', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC261', title: 'Artificial Intelligence', creditHrs: 3, fullMarks: 100 },
    ]
  },
  {
    id: 5,
    name: 'Fifth Semester',
    courses: [
      { code: 'CSC314', title: 'Design and Analysis of Algorithms', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC315', title: 'System Analysis and Design', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC316', title: 'Cryptography', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC317', title: 'Simulation and Modeling', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC318', title: 'Web Technology', creditHrs: 3, fullMarks: 100 },
      // Elective I: Multimedia Computing (CSC319) - excluded as per requirement
    ]
  },
  {
    id: 6,
    name: 'Sixth Semester',
    courses: [
      { code: 'CSC364', title: 'Software Engineering', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC365', title: 'Compiler Design and Construction', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC366', title: 'E-Governance', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC367', title: 'NET Centric Computing', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC368', title: 'Technical Writing', creditHrs: 3, fullMarks: 100 },
      // Elective II: E-Commerce (CSC370) - excluded as per requirement
    ]
  },
  {
    id: 7,
    name: 'Seventh Semester',
    courses: [
      { code: 'CSC409', title: 'Advanced Java Programming', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC410', title: 'Data Warehousing and Data Mining', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC411', title: 'Principles of Management', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC412', title: 'Project Work', creditHrs: 3, fullMarks: 100 },
      // Elective III: Database Administrator (CSC414) - excluded as per requirement
    ]
  },
  {
    id: 8,
    name: 'Eighth Semester',
    courses: [
      { code: 'CSC461', title: 'Advanced Database', creditHrs: 3, fullMarks: 100 },
      { code: 'CSC462', title: 'Internship', creditHrs: 6, fullMarks: 200 },
      // Elective IV: Mobile Application Development (CSC470) - excluded as per requirement
      // Elective V: Introduction to Cloud Computing (CSC467) - excluded as per requirement
    ]
  }
];

// Helper function to get file path for a zip file
// Expected structure: /csit/semester{id}/{type}/{courseCode}_{courseTitle}.zip
// Example: /csit/semester1/labs/CSC110_C_Programming.zip
export const getZipFilePath = (
  semesterId: number,
  type: 'labs' | 'notes',
  courseCode: string,
  courseTitle: string
): string => {
  // Replace spaces and special characters in course title for filename
  const sanitizedTitle = courseTitle
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/_+/g, '_')
    .toLowerCase();
  
  return `/csit/semester${semesterId}/${type}/${courseCode}_${sanitizedTitle}.zip`;
};

// Helper function to check if a file exists (for future use with API)
export const checkFileExists = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

