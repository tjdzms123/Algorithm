function solution(arr1, arr2) {
  const init = 0;
  if (arr1.length === arr2.length) {
    const sum1 = arr1.reduce((a, b) => a + b, init);
    const sum2 = arr2.reduce((a, b) => a + b, init);
    if (sum1 === sum2) {
      return 0;
    } else if (sum1 > sum2) {
      return 1;
    } else {
      return -1;
    }
  } else {
    if (arr1.length > arr2.length) {
      return 1;
    } else {
      return -1;
    }
  }
}