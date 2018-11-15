//망해써ㅓㅓㅓㅋㅋ

//최대공약수 만들기

//구도 쪼개기
//공약수란 무엇일까?
//최대공약수는?

// var strNum = prompt("두 수를 띄어서 입력해봐").split(" ");
var strNum = "16 36";
var strSplitNum = strNum.split(" ");
var userNumbers = strSplitNum.map(strNumber => parseInt(strNumber, 10));
console.log("유저넘버 배열 : " + userNumbers);

//두 수 중 큰 수의 소수배열
function getPrimeNumbers(userNumbers) {
    var primeNumbers ;
    if (userNumbers[0] > userNumbers[1]) {
        for (i = 2; i <= userNumbers[1]; i++) {
            if (userNumbers[1] % i === 0) primeNumbers.push(i);
        }
    }
    if (userNumbers[1] > userNumbers[0]) {
        for (i = 2; i <= userNumbers[0]; i++) {
            if (userNumbers[0] % i === 0) primeNumbers.push(i);
        }
    }
    return primeNumbers;
}
console.log(getPrimeNumbers(userNumbers));

//약수배열 만들기
function getDivisorNumbers1(userNumbers, userNumbersArr) {
    console.log(userNumbers)
    console.log(userNumbersArr)
    var divisorNumbers1 = [];
    var len = userNumbersArr.length;
    for (i = 0; i < len; i++) {
        if (userNumbers[1] / userNumbersArr[i] == 0) {
            divisorNumbers1.push(i)
        }
    }
    return divisorNumbers1;
}
function getDivisorNumbers2(userNumbers, userNumbersArr) {
    var divisorNumbers2 = [];
    var len = userNumbersArr.length;
    for (i = 0; i < len; i++) {
        if (userNumbers[0] / userNumbersArr[i] == 0) {
            divisorNumbers1.push(i)
        }
    }
    return divisorNumbers2;
}

//공약수배열 만들기
function getCommonFactors(divisorNumbers1, divisorNumbers2) {
    var len1 = divisorNumbers1.length;
    var len2 = divisorNumbers2.length;
    var commonMeasures = [];
    for (i = 0; i < len1; i++) {
        for (j = 0; j < len2; j++) {
            if (divisorNumbers1[i] == divisorNumbers2[j]) {
                commonMeasures.push(divisorNumbers1[i]);
            }
        }
    }
    console.log(commonMeasures);
    console.log(commonMeasures.slice(-1)); //최대공약수!!!도출
}

function main() {
    var userNumbersArr = getPrimeNumbers(userNumbers);
    console.log(userNumbersArr);
    console.log(userNumbers);
    var divisorNumbers1 = getDivisorNumbers1(userNumbersArr, userNumbers);
    console.log(getDivisorNumbers1(userNumbers, userNumbersArr));
    var divisorNumbers2 = getDivisorNumbers1(userNumbersArr, userNumbers);
    console.log(getDivisorNumbers2(userNumbers, userNumbersArr));
}
main();