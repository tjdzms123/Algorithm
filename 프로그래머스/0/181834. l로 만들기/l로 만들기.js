function solution(myString) {
  const answer = myString.split('').map(e => {
    if (e < 'l') {
      return 'l';
    } else {
      return e;
    }
  }).join('');
  return answer
}