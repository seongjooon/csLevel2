const customer = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-0000-0000",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-0000-1111",
        "type": "sk"
    }]
}]

function getSKCustomer(c) {
    let arr = [];
    for (let key in c) {
        for (let key2 in c[key]) {
            if (c[key][key2] === "sk") {
                arr.push(c[key]["name"])
            }
        }
    }
    return arr;
}
console.log(getSKCustomer(customer))