// make a object of const book with 5 different programming language author of each and price in js 

const book = {
    javascript: {
        author: "Marijn Haverbeke",
        price: 599
    },
    python: {
        author: "Mark Lutz",
        price: 699
    },
    cpp: {
        author: "Bjarne Stroustrup",
        price: 899
    },
    java: {
        author: "Herbert Schildt",
        price: 649
    },
    c: {
        author: "Dennis Ritchie",
        price: 499
    }
};

// 1-> write a js program that selects books whose price is greater than 800

const result = Object.entries(book).filter(([language, details]) => {
    return details.price > 800;
});

console.log(result);

// 2-> write a js program that creates a new array contaning only titles of all books

const titles = Object.keys(book);

console.log(titles);

// 3-> write a js program that calculates the total price of all books combined

const totalPrice = Object.values(book).reduce((total, details) => {
    return total + details.price;
}, 0);

console.log(totalPrice);

// 4 -> write a js program that extracts title of books that are consideredd expensive (price greater than 800)
const expensiveBooks = Object.entries(book)
    .filter(([title, details]) => details.price > 800)
    .map(([title, details]) => title);

console.log(expensiveBooks);