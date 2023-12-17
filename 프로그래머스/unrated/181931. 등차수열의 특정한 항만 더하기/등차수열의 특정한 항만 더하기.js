function solution(a, d, included) {
  let answer = [a];
  let sum = 0;
  for (let i = 0; i < included.length; i++) {
    answer.push((a += d));
    if (included[i]) sum += answer[i];
  }
  return sum;
}