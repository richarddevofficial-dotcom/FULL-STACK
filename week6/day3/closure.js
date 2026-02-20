//1️⃣ Simple Closure: Access Outer Variable
function greetMaker(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const greetDrich = greetMaker("Drich");
greetDrich(); // Hello Drich
//✅ Explanation:
// greetMaker("Drich") returns the inner function
// Even though greetMaker has finished, the inner function remembers name

//2️⃣ Counter Using Closure (Private Variable)

function counter() {
  let count = 0; // private

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

//✅ Explanation:
//count is hidden from the outside
//Each call remembers and updates the same count
