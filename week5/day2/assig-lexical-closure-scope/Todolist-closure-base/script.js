const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

function render() {
  list.innerHTML = "";

  todoApp.getTodos().forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.style.textDecoration = todo.completed ? "line-through" : "none";

    li.addEventListener("click", () => {
      todoApp.toggleTodo(index);
      render();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      todoApp.deleteTodo(index);
      render();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

document.getElementById("addBtn").addEventListener("click", () => {
  todoApp.addTodo(input.value);
  input.value = "";
  render();
});

// closure
function createTodoApp() {
  let todos = []; // 🔒 private

  function addTodo(text) {
    if (!text.trim()) return;
    todos.push({ text, completed: false });
  }

  function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
  }

  function getTodos() {
    return todos.map((todo) => ({ ...todo })); // return copy
  }

  return {
    addTodo,
    toggleTodo,
    deleteTodo,
    getTodos,
  };
}

const todoApp = createTodoApp();
