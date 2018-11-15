//다각형의 넓이 구하기

function getPolygonStyle() {
    let polygonStyle = "원형, 사각형, 사다리꼴, 원기둥 중 원하는 도형을 입력해주세요."
    return polygonStyle;
}
function getPolygonElement() {
    let polygonStrElement = "값을 순서대로 넣어주세요.(띄워쓰기로 구분해주세요.) ex)반지름 높이 아랫변 윗변 순으로 입력하시오"
    let polygonSplitedElement = polygonStrElement.split(" ");
    return polygonSplitedElement;
}
function polygonChecker(polygonStyle) {
    if (polygonStyle == '원형') {
        return circleArea(polygonElement)
    } else if (polygonStyle == '사각형') {
        return rectangleArea(polygonElement)
    } else if (polygonStyle == '사다리꼴') {
        return trapezoidArea(polygonElement)
    } else if (polygonStyle == '원기둥') {
        return cylindricalArea(polygonElement)
    } else return "값을 제대로 입력해"
}
function circleArea() {
    let parameter = arguments;
    let parameterNumbers = parameter[0].map(strNumber => parseInt(strNumber, 10));
    console.log(parameter[0].length)
    console.log(parameterNumbers)
    let area;
    if (parameter[0].length == 1) {
        area = Math.PI * parameterNumbers[0] * parameterNumbers[0]
    } else { area = "값을 제대로 입력해" }
    if (isNaN(parameterNumbers[0])) {
        area = "값을 제대로 입력해"
    }
    console.log(area)
    return area
}
function rectangleArea() {
    let parameter = arguments;
    let parameterNumbers = parameter[0].map(strNumber => parseInt(strNumber, 10));
    console.log(parameter[0].length)
    console.log(parameterNumbers)
    let area;
    if (parameter[0].length == 2) {
        area = parameterNumbers[0] * parameterNumbers[1]
    } else { area = "값을 제대로 입력해" }
    if (isNaN(parameterNumbers[0]) || isNaN(parameterNumbers[1])) {
        area = "값을 제대로 입력해"
    }
    console.log(area)
    return area
}
function trapezoidArea() {
    let parameter = arguments;
    let parameterNumbers = parameter[0].map(strNumber => parseInt(strNumber, 10));
    console.log(parameter[0].length)
    console.log(parameterNumbers)
    let area;
    if (parameter[0].length = 3) {
        area = (parameterNumbers[0] + parameterNumbers[1]) * parameterNumbers[2] / 2
    } else { area = "값을 제대로 입력해" }
    if (isNaN(parameterNumbers[0]) || isNaN(parameterNumbers[1]) || isNaN(parameterNumbers[2])) {
        area = "값을 제대로 입력해"
    }
    console.log(area)
    return area
}
function cylindricalArea() {
    let parameter = arguments;
    let parameterNumbers = parameter[0].map(strNumber => parseInt(strNumber, 10));
    console.log(parameter[0].length)
    console.log(parameterNumbers)
    let area;
    if (parameter[0].length == 2) {
        area = (Math.PI * 2 * parameterNumbers[0] * parameterNumbers[0]) + (Math.PI * 2 * parameterNumbers[0] * parameterNumbers[1])
    } else { area = "값을 제대로 입력해" }
    if (isNaN(parameterNumbers[0]) || isNaN(parameterNumbers[1])) {
        area = "값을 제대로 입력해"
    }
    console.log(area)
    return area
}

let polygonStyle = getPolygonStyle();
let polygonElement = getPolygonElement();
console.log(polygonChecker(polygonStyle));