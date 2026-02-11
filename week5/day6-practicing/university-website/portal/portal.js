// ===== FAKE DATABASE =====
const students = [
  {
    id: "STD001",
    password: "1234",
    name: "John Doe",
    courses: ["Math 101", "Computer Science 102"],
  },
  {
    id: "STD002",
    password: "abcd",
    name: "Mary Smith",
    courses: ["Business Admin 201", "Economics 101"],
  },
];

// ===== LOGIN LOGIC =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("studentId").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("loginError");

    const student = students.find(
      (s) => s.id === id && s.password === password,
    );

    if (student) {
      sessionStorage.setItem("loggedInStudent", JSON.stringify(student));
      window.location.href = "dashboard.html";
    } else {
      error.textContent = "Invalid ID or Password";
    }
  });
}

// ===== DASHBOARD LOGIC =====
const studentData = JSON.parse(sessionStorage.getItem("loggedInStudent"));

if (window.location.pathname.includes("dashboard.html")) {
  if (!studentData) {
    window.location.href = "login.html";
  } else {
    document.getElementById("studentName").textContent = studentData.name;

    const courseList = document.getElementById("courseList");

    studentData.courses.forEach((course) => {
      const li = document.createElement("li");
      li.textContent = course;
      courseList.appendChild(li);
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
      sessionStorage.removeItem("loggedInStudent");
      window.location.href = "login.html";
    });
  }
}
