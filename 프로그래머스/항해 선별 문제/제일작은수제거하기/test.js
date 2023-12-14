// function solution(arr) {
//     if (arr.length == 1) {
//         return [-1]
//     }
//     arr.splice(arr.indexof(Math.min(...arr)),1)
//     return arr;
// }
// 효율성에서 컷트!

// splice 먼저 해줬더니 됨...
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
