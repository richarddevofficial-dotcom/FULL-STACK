📘 Constructor in JavaScript (Detailed Note)
1️⃣ What is a Constructor?

A constructor is a special function used to create and initialize objects.

It acts like a blueprint or factory for creating multiple objects with similar properties.

2️⃣ Why Do We Use Constructors?

Without a constructor:

const student1 = { name: "John", age: 20 };
const student2 = { name: "Mary", age: 22 };

You repeat code every time.

With a constructor, you define the structure once and create many objects easily.

3️⃣ Constructor Function Syntax
function Student(name, age, course) {
this.name = name;
this.age = age;
this.course = course;
}
Important Rules:

The function name starts with a capital letter (convention).

It uses the keyword this.

It is used with the new keyword.

4️⃣ Creating Objects Using Constructor
const student1 = new Student("Gabriella", 22, "Computer Science");
const student2 = new Student("Alex", 24, "IT");
5️⃣ What Happens When You Use new?

When you write:

new Student("Gabriella", 22, "CS");

JavaScript automatically:

Creates a new empty object {}

Sets this to that object

Assigns properties inside the constructor

Returns the object automatically

This is called the object creation process.

6️⃣ Understanding this in Constructor

Inside a constructor:

this.name = name;

this refers to the new object being created.

It connects the parameter to the object property.

7️⃣ Adding Methods to Constructor

You can add functions (methods):

function Student(name, age) {
this.name = name;
this.age = age;

this.introduce = function() {
console.log("Hi, my name is " + this.name);
};
}

const student1 = new Student("John", 20);
student1.introduce();
8️⃣ Difference Between Constructor and Normal Function
Constructor Function Normal Function
Used with new Called directly
Creates objects Performs tasks
Uses this to assign properties May or may not use this
9️⃣ Constructor vs ES6 Class

Modern JavaScript uses classes:

class Student {
constructor(name, age) {
this.name = name;
this.age = age;
}
}

But internally, classes still work like constructor functions.

🧠 Simple Definition for Exams

A constructor in JavaScript is a special function used to create and initialize objects. It is called using the new keyword and uses the this keyword to assign properties to the object being created.
