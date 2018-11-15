let numbers = [{
    "name": "Yong",
    "type": "sk",
    "childnode": [{
        "name": "echo",
        "type": "sk",
        "childnode": [{
            "name": "cong",
            "type": "sk",
            "childnode": []
        }]
    }]
},
{
    "name": "hong",
    "type": "sk",
    "childnode": [{
        "name": "mong",
        "type": "sk",
        "childnode": []
    }]
}]


let array = [];
function findSk(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]["type"] === "sk") {
            array.push(numbers[i]["name"])
            findSk(numbers[i]["childnode"]);
        }
    }
    if (numbers.length) return array
}
console.log(findSk(numbers));
console.log(array);

function a() {
    for (let i = 1; i <= 5; i++) {
        return i;
    }
}

console.log(a());