
function solution(n) {
    let answer = '수박'.repeat(n).slice(0,n)
    return answer;
}
console.log(solution(4))

// 수박을 n만큼 반복하고, 0에서 n번째 까지만 잘라서 보여줌