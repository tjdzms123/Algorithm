function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; ) {
    if (stk.length < 1) {
      stk.push(arr[i]);
      i++;
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }
  return stk;
}