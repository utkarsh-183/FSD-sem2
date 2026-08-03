let year = 3000;

// if (year % 400 === 0) {
//     console.log("Leap Year");
// }
// else if (year % 100 === 0) {
//     console.log("Not a Leap Year");
// }
// else if (year % 4 === 0) {
//     console.log("Leap Year");
// }
// else {
//     console.log("Not a Leap Year");
// }

if(year%100==0){
    if(year%400==0) console.log('is a leap year');
    else console.log('not a leap year');
}
else {
    if(year%4==0) console.log('leap year');
    else console/log('not a leap year');
}