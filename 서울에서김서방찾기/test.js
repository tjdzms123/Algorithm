let seoul = ["Jane", "Kim"]
function solution(seoul) {
    let answer = seoul.findIndex(e => e == 'Kim')
    // 배열에서 특정 요소를 찾고 그 Index를 리턴, 없으면 -1 리턴
    return '김서방은 ' + answer + '에 ' + '있다';
}
console.log(solution(seoul))