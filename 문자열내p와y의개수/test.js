function solution(s){
    return s.toUpperCase().split("P").length == s.toUpperCase().split("Y").length;
}

// 문자열을 split으로 분열해서 길이가 같은지 비교