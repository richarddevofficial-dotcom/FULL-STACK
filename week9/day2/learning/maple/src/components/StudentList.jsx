import React, { useState } from "react";

const students = [
  { id: 1, name: "Amina", track: "Software Engineering", mode: "Physical" },
  { id: 2, name: "Brian", track: "Data Science", mode: "Online" },
  { id: 3, name: "Carol", track: "Cyber Security", mode: "Physical" },
  { id: 4, name: "David", track: "Software Engineering", mode: "Online" },
  { id: 5, name: "Ethan", track: "Data Science", mode: "Physical" },
  { id: 6, name: "Fiona", track: "Cyber Security", mode: "Online" },
  { id: 7, name: "George", track: "Software Engineering", mode: "Physical" },
];

function StudentList() {
  const [mode, setMode] = useState("All");
  const [search, setSearch] = useState("");

  const filteredStudents = students
    .filter((student) => mode === "All" || student.mode === mode)
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase()),
    );

  return (
    <div className="dashboard">
      <h1>Mctaba Labs Student Dashboard</h1>

      {/* Search Input */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button onClick={() => setMode("All")}>All</button>
        <button onClick={() => setMode("Physical")}>Physical</button>
        <button onClick={() => setMode("Online")}>Online</button>
      </div>

      {/* Total Count */}
      <p className="count">Students Found: {filteredStudents.length}</p>

      {/* Student List */}
      <ul className="student-list">
        {filteredStudents.map((student) => (
          <li key={student.id} className="student-card">
            <strong>{student.name}</strong>
            <span className="student-track">{student.track}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
