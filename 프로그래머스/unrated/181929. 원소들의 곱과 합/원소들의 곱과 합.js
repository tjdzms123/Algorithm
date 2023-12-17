function solution(num_list) {
  const answer1 = num_list.reduce((a, b) => a * b);
  const answer2 = num_list.reduce((a, b) => a + b) ** 2;
  return answer1 < answer2 ? 1 : 0;
}