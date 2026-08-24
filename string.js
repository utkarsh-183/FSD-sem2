// let str1 = `Hello`;
// const str = new String(`hello`);

// str1 = str;

// console.log(str1 == str);
// console.log(str1 === str);

const fruits = ["Apple", "Banana", "Guava"];
const copy = fruits.slice(0,2);
console.log(fruits);
console.log(copy);
console.log(copy === fruits);
console.log(copy[0] === fruits[0]);