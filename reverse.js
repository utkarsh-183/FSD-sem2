let rev = 0;
let digit = 12345;
while(digit>0){
    let lastDigit = digit%10;
    rev = rev *10+lastDigit;
    digit = Math.floor(digit/10);
}
console.log(rev);