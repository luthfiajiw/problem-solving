// Iteratively
function factorialIterative(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}

// Recursively
function factorialRecursive(num) {
  if (num === 1) return 1;
  return num * factorialRecursive(num-1);
}
