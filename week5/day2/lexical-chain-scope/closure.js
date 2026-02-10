// A closure is created when an inner function retains access to variables
// from its outer function even after the outer function has finished executing.

function makeGreeter(name) {
  const greeting = "Hello";

  return function () {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetAlice = makeGreeter("Alice");
greetAlice(); // Hello, Alice!
