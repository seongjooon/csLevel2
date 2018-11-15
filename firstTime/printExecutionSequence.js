//<printExecutionSequence함수 만들기>

//프로그래밍에서 로깅(logging)은 프로그램의 수행과정이나 결과를 기록하는 것을 말한다. 
//함수를 호출할 때 마다 누적된 함수 호출 횟수를 알려주는 printExecutionSequence함수를 만들자.

let getFunctionArray = [];

function getCircle() {
    let runFunction = "circle"
    let getFunction = getFunctionArray.push(runFunction);
    return getFunction;
}
function getArea() {
    let parameter = arguments;
    let getFunction;
    if (parameter[0] == "circle") {
        let runFunction = "circle"
        Math.PI * parameter[1] * parameter[1]
        return getFunction = getFunctionArray.push(runFunction);
    } else if (parameter[0] == "rect") {
        let runFunction = "rect"
        parameter[1] * parameter[2]
        return getFunction = getFunctionArray.push(runFunction);
    }
    // return getFunction;
}
function printExecutionSequence(getFunctionArray) {
    let arrayNumber = getFunctionArray.length;
    console.log("arrayNumber : " + arrayNumber)
    console.log(typeof(arrayNumber))
    return getFunctionArray;
}
getCircle()
getCircle()
getArea('circle', 2)    
getArea('rect', 2, 3)
console.log(printExecutionSequence(getFunctionArray).join())
 //printExecutionSequence가 불려지면, 함수 호출된 순서를 출력한다. 
//> 계산수행순서 : circle, circle, circle, rect