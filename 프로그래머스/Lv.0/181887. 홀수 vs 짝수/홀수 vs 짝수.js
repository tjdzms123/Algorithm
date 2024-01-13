function solution(num_list) {
  const oddSum = num_list
    .filter((e, idx) => idx % 2 === 0)
    .reduce((a, b) => a + b);
  const evenSum = num_list
    .filter((e, idx) => idx % 2 !== 0)
    .reduce((a, b) => a + b);
  if (oddSum === evenSum) {
    return oddSum;
  }
  return oddSum > evenSum ? oddSum : evenSum;
}
