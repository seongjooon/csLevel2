// Factorial 구현하기

// function numFac(number) {
//     let sum = 1;
//     for (let i = 1; i <= number; i++) {
//         sum *= i;
//     }
//     return sum;
// }
// console.log(numFac(10));



/// 일반함수를 재귀로 변환시키기
//주찬이가 만들어 주고 이해시켜준 예제##

var numFac = function (number, a) {
    a *= number;
    if (number === 1) return a;
    return numFac(number-1 ,a);
}
console.log(numFac(4, 1));





// function a(2) {
//     if(n===0) return;
//     console.log(n)
//     a(1) {
//         if(n===0) return;
//         console.log(n)
//         a(0) {
//             if(n===0) return;
//             a(-1)
//         }
//     }
// }