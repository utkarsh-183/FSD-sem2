function greet (city, country){
    console.log(`I'm $ (this.name) from city ${city}, ${country}`);
}
const person = {
    name : "Arvind",
    greet(){
        console.log(this.name);
    }
};

setTimeout(person.greet, 1000);