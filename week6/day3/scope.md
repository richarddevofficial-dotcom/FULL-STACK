📌 WHAT IS SCOPE?

Scope determines:

Where a variable can be accessed in your code.

In simple words:

👉 Scope controls visibility of variables.

🔹 TYPES OF SCOPE IN JAVASCRIPT

There are mainly 3 types:

Global Scope

Function Scope

Block Scope

1️⃣ GLOBAL SCOPE

A variable declared outside any function or block belongs to the global scope.

let name = "Drich";

function greet() {
console.log(name);
}

greet(); // Drich

Why?

Because name is accessible everywhere in the file.

⚠️ Problem with Global Scope

Can cause naming conflicts

Hard to maintain in large applications

Can be overwritten accidentally

2️⃣ FUNCTION SCOPE

Variables declared inside a function are accessible only inside that function.

function test() {
let age = 25;
console.log(age);
}

test(); // 25
console.log(age); // ❌ Error

Why error?

Because age is scoped to the function.

Important:

var is function-scoped.

function demo() {
var x = 10;
}

console.log(x); // ❌ Error

3️⃣ BLOCK SCOPE (let & const)

A block is anything inside { }.

Examples:

if statements

loops

functions

if (true) {
let x = 5;
const y = 10;
}

console.log(x); // ❌ Error
console.log(y); // ❌ Error

Why?

Because let and const are block-scoped.

🔥 Difference Between var, let, const
Keyword Scope Type Can Reassign Can Redeclare
var Function ✅ Yes ✅ Yes
let Block ✅ Yes ❌ No
const Block ❌ No ❌ No
🔹 4️⃣ Lexical Scope (Very Important)

JavaScript uses Lexical Scope.

This means:

Scope is determined by where code is written, not where it is called.

Example:

function outer() {
let name = "Drich";

function inner() {
console.log(name);
}

inner();
}

outer(); // Drich

Inner function can access outer variables.

🔹 5️⃣ Scope Chain

If a variable is not found inside a function:

JS looks:

Inside current scope

Then outer scope

Then global scope

Then gives error

Example:

let a = 1;

function one() {
let b = 2;

function two() {
let c = 3;
console.log(a, b, c);
}

two();
}

one();

JS searches step by step outward.

This is called the Scope Chain.

🔹 6️⃣ Shadowing

When an inner variable has the same name as outer variable.

let x = 10;

function test() {
let x = 5;
console.log(x);
}

test(); // 5

Inner x hides outer x.

That’s called variable shadowing.

🔹 7️⃣ Temporal Dead Zone (TDZ)

Applies to let and const.

console.log(a); // ❌ Error
let a = 5;

Between start of block and declaration line → variable exists but cannot be accessed.

That period is called Temporal Dead Zone.

🔹 8️⃣ Practical Example (Common Interview)
var x = 1;

function test() {
console.log(x);
var x = 2;
}

test();

Output:

undefined

Why?

Because var x is hoisted inside the function.

JS interprets it as:

function test() {
var x;
console.log(x);
x = 2;
}

🔥 Simple Way To Explain Scope To Someone

You can say:

Scope is the area where a variable is accessible. Global scope is accessible everywhere, function scope is accessible only inside a function, and block scope is accessible only inside curly braces.

🎯 Real-World Analogy

Think of scope like rooms in a house:

Global scope = entire house

Function scope = a room

Block scope = a cupboard inside the room

You can see house items from room,
But cupboard items only inside cupboard.

🧠 Advanced Concept: Closures (Connected to Scope)

When a function remembers variables from its outer scope even after outer function finishes.

If you want, I can explain closures deeply next.

Since you're strong in JS fundamentals building (like your flexCalc), mastering scope is critical for:

Closures

Async functions

Callbacks

React

Node.js

Memory management

```Analogy

Global scope: Everyone knows your crush.
Function scope: Only your best friend knows.
Block scope: You whisper a secret in a corner — only the corner hears.
Closure/Lexical scope: You carry your childhood secret with you wherever you go.
```
