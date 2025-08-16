// primitive 

// 7 types : String , Number , Boolean , null , undefined . Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined
console.log(userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3456543576654356784n;
console.log(typeof bigNumber);

// non - primitive (Reference) 
// Array , Objects , Functions

const heros = ["ironman" , "batman" , "simon"]

const obj = {
      name : "sai nithin bandi",
      rollno : 16
}
console.log(obj);

const myfun = function(){
    console.log('Hello world'); 
}
