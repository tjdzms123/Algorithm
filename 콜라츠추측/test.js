function solution(num) {
    let answer = 0
    for (let i = 0; i < 500; i++) {
        if (num != 1) {
            if (num % 2 == 0) {
                num = num / 2
            } else {
                num = num * 3 + 1
            }
        } else {
            return answer = i
        }
    }
    return answer = -1
}

// 반복문 동작 원리 : i = 0 부터 시작해서 i가 500보다 작은거 확인하고
//                  조건문 돌리고 i++ 돌리고 i = 1 부터 다시 시작

