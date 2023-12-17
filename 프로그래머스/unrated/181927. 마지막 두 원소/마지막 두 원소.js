function solution(num_list) {
  const lastElement = num_list.slice(-1)[0];
  const lastSecondElement = num_list.slice(-2, -1)[0];
  if (lastSecondElement < lastElement) {
    num_list.push(lastElement - lastSecondElement);
  } else {
    num_list.push(lastElement * 2);
  }

  return num_list;
}