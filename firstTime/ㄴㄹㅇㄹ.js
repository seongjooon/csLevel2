// 학점계산기
let data = [
    { 'name': '데이터베이스', 'grade': 'A+', 'credit': 2, 'major': false },
    { 'name': '딥러닝', 'grade': 'A', 'credit': 1, 'major': true },
    { 'name': '인공지능', 'grade': 'A', 'credit': 3, 'major': false },
    { 'name': '교양영어', 'grade': 'B+', 'credit': 2, 'major': true },
    { 'name': '철학', 'grade': 'B+', 'credit': 1, 'major': false }
];



function removeLecture(deleteData, timeout) {
    setTimeout(function () {

        let newArray = data.filter(subject => subject.name !== deleteData)
        showGrade(newArray)
    }, timeout);
}

removeLecture('알고리즘', 2000)
console.log(removeLecture('철학', 2000))

// function 






