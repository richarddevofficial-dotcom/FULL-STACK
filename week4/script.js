function snumber(num) {
  return num * num;
}

console.log(snumber(6));

// write arrow function that return square of unmber

const square = (number) => number * number;
console.log(square(7));

// normal function to return addition of two value

function add(a, b) {
  let result = a + b;
  return result;
}

console.log(add(2, 5));

// hoisting function

// write function thet return even number from the list below

// list [45,23,78,12,98,56];

function getEvenNumbers(list) {
  return list.filter((num) => num % 2 === 0);
}

const numbers = [45, 23, 78, 12, 98, 56];

console.log(getEvenNumbers(numbers));
// Output: [78, 12, 98, 56]
