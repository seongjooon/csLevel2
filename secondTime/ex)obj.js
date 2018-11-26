/*객체 실습 1
실행결과
["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]
*/
const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    }
}
console.log(widget.window.width)


function getValue(w) {
    let result = [];
    if(isNaN(w.window.width)) result.push()
    return result
}
console.log(getValue(widget));




















// const getNumbersElement = (w) => {
//     let result = [];
//     for (let v in w) {
//         for(let k in v) {
//             console.log(v[k])
//             // if (isNaN(v)) result.push(v)
//         }
//     }
//     return result
// }
// console.log(getNumbersElement(widget))