function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  if (rows > cols) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows - cols; j++) {
        arr[i].push(0);
      }
    }
  } else if (rows < cols) {
    for (let i = 0; i < cols - rows; i++) {
      arr.push(Array(cols).fill(0));
    }
  } else {
    return arr;
  }

  return arr;
}