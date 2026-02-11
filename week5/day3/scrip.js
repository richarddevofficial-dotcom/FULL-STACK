// // lexical scope
// //global variable --> local variable

// let fullName = "John Doe";

// function outer() {
//   const lastName = "Maria";
//   function inner() {
//     const firstName = "Jane";
//     console.log(inner);
//     console.log(outer);
//     console.log(fullName);
//   }

//   inner();
// }
// outer();

// the once function
// function once(fn) {
//   let called = false; // remembers if fn was already called
//   let result; // stores the result of fn

//   return function (...args) {
//     // returned function can accept any arguments
//     if ((called = false)) {
//       // first time
//       result = fn(...args); // call fn and save the result
//       called = true; // mark as called
//     }
//     return result; // return saved result every time
//   };
// }

// once();

// function greet() {
//   console.log("Hello!");
//   return "done";
// }

// const greetOnce = once(greet);

// greetOnce(); // First call: logs "Hello!", returns "done"
// greetOnce(); // Second call: logs nothing, returns "done"
// greetOnce(); // Third call: logs nothing, returns "done"

// function add(a, b) {
//   console.log("Adding", a, "+", b);
//   return a + b;
// }

// const addOnce = once(add);

// console.log(addOnce(2, 3)); // logs "Adding 2 + 3", returns 5
// console.log(addOnce(10, 20)); // logs nothing, returns 5 (first result)

//Step 1: Define the once function
function once(fn) {
  let called = false; // remembers if fn has been called
  let result; // stores the result of the first call

  return function (...args) {
    // returned function can take any arguments
    if (!called) {
      result = fn(...args); // call fn only the first time
      called = true; // mark it as called
    }
    return result; // always return the saved result
  };
}

//Step 2: Define the function to wrap
function add(a, b) {
  console.log("Adding", a, "+", b);
  return a + b;
}

//Step 3: Wrap it with once
const addOnce = once(add);

//Step 4: Call it
console.log(addOnce(2, 3)); // logs "Adding 2 + 3", returns 5
console.log(addOnce(10, 20)); // logs nothing, returns 5
console.log(addOnce(7, 8)); // logs nothing, returns 5
