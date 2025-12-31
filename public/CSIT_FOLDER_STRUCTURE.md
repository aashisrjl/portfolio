# CSIT Folder Structure Guide

This document explains how to organize your semester zip files for the CSIT Labs and Notes pages.

## Folder Structure

Place your zip files in the following structure within the `public/csit/` directory:

```
public/
└── csit/
    ├── semester1/
    │   ├── labs/
    │   │   ├── CSC109_introduction_to_information_technology.zip
    │   │   ├── CSC110_c_programming.zip
    │   │   ├── CSC111_digital_logic.zip
    │   │   ├── MTH112_mathematics_i.zip
    │   │   └── PHY113_physics.zip
    │   └── notes/
    │       ├── CSC109_introduction_to_information_technology.zip
    │       ├── CSC110_c_programming.zip
    │       ├── CSC111_digital_logic.zip
    │       ├── MTH112_mathematics_i.zip
    │       └── PHY113_physics.zip
    ├── semester2/
    │   ├── labs/
    │   └── notes/
    ├── semester3/
    │   ├── labs/
    │   └── notes/
    ├── semester4/
    │   ├── labs/
    │   └── notes/
    ├── semester5/
    │   ├── labs/
    │   └── notes/
    ├── semester6/
    │   ├── labs/
    │   └── notes/
    ├── semester7/
    │   ├── labs/
    │   └── notes/
    └── semester8/
        ├── labs/
        └── notes/
```

## Naming Convention

Zip files should follow this naming pattern:

**Format:** `{COURSE_CODE}_{course_title}.zip`

**Rules:**
- Course code in UPPERCASE (e.g., `CSC110`)
- Underscore separator
- Course title in lowercase with underscores instead of spaces
- Remove special characters
- File extension: `.zip`

### Examples:

| Course Code | Course Title | Zip File Name |
|------------|--------------|---------------|
| CSC110 | C Programming | `CSC110_c_programming.zip` |
| CSC260 | Database Management System | `CSC260_database_management_system.zip` |
| MTH112 | Mathematics I | `MTH112_mathematics_i.zip` |
| CSC318 | Web Technology | `CSC318_web_technology.zip` |

## Course List by Semester

### Semester I
- `CSC109_introduction_to_information_technology.zip`
- `CSC110_c_programming.zip`
- `CSC111_digital_logic.zip`
- `MTH112_mathematics_i.zip`
- `PHY113_physics.zip`

### Semester II
- `CSC160_discrete_structure.zip`
- `CSC161_object_oriented_programming.zip`
- `CSC162_microprocessor.zip`
- `MTH163_mathematics_ii.zip`
- `STA164_statistics_i.zip`

### Semester III
- `CSC206_data_structure_and_algorithm.zip`
- `CSC207_numerical_method.zip`
- `CSC208_computer_architecture.zip`
- `CSC209_computer_graphics.zip`
- `STA210_statistics_ii.zip`

### Semester IV
- `CSC257_theory_of_computation.zip`
- `CSC258_computer_networks.zip`
- `CSC259_operating_systems.zip`
- `CSC260_database_management_system.zip`
- `CSC261_artificial_intelligence.zip`

### Semester V
- `CSC314_design_and_analysis_of_algorithms.zip`
- `CSC315_system_analysis_and_design.zip`
- `CSC316_cryptography.zip`
- `CSC317_simulation_and_modeling.zip`
- `CSC318_web_technology.zip`

### Semester VI
- `CSC364_software_engineering.zip`
- `CSC365_compiler_design_and_construction.zip`
- `CSC366_e_governance.zip`
- `CSC367_net_centric_computing.zip`
- `CSC368_technical_writing.zip`

### Semester VII
- `CSC409_advanced_java_programming.zip`
- `CSC410_data_warehousing_and_data_mining.zip`
- `CSC411_principles_of_management.zip`
- `CSC412_project_work.zip`

### Semester VIII
- `CSC461_advanced_database.zip`
- `CSC462_internship.zip`

## Quick Setup Steps

1. **Create the folder structure:**
   ```bash
   mkdir -p public/csit/semester{1..8}/{labs,notes}
   ```

2. **Add your zip files:**
   - Place lab zip files in `public/csit/semesterX/labs/`
   - Place notes zip files in `public/csit/semesterX/notes/`
   - Follow the naming convention above

3. **Verify file names:**
   - Make sure file names match the expected format
   - Check that course codes are correct
   - Ensure all special characters are replaced with underscores

## Notes

- **Elective courses are excluded** from this structure as per requirements
- Files are automatically detected based on the naming convention
- If a zip file doesn't exist, the download link will still appear but may return a 404 error
- You can add files gradually - the system will display all courses, and only those with zip files will be downloadable

## Testing

After adding your zip files:
1. Start your development server: `npm run dev`
2. Navigate to `/csit` page
3. Click on "Laboratory Works" or "Study Notes"
4. Select a semester
5. Click on a course card to download the zip file

## Troubleshooting

**File not downloading?**
- Check that the file name matches exactly (case-sensitive)
- Verify the file is in the correct folder (`labs/` or `notes/`)
- Ensure the file has `.zip` extension

**Course not showing?**
- All courses are defined in `src/data/csitData.ts`
- Check that the semester ID matches (1-8)

**404 Error?**
- The file path is generated automatically
- Make sure the zip file exists in the expected location
- Check browser console for exact file path being requested

