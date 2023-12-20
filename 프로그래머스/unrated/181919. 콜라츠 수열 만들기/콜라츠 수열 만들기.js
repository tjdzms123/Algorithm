function solution(n) {
  let answer = [n];

  for (let i = 0; i <= 1000; i++) {
    if (answer[i] == 1) {
      break;
    } else if (answer[i] % 2 == 0) {
      answer.push(answer[i] / 2);
    } else if (answer[i] % 2 !== 0) {
      answer.push(3 * answer[i] + 1);
    }
  }
  return answer;
}
