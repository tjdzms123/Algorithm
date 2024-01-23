function solution(myStr) {
  const arr = myStr
    .replace(/[abc]/g, ' ')
    .split(' ')
    .filter(e => e !== '');

  return arr.length > 0 ? arr : ['EMPTY'];
}