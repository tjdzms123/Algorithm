function solution(s) {
    let answer = false;
    let temp = Number(s);
    if ((s.length === 4 || s.length === 6) && temp === parseInt(s)) {
        // parseInt는 불가능할 때까지 문자열에서 숫자를 읽음
        return answer = true;
    } else
        return answer = false;
};

// 정규식을 활용한 풀이 
// ^은 시작 $은 끝 
function alpha_string46(s) {
    var regex = /^\d{6}$|^\d{4}$/;

    return regex.test(s);
}
