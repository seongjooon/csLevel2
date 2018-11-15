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
function getGradeChangeNum(gradeDataArr, fourGradeTableArr) {
    const wholeGradeArr = [];
    gradeDataArr.forEach((gradeArr) => {
        var str = gradeArr.grade;
        wholeGradeArr.push(fourGradeTableArr[str]);
    });
    return wholeGradeArr;
}
// 전공점수 배열
function getMajorGradeChangeNum(MajorGradeDataArr, fourGradeTableArr) {
    const majorGradeArr = [];
    MajorGradeDataArr.forEach((gradeArr) => {
        var str = gradeArr.grade;
        if (gradeArr.major) majorGradeArr.push(fourGradeTableArr[str]);
    });
    return majorGradeArr;
}
// 이수학점 배열
function getCreditArr(creditData) {
    const creditDataArray = [];
    creditData.forEach((creditArr) => {
        const creditValue = creditArr.credit;
        creditDataArray.push(creditValue)
    });
    return creditDataArray;
}
// 전공이수학점 배열
function getMajorCreditArr(majorCreditData) {
    const majorCreditDataArray = [];
    majorCreditData.forEach((creditArr) => {
        const majorcreditValue = creditArr.credit;
        if (creditArr.major) majorCreditDataArray.push(majorcreditValue)
    });
    return majorCreditDataArray;
}
// 평균값 함수
function getGradeAverage(numberArray, numberArray2) {
    const averageResult = [];
    for (i = 0; i < numberArray.length; i++) {
        averageResult.push(numberArray[i] * numberArray2[i])
    }
    const numberSum = getCreditSum(averageResult)
    const numberSum2 = getCreditSum(numberArray2)
    const numberAverage = (numberSum / numberSum2).toFixed(2)
    return numberAverage;
}
// 합계 함수
function getCreditSum(numberArray) {
    const numberSum = numberArray.reduce((acc, cur, i) => {
        return acc + cur;
    }, 0)
    return numberSum
}
//새로운 과목 추가함수
function addLecture(allLectureData, newSubjectArray, fourGradeTable) {
    data.push(newSubjectArray);
    return showGrade(allLectureData, fourGradeTable)
}
//과목 제거하는 함수
function removeLecture(deleteData, timeout) {
    setTimeout(() => {
        data = data.filter(subject => subject.name !== deleteData)
        showGrade(data, gradeTable)
    }, timeout);
}
// main 함수
function showGrade(allData, fourGradeTable) {
    const wholeGrade = getGradeChangeNum(allData, fourGradeTable)
    const creditArray = getCreditArr(allData);
    const majorGrade = getMajorGradeChangeNum(allData, fourGradeTable)
    const majorCreditArray = getMajorCreditArr(allData);
    const wholeGradeAverage = getGradeAverage(wholeGrade, creditArray);
    const majorGradeAverage = getGradeAverage(majorGrade, majorCreditArray)
    const wholeCreditSum = getCreditSum(creditArray)
    const majorCreditSum = getCreditSum(majorCreditArray)
    console.log(`[4.5기준] 총평점 : ${wholeGradeAverage}, 전공평점 : ${majorGradeAverage}, 이수학점 : ${wholeCreditSum}, 전공이수학점 : ${majorCreditSum}`)
}
showGrade(data, gradeTable)
addLecture(data, newArray, gradeTable);
removeLecture('알고리즘', 2000);