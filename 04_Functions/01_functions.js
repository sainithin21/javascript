function add(a,b=8){
    return a+b;
}
console.log(add(3,5));
console.log(typeof add);
console.log(add(3,));

function loginUserMessage(username="sai nithin"){
    if(username===undefined){
        console.log("pls enter username!");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sai nithin"));
