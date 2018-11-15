


var arr1 = [2, 3, 8, 12, 24];
var arr2 = [2, 4, 8, 16];

var len1 = arr1.length;
var len2 = arr2.length;
var numArr = [];
for (j = 0; j < len2; j++) {
for (i = 0; i < len1; i++) {
        console.log(arr1[i], arr2[j])
        if (arr1[i] == arr2[j]) {
            numArr.push(arr1[i])
        }
    }
}

console.log(numArr)
console.log(numArr.slice(-1))
