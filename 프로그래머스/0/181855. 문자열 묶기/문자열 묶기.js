function solution(strArr) {
  const groupedByLength = strArr.reduce((result, str) => {
    const len = str.length;
    if (!result[len]) {
      result[len] = [];
    }
    result[len].push(str);
    return result;
  }, {});

  const resultArray = Object.values(groupedByLength).filter(
    group => group.length > 1
  );
  const maxLengthGroup = resultArray.reduce(
    (max, group) => (group.length > max.length ? group : max),
    []
  );

  return maxLengthGroup.length
}