const accountId = 144553
let accountEmail = 'sai1234@gmail.com'
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
//accountId = 2 // changing const is not allowed

accountEmail = 'sn@sn.com'
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
  prefer not to use var
  because of issues in block scope and functional scope
*/

console.log(typeof(accountId));
console.log(typeof(accountCity));



