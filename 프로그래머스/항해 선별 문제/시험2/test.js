function solution(str) {
	let count = 0;
	let sum = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] == 'O') {
			count++
		} else {
			count = 0    // else 구문이 있어야지 count를 초기화 가능
		}                // 없으면 전 count를 더해버림
 		sum += count
	}
	return sum;
}
let str = "OOOOOOOOOO";

console.log(solution(str))


