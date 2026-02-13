// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUserInput(callback) {
//   const name = "Drichi";
//   callback(name);
// }

// processUserInput(greet);

// // advance callback
// function processUser(name, callback) {
//   const message = "Hello " + name;
//   callback(message);
// }

// processUser("Roda", function (result) {
//   console.log(result);
// });

// //A callback is: A function that is given to another function to be used later.
// //basic callback
// function sayHello() {
//   console.log("Hello");
// }

// function execute(callback) {
//   callback();
// }

// execute(sayHello);

// //advance
// function greet(name) {
//   console.log("Hello " + name);
// }

// function process(callback) {
//   const name = "Drichi";
//   callback(name);
// }

// process(greet);

// const fisrtName = (data) => {
//   console.log("hello world");
// };

// const lastName = (callback) => {
//   const lastName = "richard";
//   callback(lastName);
// };

// lastName(fisrtName);

// const country = (name, callback) => {
//   callback(name);
// };

// country("South Sudan", function(countryName) {
//   console.log("Country is:", countryName);
// });

// //two function
// function county(name){
//     console.log(`county name is ${name}`);
// }

// function getCounty (callback){

// }

// understanding callback level 1
// function greet(callback) {
//   console.log("Hello");
//   callback();
// }

// function sayBye() {
//   console.log("Bye");
// }

// sayBye(greet);

// function sayHello(callback) {
//   console.log("Hello");
//   callback();
// }
// function sayGoodbye() {
//   console.log("Goodbye");
// }

// sayHello(sayGoodbye);

// function greet(name, callback) {
//   callback(name);
// }

// greet("Drich", function (name) {
//   console.log("Hi " + name);
// });

// const greetUser = (name, callback) => {
//   callback(name);
// };

// greetUser("John", function (name) {
//   console.log("Hello " + name);
// });

// greet("Drichi", (name) => {
//   console.log("Hi " + name);
// });

// greet("mawa", (name) => console.log("Hi " + name));

// constructor in js better version
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log("Hi, I'm " + this.name);
// };

// const p1 = new Person("Drich", 25);
// const p2 = new Person("John", 30);

// p1.greet();
// p2.greet();

// function userCreator(name, age) {
//   this.name = name;
//   this.age = age;
// }

// userCreator.prototype.greet = function () {
//   console.log(`hi i am call ${this.name} and i am ${this.age} year old`);
// };

// const user1 = new userCreator("Drich", 25);
// const user2 = new userCreator("John", 30);
// const user3 = new userCreator("Mawa", 28);

// user1.greet();
// user2.greet();
// user3.greet();

class UserName {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  greet() {
    console.log(`This is ${this.name} and I have ${this.phoneNumber}`);
  }
}

const user1 = new UserName("richard", 23);
user1.greet();
