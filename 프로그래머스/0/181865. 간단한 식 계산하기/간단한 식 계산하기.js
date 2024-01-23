function solution(binomial) {
  const [a, op, b] = binomial.split(' ');

  let result;
  switch (op) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    default:
      return null;
  }
  return result;
}
