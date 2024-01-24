function solution(arr) {
  const targetLength = Math.pow(2, Math.ceil(Math.log2(arr.length)));
  if (Math.sqrt(arr.length) !== 2) {
    for (let i = arr.length; i < targetLength; i++) {
      arr.push(0);
    }
  } else {
    return arr;
  }
  return arr
}