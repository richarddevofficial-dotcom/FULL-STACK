🟢 Week 2: Functions & Scope
1️⃣ Functions: The Building Blocks

Functions let you group code that performs a task so you can reuse it.

Function Declaration

function greet(name) {
console.log("Hello, " + name + "!");
}

greet("Drich"); // Hello, Drich!

Function Expression

const greet = function(name) {
console.log("Hello, " + name + "!");
}

greet("Drich");

Arrow Function (ES6+)

const greet = (name) => console.log("Hello, " + name + "!");
greet("Drich");

Exercise:
Write a function that calculates the square of a number and prints it.

2️⃣ Parameters & Return

Functions can accept inputs and return outputs.

function add(a, b) {
return a + b;
}

let result = add(5, 3);
console.log(result); // 8

Exercise:
Create a function convertToFahrenheit(celsius) that converts Celsius to Fahrenheit.

3️⃣ Scope

Scope defines where variables are accessible:

Global scope: Available anywhere in your code.

Local scope: Available only inside the function.

Block scope: Available inside {} when using let or const.

let globalVar = "I am global";

function testScope() {
let localVar = "I am local";
console.log(globalVar); // Works
console.log(localVar); // Works
}

testScope();
console.log(localVar); // ❌ Error

Exercise:
Experiment with var, let, const inside and outside functions and see which variables are accessible.

4️⃣ Closures (Important!)

A closure is when a function remembers variables from its outer scope, even after that outer function has finished executing.

function outer() {
let count = 0;
return function inner() {
count++;
console.log(count);
}
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

Exercise:
Create a function that adds a fixed number to any number you pass using closures.

5️⃣ Callbacks

A callback is a function passed as an argument to another function.

function greetUser(name, callback) {
console.log("Hello, " + name);
callback();
}

function sayBye() {
console.log("Goodbye!");
}

greetUser("Drich", sayBye);
// Output:
// Hello, Drich
// Goodbye!

Exercise:
Write a function calculate(num1, num2, operation) where operation is a callback function for addition, subtraction, etc.

6️⃣ Mini Project: Temperature Converter

Convert temperature between Celsius and Fahrenheit:

function celsiusToFahrenheit(c) {
return (c \* 9/5) + 32;
}

function fahrenheitToCelsius(f) {
return (f - 32) \* 5/9;
}

console.log("25°C =", celsiusToFahrenheit(25), "°F");
console.log("77°F =", fahrenheitToCelsius(77), "°C");

Exercise:
Enhance it to take input from the user using prompt() and alert the converted temperature.

7️⃣ Mini Project: Sum of Array Numbers

Use a function to sum all numbers in an array:

function sumArray(arr) {
let total = 0;
for(let i = 0; i < arr.length; i++) {
total += arr[i];
}
return total;
}

console.log(sumArray([1,2,3,4,5])); // 15

Exercise:
Try using a forEach loop instead of for.

✅ By the end of Week 2 you will:

Understand how to define and use functions in different ways.

Know how scope works and why closures are powerful.

Use callbacks to make code more flexible.

Build mini-projects like a temperature converter and array sum function.
