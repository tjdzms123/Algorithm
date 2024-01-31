function solution(picture, k) {
  const result = [];

  // 각 행에 대해 k배 확장
  for (const row of picture) {
    const newRow = row
      .split('')
      .map(char => char.repeat(k))
      .join('');
    // 각 행을 k배 확장한 결과를 새로운 배열에 추가
    for (let i = 0; i < k; i++) {
      result.push(newRow);
    }
  }

  return result;
}