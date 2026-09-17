const arr = [10, 15, 20, 25, 30, 35, 40];

const findEven = (arr) => {
    return arr.filter((num) => num % 2 === 0);
};

console.log(findEven(arr));