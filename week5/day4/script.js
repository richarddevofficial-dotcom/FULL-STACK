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
function greet(callback) {
  console.log("Hello");
  callback();
}

function sayBye() {
  console.log("Bye");
}

sayBye(greet);
