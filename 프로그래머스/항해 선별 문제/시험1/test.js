function solution(num) {
    let change = 1000 - num
    let fiveh = (change - (change % 500)) / 500 // 필요한 500원 개수 
    change -= 500 * fiveh                       // 500원을 주고 남은 거스름돈
    let oneh = (change - (change % 100)) / 100
    change -= 100 * oneh
    let fivet = (change - (change % 50)) / 50
    change -= 50 * fivet
    let onet = (change - (change % 10)) / 10
    change -= 10 * onet
    answer = fiveh + oneh + fivet + onet
    return answer;
}
let num1 = 900;
console.log(solution(num1))

// 배열을 이용한 풀이
// function solution(num) {
//     let answer = 0;
//     let change = 1000 - num;
//     let arr = [500, 100, 50, 10];
//     for (let i = 0; i < arr.length; i++) {
//         answer = answer + Math.floor(change / arr[i]);
//         change = change - arr[i] * Math.floor(change / arr[i]);
//     }
//     return answer;
// }
// let num1 = 160;
// console.log(solution(num1));
