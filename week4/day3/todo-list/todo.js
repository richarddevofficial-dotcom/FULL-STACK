const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const message = document.getElementById("message");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  // Validation
  if (taskText === "") {
    message.textContent = "Please enter valid data";
    message.style.color = "red";
    return;
  }

  message.textContent = "";

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;
  li.style.borderLeft = "5px solid green";

  // Create Done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";

  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");

    if (li.classList.contains("done")) {
      li.style.background = "#67b067";
      doneBtn.textContent = "Undo";
      li.style.color = "white";
    } else {
      li.style.background = "#ffffff";
      doneBtn.textContent = "Done";
    }
  });

  // Create Delete button
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
