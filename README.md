# Auto Marks Entry in CONNECT

## Overview
This [script](script.js) automates the process of entering marks into the CONNECT system. The order of student IDs does not matter. The [script](script.js) compares student IDs against those in CONNECT to ensure accurate mark assignment, preventing errors where a student might receive another's marks. The [script](script.js) will simply skip the student IDs that are not listed.

## Features
- Automatically detects and matches student IDs from the grade sheet with those in CONNECT.

- Ensures marks are assigned correctly by comparing student IDs to avoid mix-ups.

- Allows overwriting of already entered marks by rerunning the script.

- Automatically scrolls the page to bring the most recently entered marks into view.

- Simple execution process (watch the attached demonstration video for guidance).

## Usage

### Step 1: Generate Student IDs with Grades
Use the following formula in your gradesheet to generate a list of student IDs and their corresponding grades. Modify the `I11:I` column reference to indicate the `Total (100.00)` column.

```excel
=LET(ids, B11:B, marks, I11:I, "var grades = [" & TEXTJOIN(", ", TRUE, FILTER(FLATTEN({ids, ROUND(marks, 2)}), LEN(FLATTEN({ids, marks}))>0)) & "];")
```

### Step 2: Execute the Script
- Go to `CONNECT` → `Login` → `Exam Controller` → ``Exam Marks Entry`` → `3-dot menu` → `# FINAL`

- Press `Ctrl + Shift + I` to open Developer Tools

- Navigate to the Sources tab

- In the left pane (may be hidden, click >> if needed), go to `Snippets`

- Create a New Snippet

- Paste the entire [script](script.js).

- Copy the cell content where formula was applied.
  
- Paste and replace the line `var = grades ...` with the one copied from your sheet.

- Press `Ctrl + Enter` to run the [script](script.js).



## Notes
- Make sure you are on the **correct CONNECT marks entry page** before running the [script](script.js).

- After running the [script](script.js), you can still **manually modify marks** until final submission to the Chairperson.

- The [script](script.js) edits the page dynamically; **always verify marks manually** before submitting.

- Don’t trust the [script](script.js) 100% — **double-check that all marks are entered correctly** for each student.



## License
This project is open-source and available for use and modification as needed.

## Disclaimer
Use at your own risk. The author is not responsible for any issues arising from misuse of the script.

Refer to this [video](https://youtu.be/pFDlC6ly6kU) if you need help.
---
