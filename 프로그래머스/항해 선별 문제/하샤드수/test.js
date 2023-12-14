function solution(x) {
    let str = String(x)
    let newArr = Array.from(str)
    let answer = 0
    for (let i = 0; i < newArr.length; i++) {
        answer += Number(newArr[i])
    }
    if(x % answer == 0) {
        return true
    } else {
        return false
    }
}
