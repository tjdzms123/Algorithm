function solution(s) {
    let answer = '';
    // 먼저 변수 선언하고
    if (s.length % 2 == 0) {
        answer = s[s.length / 2 - 1] + s[s.length / 2] 
        // 길이와 배열순서는 다르다
    } else {
        answer = s[Math.floor(s.length/2)]
        // 내림 메소드
    }
    return answer;
}