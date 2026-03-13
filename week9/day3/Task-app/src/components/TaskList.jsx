import React, { useState } from "react";
import TaskItem from "./TaskItem";
import FilterTabs from "./FilterTabs";
import { tasks as initialTasks } from "../data/tasks";
import "../styles/TaskList.css";

function TaskList() {
  const [tasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1 className="title">Task List</h1>

      <FilterTabs filter={filter} setFilter={setFilter} />

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
