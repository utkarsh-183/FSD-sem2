const person = {
    name: "Utkarsh",
    age: 18,
    greet: function() {
        return this.name;
    }
};

let p1 = person.greet;

console.log(person.greet());

