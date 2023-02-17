let arr = [2, 36, 1, 3], divisor = 10
function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i])
        }
    }
    if (answer.length == 0) {
        answer.push(-1)
    }
    answer.sort((a,b) => a - b);
    // 숫자 오름차순 메소드
    return answer;

}
