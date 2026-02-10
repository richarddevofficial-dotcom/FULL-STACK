function flexCalc(operator, ...nums) {
  // Edge case: no numbers passed
  if (nums.length === 0) {
    if (operator === "+") return 0;
    if (operator === "*") return 1;
    return null;
  }

  // Default missing numbers (if fewer than two)
  if (nums.length === 1) {
    nums.push(0);
  }

  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (operator === "+") {
      result += nums[i];
    } else if (operator === "-") {
      result -= nums[i];
    } else if (operator === "*") {
      result *= nums[i];
    } else if (operator === "/") {
      if (nums[i] === 0) return "Error: division by zero";
      result /= nums[i];
    } else {
      return "Error: invalid operator";
    }
  }

  return result;
}

console.log(flexCalc("+", 1, 2, 3, 4)); // 10
console.log(flexCalc("*", 2, 3, 4)); // 24
console.log(flexCalc("-", 10)); // 10 - 0 = 10
console.log(flexCalc("/", 20)); // Handle division by zero
