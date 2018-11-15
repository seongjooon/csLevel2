let data = [
    {
        'name': '데이터베이스',
        'grade': 'A+',
        'credit': 2,
        'major': false
    },
    {
        'name': '데이터베이스',
        'grade': 'A',
        'credit': 1,
        'major': true
    }
];
let gradeTable = {
    'A+': 4.5,
    'A': 4,
    'B+': 3.5,
    'B': 3,
    'C+': 2.5,
    'C': 2,
    'D+': 1.5,
    'D': 1,
    'F': 0
}

function gradePush(data, gradeTable) {
    let wholeGrade = [];
    for (i = 0; i < data.length; i++) {
        var str = data[i]['grade'];
        wholeGrade.push(gradeTable[str]);
    }
    return wholeGrade;
}
console.log(gradePush(data, gradeTable))