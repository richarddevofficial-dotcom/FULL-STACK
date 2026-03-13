import React from "react";

function TaskItem({ task }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : "pending"}`}>
      {task.title}
    </li>
  );
}

export default TaskItem;
