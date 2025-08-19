// we can declare objects in 2 ways
// 1) literal way -> (singleton cannot be created by this way)
// 2) constructer -> (singleton created in this way)
// singleton -> explore
//Onject.create -> creating object in a constructer way

//object literals

const mySym = Symbol("key1") 

const jsUser = {
    name:"Sai Nithin",
    "full_name": "sai nithin bandi",
    [mySym]:"mykey1",
    age:22,
    Location:"Warangal",
    email:"sainithin@google.com",
    "is Logged In":false,
    lastLoginDays:["Monday","Tuesday","wednesday"]
}
console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.full_name);
console.log(jsUser["is Logged In"]);
//console.log(jsUser.mySym);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = "sainithin@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "sainithin@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser);
console.log(jsUser.greeting()); // res + undefined (added) ->doubt
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo()); // res + undefined (added) ->doubt










