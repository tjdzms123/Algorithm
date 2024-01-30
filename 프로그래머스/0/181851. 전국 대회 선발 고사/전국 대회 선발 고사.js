function solution(rank, attendance) {
  let answer = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      answer.push({ [i]: rank[i] });
    }
  }
  const [a, b, c] = answer
    .sort((a, b) => {
      let valueA = Object.values(a)[0];
      let valueB = Object.values(b)[0];
      return valueA - valueB;
    })
    .slice(0, 3)
    .map(e => parseInt(Object.keys(e)[0]));

  return 10000 * a + 100 * b + c;
}