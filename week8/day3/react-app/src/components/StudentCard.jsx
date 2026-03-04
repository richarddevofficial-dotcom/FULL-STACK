import React from "react";

function StudentCard({ name, course, age }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        <strong>Course:</strong> {course}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
}

export default StudentCard;
