function solution(date1, date2) {
  const firstDate = new Date(date1[0], date1[1] - 1, date1[2]);
  const secondDate = new Date(date2[0], date2[1] - 1, date2[2]);

  return firstDate < secondDate ? 1 : 0;
}