function solution(a, b, c) {
  let answer = 0;
  if (a !== b && a !== c && b !== c) {
    return (answer = a + b + c);
  } else if (a == b && a !== c && b !== c) {
    return (answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2));
  } else if (a == c && a !== b && b !== c) {
    return (answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2));
  } else if (b == c && a !== b && a !== c) {
    return (answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2));
  } else if (a == b && a == c && b == c) {
    return (answer =
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3));
  }
}