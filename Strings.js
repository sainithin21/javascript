let str = "hello"+" world"
console.log(str);

let name = "sai nithin"
let repoCount = 50
console.log(name+repoCount+" Value");

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sainithin')
console.log(gameName[0]);
console.log(gameName.__proto__); // try in browser
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('t'));

let newString = gameName.length
console.log(newString);

newString = gameName.substring(0,3) // we cannot give negative vals in substr method
console.log(newString);

let str1 = gameName.slice(-8,4) // we can use -Ve vals in substr method
console.log(str1);

let str2 = "   sai   ";
console.log(str2);
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

const url = "https://www.google.com"
console.log(url.replace('google','yahoo'));
console.log(url);
console.log(url.includes('www'));

const val = "Sun rises in the east"
let valArr = val.split(' ')
console.log(valArr);

