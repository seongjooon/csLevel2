// 학점계산기
let data = [
    { 'name': '데이터베이스', 'grade': 'A+', 'credit': 2, 'major': false },
    { 'name': '딥러닝', 'grade': 'A', 'credit': 1, 'major': true },
    { 'name': '인공지능', 'grade': 'A', 'credit': 3, 'major': false },
    { 'name': '교양영어', 'grade': 'B+', 'credit': 2, 'major': true },
    { 'name': '철학', 'grade': 'B+', 'credit': 1, 'major': false }
];
// 학점 기준에 따라 변경
let gradeTable = { 'A+': 4.5, 'A': 4, 'B+': 3.5, 'B': 3, 'C+': 2.5, 'C': 2, 'D+': 1.5, 'D': 1, 'F': 0 }
//새로운 과목추가 함수
let newArray = { 'name': '알고리즘', 'grade': 'B', 'credit': 3, 'major': true }
// 전체점수 배열(등급에 따라 점수 환산) 
function getGradeChangeNum(data, gradeTable) {
    let wholeGrade = [];
    for (i = 0; i < data.length; i++) {
        var str = data[i]['grade'];
        wholeGrade.push(gradeTable[str]);
    }
    return wholeGrade;
}
// 전공점수 배열
function getMajorGradeChangeNum(data, gradeTable) {
    let majorGrade = [];
    for (i = 0; i < data.length; i++) {
        var str = data[i]['grade'];
        if (data[i]['major']) majorGrade.push(gradeTable[str]);
    }
    return majorGrade;
}
// 이수학점 배열
function getCreditArr(data) {
    let creditArray = [];
    for (i = 0; i < data.length; i++) {
        let creditValue = data[i]['credit'];
        creditArray.push(creditValue)
    }
    return creditArray;
}
// 전공이수학점 배열
function getMajorCreditArr(data) {
    let majorCreditArray = [];
    for (i = 0; i < data.length; i++) {
        let majorcreditValue = data[i]['credit'];
        if (data[i]['major']) majorCreditArray.push(majorcreditValue)
    }
    return majorCreditArray;
}
// 평균값 함수
function getGradeAverage(numberArray, numberArray2) {
    let result = [];
    for (i = 0; i < numberArray.length; i++) {
        result.push(numberArray[i] * numberArray2[i])
    }
    let numberSum = getCreditSum(result)
    let numberSum2 = getCreditSum(numberArray2)
    let numberAverage = (numberSum / numberSum2).toFixed(2)
    return numberAverage;
}
// 합계 함수
function getCreditSum(numberArray) {
    let numberSum = numberArray.reduce((acc, cur, i) => {
        return acc + cur;
    }, 0)
    return numberSum
}
//새로운 과목 추가함수
function addLecture(data, array, gradeTable) {
    data.push(array);
    return showGrade(data, gradeTable)
}
//과목 제거하는 함수
function removeLecture(deleteData, timeout) {
        setTimeout(function () {
            data = data.filter(subject => subject.name !== deleteData)
            showGrade(data, gradeTable)
        }, timeout);
    }
// main 함수
function showGrade(data, gradeTable) {
    let wholeGrade = getGradeChangeNum(data, gradeTable)
    let creditArray = getCreditArr(data);
    let majorGrade = getMajorGradeChangeNum(data, gradeTable)
    let majorCreditArray = getMajorCreditArr(data);
    let wholeGradeAverage = getGradeAverage(wholeGrade, creditArray);
    let majorGradeAverage = getGradeAverage(majorGrade, majorCreditArray)
    let wholeCreditSum = getCreditSum(creditArray)
    let majorCreditSum = getCreditSum(majorCreditArray)
    console.log(`[4.5기준] 총평점 : ${wholeGradeAverage}, 전공평점 : ${majorGradeAverage}, 이수학점 : ${wholeCreditSum}, 전공이수학점 : ${majorCreditSum}`)
}
showGrade(data, gradeTable)
addLecture(data, newArray, gradeTable);
removeLecture('알고리즘', 2000);