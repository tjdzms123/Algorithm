function solution(A, B) {
  const arrayA = [...A];
  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      return i;
    } else {
      arrayA.unshift(arrayA.pop());
      if (arrayA.join("") === B) {
        return i + 1;
      }
    }
  }
  return -1;
}
