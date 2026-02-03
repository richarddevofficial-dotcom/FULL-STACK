// // Array of attendances
// const attendance = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
// // 1 = Present, 0 = Absent

// // This function is for Logic & calculations

// function analyzeAttendance(attendanceList) {
//   let present = 0;
//   let absent = 0;

//   // for loop to count attendance
//   for (let std = 0; std < attendanceList.length; std++) {
//     if (attendanceList[std] === 1) {
//       present++;
//     } else {
//       absent++;
//     }
//   }

//   const totalDays = attendance.length;
//   const percentage = (present / totalDays) * 100;

//   let status;
//   if (percentage >= 80) {
//     status = "EXCELLENT";
//   } else if (percentage >= 60) {
//     status = "OK";
//   } else {
//     status = "POOR";
//   }

//   return {
//     totalDays: totalDays,
//     present: present,
//     absent: absent,
//     percentage: percentage,
//     status: status,
//   };
// }

// // arrow function for Output & presentation
// const printReport = (report) => {
//   console.log("Attendance Report");
//   console.log("Days:", report.totalDays);
//   console.log("Present:", report.present);
//   console.log("Absent:", report.absent);
//   console.log("Percentage:", report.percentage + "%");
//   console.log("Status:", report.status);
// };

// // run program
// const result = analyzeAttendance(attendance);
// printReport(result);

const attendance = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0];

function analyzeAttendance(studentList) {
  let present = 0;
  let absent = 0;

  for (let std = 0; std < studentList.length; std++) {
    if (studentList[std] === 1) {
      present++;
    } else if (studentList[std] === 0) {
      absent++;
    }
  }

  const totalDays = attendance.length;
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
    percentage: percentage.toFixed(2),
    status,
  };
}

const reportPrint = (report) => {
  console.log("Attendance Report");
  console.log("Days:", report.totalDays);
  console.log("Present:", report.present);
  console.log("Absent:", report.absent);
  console.log("Percentage:", report.percentage + "%");
  console.log("Status:", report.status);
};

const result = analyzeAttendance(attendance);
reportPrint(result);
