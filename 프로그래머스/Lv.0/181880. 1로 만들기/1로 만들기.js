function solution(numList) {
  let answer = 0;

  for (let num of numList) {
    while (num !== 1) {
      if (num % 2 === 0) {
        num /= 2;
      } else {
        num -= 1;
        num /= 2;
      }
      answer++;
    }
  }

  return answer;
}
