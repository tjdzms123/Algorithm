function solution(my_string) {
  const result = Array(52).fill(0);
  my_string.replace(/[A-Za-z]/g, char => {
    const index =
      char.charCodeAt(0) -
      (char >= 'a' ? 'a'.charCodeAt(0) - 26 : 'A'.charCodeAt(0));
    result[index]++;
  });
  return result;
}