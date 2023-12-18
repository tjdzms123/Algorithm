function solution(arr, queries) {
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    let result = Array.from({ length: e - s + 1 }, (_, idx) => s + idx).filter(
      x => x % k == 0
    );
    result.map(r => (arr[r] = arr[r] + 1));
  }
  return arr
}