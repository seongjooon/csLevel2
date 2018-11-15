function getArea() {
    let parameter = arguments;
    let area;
    if (parameter.length === 2) {
        area = Math.PI * parameter[1] * parameter[1];
    } else if (parameter.length === 3) {
        if (parameter[0] === "circle") {
            for (i = parameter[1]; i <= parameter[2]; i++) {
                area = Math.PI * i * i;
            }
        } else if (parameter[0] === "rect") {
            area = parameter[1] * parameter[2];
        }
    } else if (parameter.length === 4)
        area = (parameter[1] + parameter[2]) * parameter[3] / 2;
    return area;
}
getArea("circle", 10);
console.log(getArea("circle", 10))
//>  원의 넓이 값출력
getArea("rect", 10, 15);
console.log(getArea("rect", 10, 15))
//>  사각형의 넓이값출력
getArea("trapezoid", 10, 15, 12);
console.log(getArea("trapezoid", 10, 15, 12))
//>  사다리꼴의 넓이값출력
getArea("circle", 1, 100);
console.log(getArea("circle", 1, 100))
//> 반지름이 1부터 100까지 1씩 증가하면서, 100개의 원의 넓이의 결과값을 출력.