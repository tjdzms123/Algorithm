function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === arr[j][i]) {
        answer.push(1);
      } else {
        answer.push(0);
      }
    }
  }
  if (answer.includes(0)) {
    return 0;
  } else {
    return 1;
  }
}