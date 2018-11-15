function getArea() {
    let parameter = arguments;
    if (parameter.length === 2) {
        원넓이
    } else if (parameter.length === 3) {
        if (parameter[0] === "circle") {
            for (i = parameter[1]; i <= parameter[2]; i++) {
                원넓이
            }

        } else if (parameter[0] ==="rect") {
            사각형넓이
        }
    } else if (parameter.length === 4) {
        사다리꼴
    }
}
getArea('circle', 10);

getArea('rect', 10,15);

getArea('trapezoid', 10,15,12);

getArea('circle', 1, 100);