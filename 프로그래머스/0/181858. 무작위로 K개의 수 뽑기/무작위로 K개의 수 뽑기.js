function solution(arr, k) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.length < k) {
      if (!answer.includes(arr[i])) {
        answer.push(arr[i]);
      }
    } else if (answer.length === k) {
      break;
    }
  }

  if (answer.length < k) {
    for (let j = answer.length; j < k; j++) {
      answer.push(-1);
    }
  }

  return answer;
}