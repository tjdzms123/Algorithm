function isPrime(num) {
	if (num === 2) {
		return true;
	}
	for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function solution(s) {
	let answer1 = [];
	let answer2 = [];
	let newArr = s.split(' ')

	for (let i = 0; i < newArr.length; i++) {
		if (isPrime(Number(newArr[i]))) {
			answer1.push(Number(newArr[i]))
		} else {
			answer2.push(Number(newArr[i]))
		}
	}
	answer1.sort((a,b) => a-b)
	answer2.sort((a,b) => a-b)
	let result = String(answer2[0]) + ' ' + String(answer1.pop())
	return result
}
let s = "97 75 88 99 95 92 73";
let x = "15 3 10 9 7 8";
let y =  "2 3 4 5"

console.log(solution(s))
