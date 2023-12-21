function solution(my_string, queries) {
  let result = my_string;
  for (let querie of queries) {
    const [s, e] = querie;
    const reverseString = result
      .split('')
      .slice(s, e + 1)
      .reverse()
      .join('');
    result = result.slice(0, s) + reverseString + result.slice(e + 1);
  }
  return result;
}