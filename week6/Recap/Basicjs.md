🟢 Week 1: Core Syntax & Basics
1️⃣ Variables

Variables store data for later use. JS has three main ways to declare them:

var – function-scoped, can be redeclared. (Old style)

let – block-scoped, can be updated but not redeclared in the same scope.

const – block-scoped, cannot be updated or redeclared.

var name = "Drich"; // old way
let age = 25; // modern way, can change
const country = "South Sudan"; // fixed value

Exercise:
Declare a variable for your name, age, and city. Try updating them and see what works and what throws an error.

2️⃣ Data Types

JS has two main types: primitive and reference.

Primitive types: string, number, boolean, null, undefined, symbol, bigint
Reference types: object, array, function

let name = "Drich"; // string
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["coding", "reading"]; // array (object type)
let person = {name: "Drich", age: 25}; // object

Exercise:
Create a variable for a book with its title, author, and number of pages.

3️⃣ Operators

Operators perform operations on values.

Arithmetic: + - \* / %

Comparison: == === != !== > < >= <=

Logical: && || !

Assignment: = += -= \*= /=

let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x > y); // true
console.log(x === y); // false

Exercise:
Calculate the perimeter and area of a rectangle using variables and arithmetic operators.

4️⃣ Conditional Statements

Run different code depending on conditions.

if / else example:

let age = 20;
if(age >= 18){
console.log("You can vote");
}else{
console.log("Too young to vote");
}

switch example:

let day = 3;
switch(day){
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
default:
console.log("Another day");
}

Exercise:
Write a program that prints the grade (A, B, C, D, F) based on a numeric score.

5️⃣ Loops

Repeat tasks efficiently.

for loop – use when you know how many times to repeat

for(let i = 1; i <= 5; i++){
console.log("Count:", i);
}

while loop – use when the end condition is dynamic

let i = 1;
while(i <= 5){
console.log("Count:", i);
i++;
}

Exercise:
Print all even numbers from 1 to 20 using both for and while loops.

6️⃣ Mini Project: Calculator (Basic Arithmetic)
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 \* num2);
console.log("Division:", num1 / num2);
console.log("Modulo:", num1 % num2);

Exercise:
Modify it to take input from the user using prompt() and show the result.

7️⃣ Mini Project: Number Guessing Game
const secretNumber = 7;
let guess = parseInt(prompt("Guess the number (1-10):"));

if(guess === secretNumber){
alert("🎉 Correct! You guessed it!");
}else if(guess < secretNumber){
alert("Too low! Try again.");
}else{
alert("Too high! Try again.");
}

Exercise:
Enhance it to give the user 3 attempts, then show the correct number if they fail.

✅ By the end of Week 1 you will:

Understand variables, data types, operators, conditionals, and loops.

Be able to build small interactive programs like a calculator or guessing game.
