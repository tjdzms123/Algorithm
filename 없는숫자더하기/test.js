let numbers = [1,2,3,4,6,7,8,0]	
function solution(numbers) {
    let sum = 45
    let sum1 = 0
    
    for (let i = 0; i < numbers.length; i++){
        sum1 += numbers[i]
    }
    return answer;
}

// includes 사용한 방법
function solution(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}
