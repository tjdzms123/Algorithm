function solution(num_list) {
  const even = parseInt(num_list.filter(e => e % 2 == 0).join(''));
  const odd = parseInt(num_list.filter(e => e % 2 !== 0).join(''));
  return even + odd;
}