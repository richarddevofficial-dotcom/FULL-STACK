🟢 Week 3: Arrays
1️⃣ What is an Array?

An array is a collection of values stored in a single variable. Think of it like a row of boxes, each holding a value.

let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // apple
console.log(fruits.length); // 3

Arrays can hold any type: numbers, strings, objects, other arrays.

let mixed = [1, "hello", true, {name: "Drich"}];

Exercise:
Create an array of your top 5 favorite foods and print the first and last item.

2️⃣ Iterating Through Arrays

Looping through arrays lets you access or modify each item.

Using for loop:

for(let i = 0; i < fruits.length; i++){
console.log(fruits[i]);
}

Using for...of loop:

for(let fruit of fruits){
console.log(fruit);
}

Using forEach:

fruits.forEach((fruit, index) => {
console.log(index, fruit);
});

Exercise:
Print each number in [2, 4, 6, 8, 10] using all three loops.

3️⃣ Common Array Methods

Arrays come with built-in methods to make life easier.

Mutating Methods (change original array):

push() – add at the end

pop() – remove from the end

shift() – remove from the start

unshift() – add at the start

splice(start, deleteCount, items) – remove/replace/add items

fruits.push("mango"); // add
fruits.pop(); // remove last
fruits.splice(1, 1, "kiwi"); // replace banana with kiwi

Non-mutating Methods (don’t change original array):

slice(start, end) – copy part of array

concat() – combine arrays

includes() – check if value exists

let citrus = fruits.slice(1, 3);
let allFruits = fruits.concat(["grape", "pear"]);
console.log(fruits.includes("apple")); // true

Exercise:
Create an array of numbers [10, 20, 30, 40]. Add a number at the start and end, then remove one number from the middle.

4️⃣ Map, Filter, Reduce (Beginner-Friendly)

These are powerful tools to process arrays:

map() → transforms each element and returns a new array.

let numbers = [1,2,3];
let doubled = numbers.map(n => n \* 2);
console.log(doubled); // [2,4,6]

filter() → keeps elements that pass a condition.

let even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2]

reduce() → combines all elements into a single value.

let sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 6

Exercise:
Given [5, 10, 15, 20],

Use map to double numbers

Use filter to get numbers > 10

Use reduce to get the sum

5️⃣ Nested Arrays

Arrays can contain other arrays, like a grid or matrix.

let matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
];

console.log(matrix[1][2]); // 6

Exercise:
Create a 3x3 matrix and print the diagonal numbers.

6️⃣ Mini Project: Todo List Array
let todos = [];

function addTodo(task) {
todos.push(task);
}

function showTodos() {
todos.forEach((task, i) => console.log(i + 1 + ". " + task));
}

addTodo("Learn JS");
addTodo("Build project");
showTodos();

Exercise:
Enhance the todo list to remove a task by index and mark a task as done.

7️⃣ Mini Project: Array Statistics
let numbers = [5, 10, 15, 20, 25];

let sum = numbers.reduce((total, n) => total + n, 0);
let average = sum / numbers.length;
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log("Sum:", sum);
console.log("Average:", average);
console.log("Max:", max);
console.log("Min:", min);

Exercise:
Modify it to take numbers from the user using prompt() until they type "done". Then calculate sum, average, max, and min.

✅ By the end of Week 3, you will:

Understand how to create, access, and manipulate arrays.

Know how to use map, filter, reduce for real-world data processing.

Build practical mini-projects like a todo list and array statistics tool.
