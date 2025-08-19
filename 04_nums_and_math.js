const score = 400

const balance = new Number(100.5648)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num = 23.8976
console.log(num.toPrecision(5));

const num2 = 123.8976
console.log(num2.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString());

const hundreds2 = 1000000
console.log(hundreds2.toLocaleString('en-IN'));

//--------- Maths ------------------
//console.log(Math); // try in browser
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,7,5,1,2));
console.log(Math.max(4,7,5,1,2));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);


