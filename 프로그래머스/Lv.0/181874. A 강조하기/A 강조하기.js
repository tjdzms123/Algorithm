function solution(myString) {
  const str_arr = myString.split('');
  const answer = str_arr.map(e => {
    if (e === 'a' || e === 'A') {
      return e.toUpperCase();
    } else {
      return e.toLowerCase();
    }
  });
  return answer.join('');
}
