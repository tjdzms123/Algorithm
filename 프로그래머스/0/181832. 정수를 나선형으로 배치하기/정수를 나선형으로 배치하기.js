function solution(n) {
  // n x n 배열 초기화
  const arr = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1; // 배열에 채워질 숫자

  let top = 0; // 상단 경계
  let bottom = n - 1; // 하단 경계
  let left = 0; // 좌측 경계
  let right = n - 1; // 우측 경계

  while (num <= n * n) {
      // 상단, 좌측에서 우측으로 이동
      for (let i = left; i <= right; i++) {
          arr[top][i] = num++;
      }
      top++;

      // 우측, 상단에서 하단으로 이동
      for (let i = top; i <= bottom; i++) {
          arr[i][right] = num++;
      }
      right--;

      // 하단, 우측에서 좌측으로 이동
      for (let i = right; i >= left; i--) {
          arr[bottom][i] = num++;
      }
      bottom--;

      // 좌측, 하단에서 상단으로 이동
      for (let i = bottom; i >= top; i--) {
          arr[i][left] = num++;
      }
      left++;
  }

  return arr;
}