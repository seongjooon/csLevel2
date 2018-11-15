function removeLecture(allSubject) {
    const newData = []
    for(let i = 0; i < allSubject.length; i++) {
        if(allSubject[i].name !== '철학') {
            newData.push(allSubject[i])
        }
    }
    return newData
}

function removeLecture(allSubject) {
    const newData = []
    allSubject.forEach((subject) => {
        if (subject.name !== '철학') {
            newData.push(subject)
        }
    });
    return newData
}

function removeLecture(allsubject) {
    return allsubject.filter(subject => subject.name !== '철학')
}

let data = [
    { 'name': '데이터베이스', 'grade': 'A+', 'credit': 2, 'major': false },
    { 'name': '딥러닝', 'grade': 'A', 'credit': 1, 'major': true },
    { 'name': '인공지능', 'grade': 'A', 'credit': 3, 'major': false },
    { 'name': '교양영어', 'grade': 'B+', 'credit': 2, 'major': true },
    { 'name': '철학', 'grade': 'B+', 'credit': 1, 'major': false }
];
const removeLecture = (allsubject) => allsubject.filter(subject => subject.name !== '철학')
console.log(removeLecture(data))