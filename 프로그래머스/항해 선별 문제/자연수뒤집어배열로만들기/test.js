function solution(n) {
    let str = String(n)
    let newArr = Array.from(str)
    let answer = []
    for (let i = 0; i < newArr.length; i++) {
        answer.push(Number(newArr[i]))
    }
    return answer.reverse();
}
console.log(solution(12345))
