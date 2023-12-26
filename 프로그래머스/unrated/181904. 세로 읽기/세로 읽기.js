function solution(my_string, m, c) {
  const newArrs = [];
  for (let i = 0; i < my_string.length; i += m) {
    newArrs.push(my_string.slice(i, i + m));
  }
  const result = newArrs.map(e => e.split('')[c - 1]);
  return result.join('')
}