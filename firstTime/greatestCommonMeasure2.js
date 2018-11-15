//재문's magic
//최대공약수 만들기

var strNum = prompt("두 수를 띄어서 입력해봐").split(" ");
var strSplitNum = strNum.split(" ");
var userNumbers = strSplitNum.map(strNumber => parseInt(strNumber, 10));
console.log("유저넘버 배열 : " + userNumbers);
function getGreatestCommonMeasure(userNumbers) {
    var greatestCommonMeasure = 0;
    if (userNumbers[0] > userNumbers[1]) {
        for (i = 1; i <= userNumbers[1]; i++) {
            if (userNumbers[0] % i == 0 && userNumbers[1] %i ==0) {
                greatestCommonMeasure = i;
            }
        }
    } else if (userNumbers[0] < userNumbers[1]) {
        for (i = 1; i <= userNumbers[0]; i++) {
            if (userNumbers[0] % i == 0 && userNumbers[1] %i ==0) {
                greatestCommonMeasure = i;
            }
        }
    } else {
        greatestCommonMeasure = userNumbers[0] ;
    }
    return greatestCommonMeasure;
}
console.log(getGreatestCommonMeasure(userNumbers));