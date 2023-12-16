function solution(str1, str2) {
  const firstArr = str1.split('');
  const secondArr = str2.split('');
  let answer = '';
  for (let i = 0; i < firstArr.length; i++) {
    answer += firstArr[i] + secondArr[i];
  }
  return answer
}