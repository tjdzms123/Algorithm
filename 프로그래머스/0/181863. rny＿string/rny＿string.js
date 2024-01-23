function solution(rny_string) {
  const answer = rny_string.split('').map(e => {
    if (e === 'm') {
      return (e = 'rn');
    } else {
      return e;
    }
  });
  return answer.join('');
}