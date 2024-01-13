function solution(names) {
  const result = [];
  for (let i = 0; i < names.length; i += 5) {
    const chunk = names.slice(i, i + 5);
    if (chunk.length > 0) {
      result.push(chunk[0]);
    }
  }
  return result;
}