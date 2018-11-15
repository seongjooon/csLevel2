const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
    debugger;
 for(var i=0; i<arr.length; i++) {
   setTimeout( () => fn(i), 1000);
 }
}

asyncRun(baseData, idx =>console.log(idx));