function solution(my_string, indices) {
  const stringArr = my_string.split('');
  indices.forEach(e => stringArr.splice(e, 1, 1));
  return stringArr.filter(e => e !== 1).join('');
}