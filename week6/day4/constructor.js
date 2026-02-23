// // Constructor Function
// function Student(name, age, course) {
//   this.name = name;
//   this.age = age;
//   this.course = course;
// }

// // Create two student objects
// const student1 = new Student("Gabriella", 22, "Computer Science");
// const student2 = new Student("Alex", 24, "Information Technology");

// // Log them to the console
// console.log(student1);
// console.log(student2);

//question 2
// Constructor Function
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Create two objects for product
const product1 = new Product("Laptop", 1200, 5);
const product2 = new Product("Phone", 800, 10);

// Log them to the console
console.log(product1);
console.log(product2);

// animal
function animalP(name, type) {
  this.name = name;
  this.type = type;
}

const animal1 = new animalP("john", "white color");

console.log(animal1);
