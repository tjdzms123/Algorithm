let participant = ["leo", "kiki", "eden"], completion = ["eden", "kiki"]

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}
// sort로 배열 정리를 하여 순서를 맞추고 for문을 통해 비교함

console.log(completion[2])
