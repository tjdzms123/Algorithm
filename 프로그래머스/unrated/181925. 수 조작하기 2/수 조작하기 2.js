function solution(numLog) {
  let result = '';
  for (let i = 0; i < numLog.length; i++) {
    if (numLog[i + 1] - numLog[i] == 1) {
      result = result + 'w';
    } else if (numLog[i + 1] - numLog[i] == -1) {
      result = result + 's';
    } else if (numLog[i + 1] - numLog[i] == 10) {
      result = result + 'd';
    } else if (numLog[i + 1] - numLog[i] == -10) {
      result = result + 'a';
    }
  }
  return result;
}