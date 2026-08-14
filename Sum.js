let sum = 0;
let digit = 43512;
while(digit>0){
   let lastdigit=digit%10;
    sum = sum + lastdigit;
    digit = Math.floor(digit / 10);
}
console.log(sum);