function solution(number) {
  const newNumber = [...number].map(Number);
  const sum = newNumber.reduce((a, b) => a + b);
  return sum % 9;
}