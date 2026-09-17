// const arr = [10, 15, 20, 25, 30, 35, 40];

// const findEven = (arr) => {
//     return arr.filter((num) => num % 2 === 0);
// };

// console.log(findEven(arr));

//  without filter

let numbers = [10, 15, 20, 25, 30, 35, 40];

function findEven(numbers) {
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        }
    }

    return even;
}

console.log(findEven(numbers));