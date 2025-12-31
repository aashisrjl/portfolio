#!/bin/bash

# Script to create CSIT folder structure for organizing zip files
# Run this script from the project root directory

echo "Creating CSIT folder structure..."

# Create base directory
mkdir -p public/csit

# Create semester folders with labs and notes subdirectories
for i in {1..8}; do
    mkdir -p "public/csit/semester$i/labs"
    mkdir -p "public/csit/semester$i/notes"
    echo "Created folders for Semester $i"
done

echo ""
echo "✅ Folder structure created successfully!"
echo ""
echo "Next steps:"
echo "1. Add your lab zip files to: public/csit/semesterX/labs/"
echo "2. Add your notes zip files to: public/csit/semesterX/notes/"
echo "3. Follow the naming convention: {COURSE_CODE}_{course_title}.zip"
echo ""
echo "Example: CSC110_c_programming.zip"
echo ""
echo "See public/CSIT_FOLDER_STRUCTURE.md for detailed instructions."

