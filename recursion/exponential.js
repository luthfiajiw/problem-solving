function exponential(base, exponent) {
  if (exponent === 0) return 1;
  return base * exponential(base, exponent - 1);
}

exponential(2,4);