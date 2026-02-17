🟢 Week 5: DOM (Document Object Model) Manipulation
1️⃣ What is the DOM?

The DOM is a tree-like structure representing all elements of an HTML page.

Every HTML element becomes a node in this tree.

JS can select, modify, and listen to these nodes.

Example HTML:

<h1 id="title">Hello World</h1>
<p class="desc">This is a paragraph.</p>

2️⃣ Selecting Elements

You need to grab elements to work with them:

// By ID
const title = document.getElementById("title");
console.log(title.textContent); // Hello World

// By Class
const desc = document.getElementsByClassName("desc");
console.log(desc[0].textContent); // This is a paragraph

// By Query Selector (CSS style)
const paragraph = document.querySelector(".desc");
console.log(paragraph.textContent);

// Select all elements
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(p => console.log(p.textContent));

Exercise:
Create an HTML page with 3 paragraphs. Use JS to log each paragraph’s text.

3️⃣ Modifying Content & Attributes
const title = document.getElementById("title");

// Change text
title.textContent = "Welcome to Vanilla JS";

// Change HTML
title.innerHTML = "<span style='color:red'>Red Title</span>";

// Change attributes
title.setAttribute("data-info", "main-header");
console.log(title.getAttribute("data-info")); // main-header

Exercise:
Change the text color and font size of your paragraphs using JS.

4️⃣ Styling Elements
const paragraph = document.querySelector(".desc");
paragraph.style.color = "blue";
paragraph.style.fontSize = "20px";

// Add/remove/toggle classes
paragraph.classList.add("highlight");
paragraph.classList.remove("highlight");
paragraph.classList.toggle("highlight"); // if exists remove, if not add

Exercise:
Add a CSS class .highlight { background-color: yellow; } and toggle it on a paragraph when clicked.

5️⃣ Event Listeners

Events make your page interactive. Use addEventListener:

const button = document.querySelector("button");

button.addEventListener("click", () => {
alert("Button clicked!");
});

button.addEventListener("mouseover", () => {
button.style.backgroundColor = "green";
});

Exercise:
Create a button that changes paragraph text when clicked.

6️⃣ Creating & Removing Elements

You can dynamically add/remove elements:

// Create
const newPara = document.createElement("p");
newPara.textContent = "I am new!";
document.body.appendChild(newPara);

// Remove
newPara.remove();

Exercise:
Create a list (ul) dynamically and add 3 items (li) using JS.

7️⃣ Mini Project: Interactive Todo List

Combine arrays, objects, and DOM:

<input type="text" id="taskInput" placeholder="Enter task">
<button id="addBtn">Add Task</button>
<ul id="taskList"></ul>

let tasks = [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
const task = input.value;
if(task){
tasks.push(task);
const li = document.createElement("li");
li.textContent = task;
taskList.appendChild(li);
input.value = "";
}
});

Exercise:

Add a delete button next to each task.

Add a checkbox to mark tasks as done.

8️⃣ Mini Project: Color Picker
<input type="color" id="colorPicker">

<p id="colorText">Change my color!</p>

const colorPicker = document.getElementById("colorPicker");
const colorText = document.getElementById("colorText");

colorPicker.addEventListener("input", () => {
colorText.style.color = colorPicker.value;
});

Exercise:

Create a button that changes the page background to a random color on click.

✅ By the end of Week 5, you will:

Be able to select, modify, and style HTML elements.

Use event listeners to make the page interactive.

Build practical projects like a dynamic todo list or color picker.
