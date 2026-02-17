🟢 Week 6: ES6+ & Advanced JS
1️⃣ Template Literals

Template literals allow dynamic strings without messy concatenation.

let name = "Drich";
let age = 25;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);

Exercise:
Create a template literal to display your favorite movie and its release year.

2️⃣ Destructuring

Extract values from arrays or objects easily.

Object Destructuring:

const person = {name: "Alice", age: 22, city: "Juba"};
const {name, city} = person;
console.log(name); // Alice
console.log(city); // Juba

Array Destructuring:

const numbers = [1,2,3];
const [first, second] = numbers;
console.log(first, second); // 1 2

Exercise:
Destructure your movie object from Week 4 to get title and year.

3️⃣ Spread & Rest Operators

Spread (...) → expands an array/object
Rest (...) → collects multiple values into an array

// Spread with arrays
const arr1 = [1,2];
const arr2 = [3,4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4]

// Rest in function parameters
function sum(...numbers) {
return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1,2,3,4)); // 10

Exercise:
Use spread to combine two arrays of your favorite foods and use rest to sum numbers from user input.

4️⃣ ES6 Modules

Modules allow splitting code into separate files.

// file: math.js
export function add(a, b) {
return a + b;
}

// file: main.js
import { add } from './math.js';
console.log(add(5, 3)); // 8

Exercise:
Create two JS files: one for helper functions and one for main logic. Import and use them.

5️⃣ Prototypes & Inheritance

JS objects have prototypes, which let you share methods across objects.

function Person(name, age){
this.name = name;
this.age = age;
}

Person.prototype.greet = function(){
console.log(`Hello, I am ${this.name}`);
};

const alice = new Person("Alice", 22);
alice.greet(); // Hello, I am Alice

Exercise:
Create a Movie constructor with title and year. Add a prototype method to print movie info.

Class Syntax (ES6 alternative):

class Person {
constructor(name, age){
this.name = name;
this.age = age;
}
greet(){
console.log(`Hello, I am ${this.name}`);
}
}

const bob = new Person("Bob", 30);
bob.greet();

Exercise:
Rewrite your Movie constructor using class syntax.

6️⃣ Optional Chaining & Nullish Coalescing

Optional chaining (?.) prevents errors when accessing nested properties.
Nullish coalescing (??) sets default values for null or undefined.

const user = { profile: { name: "Drich" } };
console.log(user.profile?.name); // Drich
console.log(user.profile?.age ?? 18); // 18

Exercise:
Use optional chaining in your movie object to safely access actors.

7️⃣ Mini Project: Movie Library with Classes
class Movie {
constructor(title, year, actors){
this.title = title;
this.year = year;
this.actors = actors;
}

info(){
console.log(`${this.title} (${this.year}) - Actors: ${this.actors.join(", ")}`);
}
}

const inception = new Movie("Inception", 2010, ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]);
const interstellar = new Movie("Interstellar", 2014, ["Matthew McConaughey", "Anne Hathaway"]);

inception.info();
interstellar.info();

Exercise:
Add a method to add new actors to a movie.

8️⃣ Key Takeaways

By the end of Week 6, you will:

Write clean and modern JS code using ES6+ features.

Use spread/rest, destructuring, template literals effectively.

Understand prototypes, classes, and inheritance.

Create robust objects and classes for real-world applications.
