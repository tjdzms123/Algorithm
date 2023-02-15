let arr = [1,2,3,4]
function solution(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        avg = sum / arr.length
    }
    return avg;
}
console.log(solution(arr))