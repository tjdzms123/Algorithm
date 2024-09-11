const solution = (num, total) => {
  let answer = [];
  const a = (((2 * total) / num) * 1 - num + 1) / 2;
  for (let i = a; i < a + num; i++) {
    answer.push(i);
  }
  return answer;
};