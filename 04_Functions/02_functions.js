function calculateCartPrice(...num1){
   return num1
}
console.log(calculateCartPrice(200,300,400));

function calculateCartPrice1(val1,val2,...num1){
   return num1
}
console.log(calculateCartPrice1(200,300,400,500));

const user = {
    name:"sai nithin",
    course_price:30000
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and course price is ${user.course_price}`); 
}

handleObject(user)

handleObject({
    name:"sam",
    course_price:25000
})

const myArr = [200,400,600,800]

function returnSecondVal(arr){
   return arr[1]
}
console.log(returnSecondVal(myArr));
console.log(returnSecondVal([100,200,300,400,500]));