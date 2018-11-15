let numbers = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-0000-0000",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-0000-1111",
        "type": "kt",
        "childnode": [{
            "id": 115,
            "name": "hary",
            "phone": "211-1111-0000",
            "type": "sk",
            "childnode": [{
                "id": 1159,
                "name": "pobi",
                "phone": "010-444-000",
                "type": "kt",
                "childnode": [{
                    "id": 11592,
                    "name": "cherry",
                    "phone": "111-222-0000",
                    "type": "lg",
                    "childnode": []
                },
                {
                    "id": 11595,
                    "name": "solvin",
                    "phone": "010-000-3333",
                    "type": "sk",
                    "childnode": []
                }
                ]
            }]
        },
        {
            "id": 116,
            "name": "kim",
            "phone": "444-111-0200",
            "type": "kt",
            "childnode": [{
                "id": 1168,
                "name": "hani",
                "phone": "010-222-0000",
                "type": "sk",
                "childnode": [{
                    "id": 11689,
                    "name": "ho",
                    "phone": "010-000-0000",
                    "type": "kt",
                    "childnode": [{
                        "id": 116890,
                        "name": "wonsuk",
                        "phone": "010-000-0000",
                        "type": "kt",
                        "childnode": []
                    },
                    {
                        "id": 1168901,
                        "name": "chulsu",
                        "phone": "010-0000-0000",
                        "type": "sk",
                        "childnode": []
                    }
                    ]
                }]
            }]
        },
        {
            "id": 117,
            "name": "hong",
            "phone": "010-0000-0000",
            "type": "lg",
            "childnode": []
        }
        ]
    }]
}]

let array = [];
function findSk(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]["type"] === "sk") {
            array.push(numbers[i]["name"])
        }
        findSk(numbers[i]["childnode"]);
    }
    return array
}
console.log(findSk(numbers));
// console.log(array);