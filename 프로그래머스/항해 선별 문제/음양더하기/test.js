let absolutes = [4,7,12], signs = [true,false,true]
let answer = 0
function solution(absolutes, signs) {
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] ) {
            answer += absolutes[i]
        } else {
            answer -= absolutes[i]
        }
    }
    return answer;
}

console.log(solution(absolutes,signs))
