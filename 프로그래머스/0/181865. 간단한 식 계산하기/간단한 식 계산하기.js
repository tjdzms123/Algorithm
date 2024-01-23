function solution(binomial) {
    // 주어진 이항식을 공백을 기준으로 나누어 배열로 저장
    var parts = binomial.split(" ");

    // 배열에서 숫자와 연산자를 추출
    var a = parseInt(parts[0], 10);
    var op = parts[1];
    var b = parseInt(parts[2], 10);

    // 계산 수행
    var result;
    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        default:
            // 유효하지 않은 연산자인 경우 에러 또는 특정 값 처리
            console.error("유효하지 않은 연산자입니다.");
            return null;
    }

    return result;
}