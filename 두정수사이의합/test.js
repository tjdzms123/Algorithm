function solution(a, b, s = 0){
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    s += i;
  }
  return s;
}


// 신박했던 다른 풀이(가우스를 활용)
function solution(a,b) {
  return (a + b) * (Math.abs(a-b)+1) / 2
}