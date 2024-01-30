function solution(num_str) {
  const answer = num_str
    .split('')
    .map(e => parseInt(e))
    .reduce((a, b) => a + b);
  return answer;
}