function solution(str_list, ex) {
  const answer = str_list.filter(e => !e.includes(ex));
  return answer.length > 0 ? answer.reduce((a, b) => a + b) : '';
}