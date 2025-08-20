// const tinderUser = new Object() -> singleton object
// const tinderUser = {} -> non-singleton object

const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userFullName:{
            firstName:"sai nithin",
            lastName :"Bandi"
        }
    }
}

console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj =  {5:"e",6:"f"}
const obj3 = {obj1,obj2}
console.log(obj3);
// const obj4 = {...obj1,...obj2}
const obj4 = Object.assign({},obj1,obj2,obj)
// const obj5 = Object.assign(obj1,obj2,obj)
console.log(obj1);

const target = {a:1,b:2}
const source = {c:3,d:4}
const returnedTarget = Object.assign(target,source)
console.log(target===returnedTarget);

const obj5 = {...target,...source}
console.log(obj5);

const users = [
    {
       id:1,
       email:"sai@123gmail.com"
    },
    {
       id:2,
       email:"rak@123gmail.com"
    },
    {
       id:3,
       email:"ram@456gmail.com"
    },
]

console.log(users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));









