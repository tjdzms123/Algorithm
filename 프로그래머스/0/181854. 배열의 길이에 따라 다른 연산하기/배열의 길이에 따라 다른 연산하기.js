function solution(arr, n) {
  if (arr.length % 2 !== 0) {
    return arr.map((e, idx) => {
      if (idx % 2 == 0) {
        return e + n;
      } else {
        return e;
      }
    });
  } else {
    return arr.map((e, idx) => {
      if (idx % 2 !== 0) {
        return e + n;
      } else {
        return e;
      }
    });
  }
}