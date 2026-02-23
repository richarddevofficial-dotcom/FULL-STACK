📘 Prototype in JavaScript (Detailed Note)
1️⃣ What is a Prototype?

A prototype is an object from which other objects inherit properties and methods.

In JavaScript:

Every function automatically has a property called prototype.

This prototype object is shared among all instances created using that constructor.

2️⃣ Why Do We Need Prototype?

When you define methods inside a constructor:

function Student(name) {
this.name = name;
this.sayHi = function () {
console.log("Hi " + this.name);
};
}

⚠ Problem:
Every object created gets its own copy of sayHi() → this wastes memory.

3️⃣ Solution: Use Prototype

Instead of putting methods inside the constructor, attach them to the prototype.

function Student(name) {
this.name = name;
}

Student.prototype.sayHi = function () {
console.log("Hi " + this.name);
};

const student1 = new Student("John");
const student2 = new Student("Mary");

student1.sayHi();
student2.sayHi();
4️⃣ What Happens Internally?

When you create:

const student1 = new Student("John");

JavaScript does this:

Creates a new object {}

Links it to Student.prototype

Assigns properties

Returns the object

So student1 can access:

Its own properties (name)

Prototype methods (sayHi)

5️⃣ Prototype Chain

JavaScript uses something called the prototype chain.

If you try to access a property:

student1.sayHi()

JavaScript looks:

Inside student1 object

If not found → looks inside Student.prototype

If not found → looks inside Object.prototype

If not found → returns undefined

This chain continues until null.

6️⃣ Why Prototype is Important
✅ Saves Memory

Methods are shared, not duplicated.

✅ Improves Performance

All instances use the same function reference.

✅ Enables Inheritance

Objects can inherit behavior from other objects.

7️⃣ Simple Example to Understand

Think of prototype like:

🧠 A shared brain

All students share the same brain for behavior (methods), but each has different personal data (name, age).

8️⃣ Difference: Constructor Method vs Prototype Method
Inside Constructor Using Prototype
New copy per object One shared copy
Uses more memory Memory efficient
Not recommended for methods Recommended for methods
9️⃣ Short Exam Definition

A prototype in JavaScript is an object that allows other objects to inherit properties and methods. It enables method sharing among instances created from a constructor function.

🔥 Advanced Concept (For Interviews)

Every JavaScript object has an internal property called:

[[Prototype]]

Accessible using:

Object.getPrototypeOf(obj)

Or visually in browser as:

**proto**
🎯 When to Use Prototype

Use prototype when:

You are creating many objects

You want to share methods

You want memory-efficient code

You want inheritance
