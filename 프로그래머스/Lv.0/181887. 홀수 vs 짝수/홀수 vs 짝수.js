function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.map((e, i) => (i % 2 === 0 ? (odd += e) : (even += e)));

  if (odd === even) {
    return even;
  } else {
    return Math.max(odd, even);
  }
}