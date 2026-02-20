📌 CLOSURE IN JAVASCRIPT

Definition:

A closure is a function that remembers the variables from the scope in which it was created, even after that outer scope has finished execution.

In simple words:

A closure lets a function carry its “backpack” of surrounding variables wherever it goes.

🔹 1️⃣ How Closures Happen

Closures occur automatically whenever:

You have a function inside another function

The inner function accesses variables of the outer function

Example:

function outer() {
let name = "Drich";

function inner() {
console.log("Hello " + name);
}

return inner;
}

const greet = outer();
greet(); // Hello Drich

What happens here:

outer() is called → defines name and inner()

outer() returns inner (the function)

Even though outer() has finished, inner still remembers name

Calling greet() prints "Hello Drich"

🔹 2️⃣ Why Closures Are Useful

Data privacy / Encapsulation

Variables in the outer function cannot be accessed directly from outside

Only the inner function can access them

function counter() {
let count = 0;
return function () {
count++;
return count;
};
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

count is hidden from the outside world

But the inner function can remember and update it

Creating factory functions / dynamic behavior

function multiplier(x) {
return function (y) {
return x \* y;
};
}

const double = multiplier(2);
console.log(double(5)); // 10

double remembers x = 2 even after multiplier finishes

Closures make function factories possible

🔹 3️⃣ Key Points About Closures

A closure always has access to:

Its own variables

Variables from outer functions

Global variables

Closures do not include block-scoped variables if they aren’t referenced

They remember the environment where they were created — this is called lexical scoping

🔹 4️⃣ Common Uses of Closures

Private variables (encapsulation)

Function factories

Callbacks & event handlers

Memoization / caching

🔹 5️⃣ Interview-Tricky Example
for (var i = 1; i <= 3; i++) {
setTimeout(function () {
console.log(i);
}, 1000);
}

Output after 1 second:

4
4
4

Why? var is function-scoped → all closures share same i.

Fix with closure:

for (var i = 1; i <= 3; i++) {
(function (x) {
setTimeout(function () {
console.log(x);
}, 1000);
})(i);
}

Output:

1
2
3

✅ Now each closure remembers its own x

🔹 6️⃣ Simple Relationship Analogy

Closure = Your best friend (inner function) carries your secret (outer variable) with them everywhere, even after you leave the room (outer function finishes).

You can’t see the secret directly

But your friend can always use it

🔹 7️⃣ Summary

Closures allow inner functions to access outer variables even after the outer function ends

Essential for private variables, function factories, and callbacks

Closures rely on lexical scoping

Always remember: “Inner functions carry their environment in a backpack.” 🎒
