function solution(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      // i와 j가 동일한 경우에는 1을 할당, 그 외에는 0을 할당
      arr[i][j] = i === j ? 1 : 0;
    }
  }

  return arr;
}