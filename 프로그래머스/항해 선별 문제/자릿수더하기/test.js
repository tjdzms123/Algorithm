function solution(n) {
    let str = String(n)
    let newArr = Array.from(str)
    let answer = 0
    for (let i = 0; i < newArr.length; i++) {
        answer += Number(newArr[i])
    }
    return answer;
}
