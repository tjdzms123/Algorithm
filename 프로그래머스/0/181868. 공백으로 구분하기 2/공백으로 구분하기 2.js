function solution(my_string) {
  const answer = my_string.split(/\s+/).filter(e => e.length > 0);
  return answer;
}
