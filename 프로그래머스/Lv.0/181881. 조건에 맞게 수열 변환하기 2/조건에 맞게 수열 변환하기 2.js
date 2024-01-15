function solution(arr) {
  function processArray(inputArr) {
    return inputArr.map((currentValue) => {
      if (currentValue >= 50 && currentValue % 2 === 0) {
        // 값이 50 이상이고 짝수인 경우 2로 나누기
        return currentValue / 2;
      } else if (currentValue < 50 && currentValue % 2 !== 0) {
        // 값이 50 미만이고 홀수인 경우 2를 곱하고 1을 더하기
        return currentValue * 2 + 1;
      }
      // 그 외의 경우는 그대로 유지
      return currentValue;
    });
  }

  let iterations = 0;
  let currentArray = arr.slice();
  const seenArrays = new Map();

  while (!seenArrays.has(JSON.stringify(currentArray))) {
    seenArrays.set(JSON.stringify(currentArray), iterations);
    currentArray = processArray(currentArray);
    iterations++;
  }

  return seenArrays.get(JSON.stringify(currentArray));
}