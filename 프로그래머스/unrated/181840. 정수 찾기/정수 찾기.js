function solution(num_list, n) {
  const answer = num_list.filter(e => e == n);
  return answer.length > 0 ? 1 : 0
}