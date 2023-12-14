function solution(n) {
    let str = String(n);
    let newArr = Array.from(str).sort().reverse()
    let answer = ''
    for (let i = 0; i < newArr.length; i++) {
        answer += newArr[i]
    }
    return Number(answer)
}
