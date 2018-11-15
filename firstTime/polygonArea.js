// 다각형의 넓이 구하기

// function getUserPolygon() {
//     let userPolygonStr = "원하는 도형을 입력해주세요"
//     return userPolygonStr;
// }
// let userPolygonStr = getUserPolygon();
// console.log(userPolygonStr)

let polygonStyle = "사각형";
let polygonParameter = [10, ];
function polygonChecker(polygonStr) {
    if (polygonStr == "원형") {
        console.log(circleArea(polygonParameter))
    } else if (polygonStr == "사각형") {
        console.log(rectangleArea(polygonParameter))
    } else if (polygonStr == "사다리꼴") {
        console.log(trapezoidArea(polygonParameter))
    } else if (polygonStr == "원기둥") {
        console.log(cylindricalArea(polygonParameter))
    }
}
let polygon = polygonChecker(polygonStyle);

function circleArea(polygonParameter) {
    let area;
    if (polygonParameter.length == 1) {
        if (typeof(polygonParameter[0]) == 'number') {
            area = Math.PI * polygonParameter[0] * polygonParameter[0]
        } else area = "파라미터 변수 타입 에러"
    } else area = "파라미터 변수 갯수 오류"
    return area;
}

function rectangleArea(polygonParameter) {
    let area;
    if (polygonParameter.length == 2) {
        if (typeof(polygonParameter[0]) == 'number' && typeof(polygonParameter[1]) == 'number') {
            area = polygonParameter[0] * polygonParameter[1]
        } else area = "파라미터 변수 타입 에러"
    } else area = "파라미터 변수 갯수 오류"
    return area;
}

function trapezoidArea(polygonParameter) {
    let area;
    if (polygonParameter.length == 3) area = (polygonParameter[0] + polygonParameter[1]) * polygonParameter[2] / 2
    else area = "파라미터 변수 오류"
    return area;
}

function cylindricalArea(polygonParameter) {
    let area;
    if (polygonParameter.length == 2)
        area = (2 * Math.PI * polygonParameter[0] * polygonParameter[0]) + (2 * Math.PI * polygonParameter[0] * polygonParameter[1]);
    else area = "파라미터 변수 오류"
    return area;
}