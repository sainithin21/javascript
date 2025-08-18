const myArr = [0,1,2,3,4,5,true,"sai"]
console.log(myArr[0]);

// shallow copy -> share same reference point

const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4,"nithin")
console.log(myArr2[4]);

// Arrays methods
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9);
console.log(myArr);
console.log(myArr.shift());

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(1));

let arr = [0,1,2,3,4,5]
console.log(arr);
let newArr = arr.join()
console.log(newArr);

// slice and splice
console.log("A :",arr);
const myn1 = arr.slice(1,3);
console.log(myn1);
console.log("B :",arr);

console.log("A :",arr);
const myn2 = arr.splice(1,3); // end included in splice method.
console.log(myn2);
console.log("B :",arr);
