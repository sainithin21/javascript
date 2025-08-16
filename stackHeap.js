// stack memory -> primitive
// heap memory  -> non-primitive

let myYtbName = "snofficialdotcom";
let anotherName = myYtbName;
console.log(anotherName);
anotherName = "ramdorcom"
console.log(myYtbName);

let myObj = {
    name : "sai nithin",
    roll : 16,
    class: "cse1"
}

let anotherObj = myObj 
console.log(anotherObj);
anotherObj.name = "sai nithin bandi"
console.log(myObj);

