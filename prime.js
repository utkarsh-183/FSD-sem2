let number = 97;
let isprime = true;
for(let i =2; i<number/2; i++){
    if(number%i==0)  isprime = false;
}
console.log(isprime);