function solution(intStrs, k, s, l) {
  let answer = [];
  intStrs.forEach(e => {
    answer.push(Number(e.slice(s, s + l)));
  });
  return answer.filter(e => e > k);
}
