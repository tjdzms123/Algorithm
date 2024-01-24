function solution(arr, flag) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        x.push(arr[i]);
      }
    } else {
      x = x.slice(0, -arr[i]);
    }
  }
  return x;
}