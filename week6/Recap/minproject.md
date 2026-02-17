🟢 Week 8: Mini Projects & Integration
1️⃣ Project 1: Advanced Todo List

Features:

Add, remove, mark tasks as done

Save tasks in localStorage

Use arrays and objects for task storage

HTML:

<input type="text" id="taskInput" placeholder="Enter task">
<button id="addBtn">Add Task</button>
<ul id="taskList"></ul>

JS:

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function renderTasks() {
taskList.innerHTML = "";
tasks.forEach((task, index) => {
const li = document.createElement("li");
li.textContent = task.text;
if(task.done) li.style.textDecoration = "line-through";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      saveAndRender();
    };

    li.onclick = () => {
      task.done = !task.done;
      saveAndRender();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);

});
}

function saveAndRender() {
localStorage.setItem("tasks", JSON.stringify(tasks));
renderTasks();
}

addBtn.addEventListener("click", () => {
const taskText = input.value.trim();
if(taskText){
tasks.push({text: taskText, done: false});
input.value = "";
saveAndRender();
}
});

renderTasks();

✅ Skills Used:

DOM selection & events

Arrays & objects

Local storage

Functions

2️⃣ Project 2: Quiz App

Features:

Display multiple-choice questions

Track user score

Navigate between questions

JS Example:

const quiz = [
{ q: "2+2=?", options:["3","4","5"], answer: 1 },
{ q: "Capital of South Sudan?", options:["Juba","Khartoum","Nairobi"], answer: 0 }
];

let current = 0;
let score = 0;

function showQuestion() {
const question = quiz[current];
document.getElementById("q").textContent = question.q;
const optionsDiv = document.getElementById("options");
optionsDiv.innerHTML = "";
question.options.forEach((opt, i) => {
const btn = document.createElement("button");
btn.textContent = opt;
btn.onclick = () => checkAnswer(i);
optionsDiv.appendChild(btn);
});
}

function checkAnswer(selected) {
if(selected === quiz[current].answer) score++;
current++;
if(current < quiz.length) showQuestion();
else document.getElementById("quizContainer").textContent = "Score: " + score;
}

showQuestion();

✅ Skills Used:

Objects & arrays

Functions & events

DOM manipulation

3️⃣ Project 3: Mini E-Commerce Product List

Features:

Display product cards dynamically

Add to cart (array of objects)

Update cart total

JS Example:

const products = [
{name: "Laptop", price: 1200},
{name: "Phone", price: 600},
{name: "Headphones", price: 100}
];

const cart = [];

function showProducts() {
const container = document.getElementById("products");
container.innerHTML = "";
products.forEach((p, i) => {
const card = document.createElement("div");
card.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p>`;
const btn = document.createElement("button");
btn.textContent = "Add to Cart";
btn.onclick = () => {
cart.push(p);
updateCart();
};
card.appendChild(btn);
container.appendChild(card);
});
}

function updateCart() {
const cartDiv = document.getElementById("cart");
cartDiv.innerHTML = "Cart Total: $" + cart.reduce((sum, p) => sum + p.price, 0);
}

showProducts();

✅ Skills Used:

Arrays & objects

DOM & events

Reduce method for totals

4️⃣ Integration Challenge

Combine everything you’ve learned into a single webpage:

Navbar with sections: Todo List, Quiz, Product List

Use tabs or buttons to show/hide sections

Save user data locally

Fetch random jokes or weather using asynchronous JS for extra functionality

Skills Practiced:

Core JS (variables, loops, functions)

Arrays & objects

DOM manipulation

ES6+ features (template literals, spread, destructuring)

Asynchronous JS (fetch, async/await)

5️⃣ Key Takeaways for Week 8

By the end of Week 8, you will be able to:

Combine all JS concepts into real-world apps.

Build interactive, dynamic web pages.

Use asynchronous JS and APIs effectively.

Have a portfolio of mini-projects to demonstrate your mastery.

💡 Pro Tip:
Start small, finish one mini-project per day, then refactor and enhance it using modern JS features. This will solidify your understanding.
