function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
}

// 1월은 0, new Date로 날짜 가져오고 toString은 클래스에서 문자열로 바꿔줌
// slice로 0번째부터 3번째까지 글자만 가져오고
// toUpperCase가 문자열 전부를 대문자로 바꿔줌
console.log(solution(5, 24))