function outer() {
  function inner() {
    return "hello";
  }
  return inner(); // call and return
}

console.log(outer()); // "hello"

//

function outer() {
  function inner() {
    return "hello";
  }
  return inner; // return the function itself
}

const sayHello = outer();
console.log(sayHello()); // "hello"
