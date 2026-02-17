🟢 Week 4: Objects
1️⃣ What is an Object?

An object is a collection of key-value pairs. Keys are like “labels,” and values can be any type (numbers, strings, arrays, functions, or even other objects).

let person = {
name: "Drich",
age: 25,
isStudent: true
};

console.log(person.name); // Drich
console.log(person["age"]); // 25

Exercise:
Create an object for a book with keys: title, author, pages, publishedYear.

2️⃣ Adding & Updating Properties
let car = {
brand: "Toyota",
model: "Corolla"
};

// Add new property
car.year = 2022;

// Update existing property
car.model = "Camry";

console.log(car); // {brand: "Toyota", model: "Camry", year: 2022}

Exercise:
Update your book object to include a new key genre and change pages value.

3️⃣ Deleting Properties
delete car.year;
console.log(car); // {brand: "Toyota", model: "Camry"}

Exercise:
Remove a property from your book object and log the result.

4️⃣ Nested Objects & Arrays

Objects can contain other objects or arrays, which is useful for modeling real-world data.

let student = {
name: "Alice",
age: 22,
subjects: ["Math", "Physics", "Chemistry"],
address: {
city: "Juba",
country: "South Sudan"
}
};

console.log(student.subjects[1]); // Physics
console.log(student.address.city); // Juba

Exercise:
Create an object for a movie with keys: title, year, actors (array), director (object with name and age).

5️⃣ Object Methods

Objects can also store functions as values. These are called methods.

let calculator = {
add: function(a, b) {
return a + b;
},
subtract(a, b) {
return a - b; // shorthand ES6
}
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6

Exercise:
Add a method describe() to your movie object that prints all details in a sentence.

6️⃣ this Keyword

Inside object methods, this refers to the object itself.

let person = {
name: "Drich",
greet() {
console.log("Hello, I am " + this.name);
}
};

person.greet(); // Hello, I am Drich

Exercise:
Add a method to your book object that prints: "The book TITLE has PAGES pages." using this.

7️⃣ Iterating Over Objects

You can loop through keys, values, or entries:

let person = {name: "Alice", age: 22, city: "Juba"};

for (let key in person) {
console.log(key, person[key]);
}

// Object.keys, Object.values, Object.entries
console.log(Object.keys(person)); // ["name","age","city"]
console.log(Object.values(person)); // ["Alice",22,"Juba"]
console.log(Object.entries(person));// [["name","Alice"], ["age",22], ["city","Juba"]]

Exercise:
Loop through your movie object and print all actors.

8️⃣ Mini Project: Contact Book
let contacts = [];

function addContact(name, phone) {
contacts.push({name, phone});
}

function listContacts() {
contacts.forEach((contact, i) => {
console.log(i+1 + ". " + contact.name + " - " + contact.phone);
});
}

addContact("Drich", "928661250");
addContact("Alice", "980316120");

listContacts();

Exercise:
Enhance the contact book to delete a contact by name and search for a contact.

9️⃣ Mini Project: Movie Library
let movies = [
{
title: "Inception",
year: 2010,
actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
},
{
title: "Interstellar",
year: 2014,
actors: ["Matthew McConaughey", "Anne Hathaway"]
}
];

movies.forEach(movie => {
console.log(movie.title + " (" + movie.year + ")");
});

Exercise:
Add a function to search movies by actor name and print all matching titles.

✅ By the end of Week 4, you will:

Understand objects and nested objects.

Use methods and this in real-world scenarios.

Loop through objects and create practical apps like a contact book or movie library.
