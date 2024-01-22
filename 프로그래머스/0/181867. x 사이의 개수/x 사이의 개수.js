function solution(myString) {
  const answer = [];
  myString.split('x').map(e => answer.push(e.length));
  return answer;
}