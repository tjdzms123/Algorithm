function solution(strArr) {
  const answer = strArr.filter(e => !e.includes('ad'));
  return answer;
}
