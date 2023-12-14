function solution(n) {
  const number = Array.from(n.toString(3), Number).reverse().join('');
  const newNumber = Number.parseInt(number,3)
  return newNumber
}

console.log(solution(3));
