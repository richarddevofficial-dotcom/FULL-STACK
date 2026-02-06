// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value;

  // Validation
  if (taskText === "") {
    message.textContent = "Please type a task.";
    message.style.color = "red";
    return;
  }

  message.textContent = "";

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Style using JS (1)
  li.style.borderLeft = "5px solid green";

  // Done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";

  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");

    // Style using JS (2 & 3)
    if (li.classList.contains("done")) {
      li.style.backgroundColor = "#d4edda";
      doneBtn.textContent = "Undo";
    } else {
      li.style.backgroundColor = "#ffffff";
      doneBtn.textContent = "Done";
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Button container
  const btnGroup = document.createElement("div");
  btnGroup.appendChild(doneBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(btnGroup);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
