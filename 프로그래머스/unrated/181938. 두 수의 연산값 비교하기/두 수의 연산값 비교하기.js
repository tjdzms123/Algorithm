function solution(a, b) {
  const cal = +(a.toString() + b.toString());
  const sum = 2 * a * b;
  return cal > sum ? cal : sum;
}