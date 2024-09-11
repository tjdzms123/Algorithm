function solution(my_str, n) {
  const arr = [];
  const strArr = [...my_str];
  for (let i = 0; i < strArr.length; i++) {
    if (i % n === 0) {
      arr.push(strArr.slice(i, n + i));
    }
  }

  const answer = arr.map((a) => a.join(""));
  return answer;
}