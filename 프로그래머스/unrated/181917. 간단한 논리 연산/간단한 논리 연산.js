function solution(x1, x2, x3, x4) {
  let answer1 = true;
  let answer2 = true;
  x1 || x2 ? answer1 : (answer1 = false);
  x3 || x4 ? answer2 : (answer2 = false);
  return answer1 && answer2 ? true : false;
}