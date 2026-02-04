// DOM selections
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // 🔹 DUPLICATE CHECK
  const existingTasks = document.querySelectorAll("#taskList li");

  for (let task of existingTasks) {
    if (task.firstChild.textContent === taskText) {
      alert("Task already exists!");
      return;
    }
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark task as completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent marking completed
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

// Button click
addBtn.addEventListener("click", addTask);

// Enter key support
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
