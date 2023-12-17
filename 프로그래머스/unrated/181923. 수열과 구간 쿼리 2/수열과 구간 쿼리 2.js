function solution(arr, queries) {
  let answer = [];
  queries.forEach(([s, e, k], idx) => {
    const result = arr
      .slice(s, e + 1)
      .filter(x => x > k)
      .sort((a, b) => a - b)[0];
    answer.push(result ? result : -1);
  });
  return answer;
}