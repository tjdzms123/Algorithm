function solution(q, r, code) {
  return [...code].filter((e, idx) => idx % q == r).join('');
}
