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

let arr = [];
function getSKCustomer(c) {
    for (let i = 0; i < c.length; i++) {
        if (c[i]["type"] == "sk") arr.push(c[i])
    }
    return 
}
console.log(getSKCustomer(customer))