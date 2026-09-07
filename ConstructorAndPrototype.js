function person(name) {
    this.name = name;
}

person.prototype.getName = function() {
    return this.name;
};

let p1 = new person("Utkarsh");

console.log(p1.getName());