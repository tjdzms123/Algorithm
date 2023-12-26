function solution(my_string, s, e) {
  const new_string = my_string
    .split('')
    .slice(s, e + 1)
    .reverse()
    .join('');
  const answer = my_string.slice(0, s) + new_string + my_string.slice(e + 1);
  return answer;
}