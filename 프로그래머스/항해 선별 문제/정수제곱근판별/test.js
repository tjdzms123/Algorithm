function solution(n) {
    if ((n ** (1 / 2)) % 1 == 0) {
        // 양의 정수이면 1로 나눴을때 나머지가 없음을 이용
        let answer = ((n ** (1 / 2)) + 1) ** 2
        return answer;
    } else {
        return -1
    }

} 
