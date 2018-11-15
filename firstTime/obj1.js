//실행결과
// ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]
const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

let numbersArray = [];
for(let key in widget) {
    console.log(key)
    console.log(widget)
    for(let key2 in widget[key]){
        console.log(key2)
        console.log(widget[key])

        let widget2 = widget[key]
        if(typeof widget2[key2] === "number") {
            numbersArray.push(key2);
        }
    }
}
console.log(numbersArray)

console.log(widget.text)