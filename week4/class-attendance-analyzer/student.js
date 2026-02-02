// FIX: define attendance first
const attendance = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
// 1 = Present, 0 = Absent

function analyzeAttendance(attendanceList) {
  let present = 0;
  let absent = 0;

  // for loop to count attendance
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
    totalDays: totalDays,
    present: present,
    absent: absent,
    percentage: percentage,
    status: status,
  };
}

// arrow function
const printReport = (report) => {
  console.log("Attendance Report");
  console.log("Days:", report.totalDays);
  console.log("Present:", report.present);
  console.log("Absent:", report.absent);
  console.log("Percentage:", report.percentage + "%");
  console.log("Status:", report.status);
};

// run program
const result = analyzeAttendance(attendance);
printReport(result);
