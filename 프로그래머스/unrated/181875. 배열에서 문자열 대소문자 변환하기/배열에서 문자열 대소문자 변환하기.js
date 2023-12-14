function solution(strArr) {
  return strArr.map((e, idx) =>
    idx % 2 === 0 ? e.toLowerCase() : e.toUpperCase()
  );
}