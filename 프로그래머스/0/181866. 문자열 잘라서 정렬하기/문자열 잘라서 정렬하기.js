function solution(myString) {
  const answer = myString.split('x').filter(e=> e !== '').sort()
  return answer;
}