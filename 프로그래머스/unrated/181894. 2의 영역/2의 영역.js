function solution(arr) {
  const front = arr.indexOf(2);
  const end = arr.lastIndexOf(2);
  return front == -1 || end == -1 ? [-1] : arr.slice(front, end + 1);
}