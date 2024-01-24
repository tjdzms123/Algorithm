function solution(arr) {
  const x = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element; j++) {
      x.push(element);
    }
  }
  return x;
}