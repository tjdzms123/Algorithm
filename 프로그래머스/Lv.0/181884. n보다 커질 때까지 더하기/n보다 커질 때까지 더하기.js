const solution = (number, n) => {
  return number.reduce((a, b) => (a <= n ? a + b : a));
};