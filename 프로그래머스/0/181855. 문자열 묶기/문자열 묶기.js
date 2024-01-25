function solution(strArr) {
  const groupedByLength = strArr.reduce((result, str) => {
    const len = str.length;
    if (!result[len]) {
      result[len] = [];
    }
    result[len].push(str);
    return result;
  }, {});

  const groupSizes = Object.values(groupedByLength).map(group => group.length);

  return Math.max(...groupSizes)
}