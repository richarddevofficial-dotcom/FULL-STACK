//✅ 1️⃣ Basic Prototype Example (Constructor + Shared Method)
function Student(name, course) {
  this.name = name;
  this.course = course;
}

// Shared method (stored once in memory)
Student.prototype.introduce = function () {
  return `Hi, I'm ${this.name} studying ${this.course}`;
};

const s1 = new Student("Drich", "Computer Science");
const s2 = new Student("John", "Information Technology");

console.log(s1.introduce());
console.log(s2.introduce());

// Important check
console.log(s1.__proto__ === Student.prototype); // true

// ✅ 2️⃣ Showing the Prototype Chain
const arr = [1, 2, 3];

console.log(arr.hasOwnProperty("length")); // true
console.log(arr.hasOwnProperty("toString")); // false
console.log(arr.toString()); // works

//memory
function Car(name) {
  this.name = name;
}

Car.prototype.start = function () {
  return `${this.name} started`;
};

const c1 = new Car("Toyota");
const c2 = new Car("BMW");

console.log(c1.start === c2.start); // true (same function shared)

//✅ 4️⃣ Manual Inheritance Using Object.create()
const animal = {
  eat() {
    return "Eating...";
  },
};

const dog = Object.create(animal);

dog.bark = function () {
  return "Woof!";
};

console.log(dog.eat()); // inherited
console.log(dog.bark()); // own method

//dog → animal → Object.prototype → null
//✅ 6️⃣ Prototype with ES6 Class (Behind the Scenes)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi ${this.name}`;
  }
}

const p1 = new Person("Drich");

console.log(p1.greet());
console.log(p1.__proto__ === Person.prototype); // true
