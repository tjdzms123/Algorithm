function solution(arr, idx) {
  const answer = arr.findIndex((e, i) => e === 1 && i >= idx);
  return answer;
}
