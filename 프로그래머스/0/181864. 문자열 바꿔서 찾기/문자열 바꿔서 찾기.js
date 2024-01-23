function solution(myString, pat) {
  const newString = myString
    .split('')
    .map(e => {
      if (e === 'A') {
        return (e = 'B');
      } else if (e === 'B') {
        return (e = 'A');
      }
    })
    .join('');
  return newString.includes(pat) ? 1 : 0;
}