let x = 2028;
let result = (x % 400 == 0 || (x%4==0 &&   x%100!=0)) ? "leap year" : "not a leap year"; 
console.log(result);