# Class Attendance Analyzer (JavaScript)

## Project Description

The **Class Attendance Analyzer** is a simple JavaScript program that analyzes student attendance records.  
It calculates the total days, number of present and absent days, attendance percentage, and assigns a performance status based on the percentage.

This project is designed to practice **JavaScript fundamentals** such as functions, loops, arrays, conditional statements, and arrow functions.

## 🧠 Concepts Covered

- Named functions
- Arrow functions
- Arrays
- `for` loops
- `if / else` conditions
- Returning objects
- Console output

## 📂 Project Structure

attendance-analyzer/

- index.html
- student.js
- README.md

## 🧾 Attendance Rules

- `1` → Present
- `0` → Absent

## 📊 Status Criteria

| Percentage | Status    |
| ---------- | --------- |
| ≥ 80%      | EXCELLENT |
| ≥ 60%      | OK        |
| < 60%      | POOR      |

## 💻 Code Implementation

```javascript
const attendance = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
// 1 = Present, 0 = Absent

function analyzeAttendance(attendanceList) {
  let present = 0;
  let absent = 0;

  for (let i = 0; i < attendanceList.length; i++) {
    if (attendanceList[i] === 1) {
      present++;
    } else {
      absent++;
    }
  }

  const totalDays = attendanceList.length;
  const percentage = (present / totalDays) * 100;

  let status;
  if (percentage >= 80) {
    status = "EXCELLENT";
  } else if (percentage >= 60) {
    status = "OK";
  } else {
    status = "POOR";
  }

  return {
    totalDays,
    present,
    absent,
    percentage,
    status,
  };
}

const printReport = (report) => {
  console.log("Attendance Report");
  console.log("Days:", report.totalDays);
  console.log("Present:", report.present);
  console.log("Absent:", report.absent);
  console.log("Percentage:", report.percentage + "%");
  console.log("Status:", report.status);
};

const result = analyzeAttendance(attendance);
printReport(result);

▶️ How to Run the Project
Using Browser Console

    Open your browser

    Open Developer Tools → Console

    Paste the code and press Enter
```
