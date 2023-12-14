function solution(month, day){
	let start_date = new Date(2022, month-1, day);
    let end_date = new Date(start_date.setDate(start_date.getDate() + 99))
	/* new Date로 날짜를 다시 설정해준다. getDate()로 start_date가 몇일인지 가져오고
	   99일을 더한 값을, start_date에 다시 넣어준다(setDate()) */
	return end_date
}
console.log(solution(6, 22))
