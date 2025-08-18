const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

marvel_heros.push(...dc_heros); // spread operator
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // ... -> spread operator
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat();
console.log(real_another_array);
const real_another_array2 = another_array.flat(Infinity); // putting Infinity is not agood practise
console.log(real_another_array2);

console.log(Array.isArray("sainithin"));
console.log(Array.from("sai nithin"));
console.log(Array.from({name:"sainithin"})); // try it , intresting case.

let score1 = 100 
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));







